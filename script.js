/* ==================================================
   SCRATCH TICKET
================================================== */

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

const grayImage = new Image();
grayImage.src = "images/ticketgray.png";


/* ==================================================
   SETTINGS
================================================== */

const brushSize = 50;

let lastX = null;
let lastY = null;


/* ==================================================
   LOAD GRAY IMAGE
================================================== */

grayImage.onload = function () {

    canvas.width = grayImage.naturalWidth;
    canvas.height = grayImage.naturalHeight;

    ctx.drawImage(
        grayImage,
        0,
        0,
        canvas.width,
        canvas.height
    );

};


/* ==================================================
   GET MOUSE POSITION
================================================== */

function getMousePosition(event) {

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    };

}


/* ==================================================
   ERASE CIRCLE
================================================== */

function eraseCircle(x, y) {

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        brushSize,
        0,
        Math.PI * 2
    );

    ctx.fill();

}


/* ==================================================
   SCRATCH
================================================== */

function scratch(event) {

    const position = getMousePosition(event);

    /*
       회색 이미지를 지우는 모드
    */

    ctx.globalCompositeOperation = "destination-out";


    /*
       첫 번째 위치
    */

    if (lastX === null || lastY === null) {

        eraseCircle(
            position.x,
            position.y
        );

    }


    /*
       이전 위치와 현재 위치 사이를
       촘촘하게 연결
    */

    else {

        const distance = Math.hypot(
            position.x - lastX,
            position.y - lastY
        );


        /*
           마우스가 빠르게 움직여도
           중간이 끊기지 않도록 함
        */

        const steps = Math.max(
            Math.ceil(distance / 8),
            1
        );


        for (let i = 1; i <= steps; i++) {

            const progress = i / steps;

            const x =
                lastX +
                (position.x - lastX) * progress;

            const y =
                lastY +
                (position.y - lastY) * progress;


            eraseCircle(x, y);
        }

    }


    /*
       현재 위치 저장
    */

    lastX = position.x;
    lastY = position.y;

}


/* ==================================================
   MOUSE MOVE
================================================== */

canvas.addEventListener(
    "pointermove",
    function (event) {

        scratch(event);

    }
);


/* ==================================================
   MOUSE LEAVE
================================================== */

canvas.addEventListener(
    "pointerleave",
    function () {

        lastX = null;
        lastY = null;

    }
);


/* ==================================================
   TOUCH
================================================== */

canvas.addEventListener(
    "touchmove",
    function (event) {

        event.preventDefault();

    },
    {
        passive: false
    }
);



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////








const stickers = document.querySelectorAll(".draggable-sticker");

stickers.forEach(sticker => {

    let dragging = false;
    let startX = 0;
    let startY = 0;

    let originalX = 0;
    let originalY = 0;


    sticker.addEventListener("pointerdown", e => {

        dragging = true;

        startX = e.clientX;
        startY = e.clientY;

        originalX = parseFloat(sticker.dataset.x) || 0;
        originalY = parseFloat(sticker.dataset.y) || 0;

        sticker.setPointerCapture(e.pointerId);

        sticker.style.cursor = "grabbing";

        e.preventDefault();
    });


    sticker.addEventListener("pointermove", e => {

        if (!dragging) return;

        const x = originalX + (e.clientX - startX) / 0.15;
        const y = originalY + (e.clientY - startY) / 0.15;

        sticker.style.transform =
            `translate3d(${x}px, ${y}px, 0) rotate(var(--rotation))`;

        sticker.dataset.x = x;
        sticker.dataset.y = y;
    });


    sticker.addEventListener("pointerup", e => {

        dragging = false;

        sticker.releasePointerCapture(e.pointerId);

        sticker.style.cursor = "grab";
    });

});