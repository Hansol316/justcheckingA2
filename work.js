/* ==================================================
   WORK PAGE - FINAL JS
================================================== */


/* ==================================================
   WORK DATA
================================================== */

const works = {

    1: {
        image: "images/work1detail.png",
        mobileImage: "images/work1.2detail.png",
        link: "https://youtu.be/4HyiVm-xIUs"
    },

    2: {
        image: "images/work2detail.png",
        mobileImage: "images/work2.2detail.png",
        link: "https://youtu.be/s3tuJhs7S9A"
    },

    3: {
        image: "images/work3detail.png",
        mobileImage: "images/work3.2detail.png",
        link: "https://youtu.be/zdtxjasQN9o"
    },

    4: {
        image: "images/work4detail.png",
        mobileImage: "images/work4.2detail.png",
        link: "https://youtu.be/PBv-zzPbBNc"
    },

    5: {
        image: "images/work5detail.png",
        mobileImage: "images/work5.2detail.png",
        link: "#"
    }

};


/* ==================================================
   ELEMENTS
================================================== */

const workCards =
    document.querySelectorAll(".work-card");

const detailOverlay =
    document.getElementById("detailOverlay");

const detailImage =
    document.getElementById("detailImage");

const detailLink =
    document.getElementById("detailLink");

const closeButton =
    document.getElementById("closeButton");

const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");


/* ==================================================
   CURRENT WORK
================================================== */

let currentWork = 1;


/* ==================================================
   DETAIL IMAGE
================================================== */

function getDetailImage(workNumber) {

    if (window.innerWidth <= 800) {

        return works[workNumber].mobileImage;

    }

    return works[workNumber].image;

}


/* ==================================================
   OPEN DETAIL
================================================== */

function showWork(workNumber) {

    if (workNumber < 1) {
        workNumber = 5;
    }

    if (workNumber > 5) {
        workNumber = 1;
    }

    currentWork = workNumber;


    detailImage.src =
        getDetailImage(currentWork);


    detailImage.alt =
        "Work " + currentWork;


    /* Work 5 */

    if (currentWork === 5) {

        detailLink.href = "#";

        detailLink.removeAttribute("target");

        detailLink.textContent =
            "VIEW PROJECT";

    }

    /* Work 1~4 */

    else {

        detailLink.href =
            works[currentWork].link;

        detailLink.setAttribute(
            "target",
            "_blank"
        );

        detailLink.textContent =
            "VIEW PROJECT";

    }


    detailOverlay.classList.add(
        "active"
    );


    updateResponsiveArrows();

}


/* ==================================================
   WORK CARD CLICK
================================================== */

workCards.forEach(function(card) {

    card.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();

            const workNumber =
                Number(card.dataset.work);

            showWork(workNumber);

        }
    );

});


/* ==================================================
   DETAIL NEXT
================================================== */

nextButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();

        showWork(
            currentWork + 1
        );

    }
);


/* ==================================================
   DETAIL PREVIOUS
================================================== */

prevButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();

        showWork(
            currentWork - 1
        );

    }
);


/* ==================================================
   CLOSE DETAIL
================================================== */

function closeDetail() {

    detailOverlay.classList.remove(
        "active"
    );

    updateResponsiveArrows();

}


closeButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();

        closeDetail();

    }
);


/* ==================================================
   CLICK OUTSIDE DETAIL
================================================== */

detailOverlay.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            detailOverlay
        ) {

            closeDetail();

        }

    }
);


/* ==================================================
   WORK 5 VIEW PROJECT
================================================== */

const work5ViewImages = [

    "images/work5viewproject1.png",
    "images/work5viewproject2.png",
    "images/work5viewproject3.png",
    "images/work5viewproject4.png"

];


let work5ViewIndex = 0;


/* ==================================================
   CREATE VIEW PROJECT OVERLAY
================================================== */

let viewProjectOverlay =
    document.querySelector(
        ".view-project-overlay"
    );


/*
   기존 overlay가 없다면 생성
*/

if (!viewProjectOverlay) {

    viewProjectOverlay =
        document.createElement("div");

    viewProjectOverlay.className =
        "view-project-overlay";


    /*
       ★ 중요
       ← → 문자를 넣지 않음
       CSS ::before가 화살표를 만듦
    */

    viewProjectOverlay.innerHTML = `

        <button
            class="view-project-close"
            aria-label="Close project"
        >
            ×
        </button>


        <button
            class="view-project-arrow view-project-prev"
            aria-label="Previous image"
        ></button>


        <img
            class="view-project-image"
            src=""
            alt="Work 5 project"
        >


        <button
            class="view-project-arrow view-project-next"
            aria-label="Next image"
        ></button>

    `;


    document.body.appendChild(
        viewProjectOverlay
    );

}


/* ==================================================
   REMOVE DUPLICATE OVERLAYS
================================================== */

const allOverlays =
    document.querySelectorAll(
        ".view-project-overlay"
    );


allOverlays.forEach(
    function(overlay, index) {

        if (index > 0) {

            overlay.remove();

        }

    }
);


/* 다시 가져오기 */

viewProjectOverlay =
    document.querySelector(
        ".view-project-overlay"
    );


/* ==================================================
   VIEW PROJECT ELEMENTS
================================================== */

const viewProjectImage =
    viewProjectOverlay.querySelector(
        ".view-project-image"
    );


const viewProjectClose =
    viewProjectOverlay.querySelector(
        ".view-project-close"
    );


const viewProjectPrev =
    viewProjectOverlay.querySelector(
        ".view-project-prev"
    );


const viewProjectNext =
    viewProjectOverlay.querySelector(
        ".view-project-next"
    );


/* ==================================================
   REMOVE DUPLICATE VIEW PROJECT ARROWS
================================================== */

const viewPrevButtons =
    viewProjectOverlay.querySelectorAll(
        ".view-project-prev"
    );


viewPrevButtons.forEach(
    function(button, index) {

        if (index > 0) {

            button.remove();

        }

    }
);


const viewNextButtons =
    viewProjectOverlay.querySelectorAll(
        ".view-project-next"
    );


viewNextButtons.forEach(
    function(button, index) {

        if (index > 0) {

            button.remove();

        }

    }
);


/* ==================================================
   SHOW VIEW PROJECT IMAGE
================================================== */

function showWork5ViewImage(index) {

    if (index < 0) {

        index =
            work5ViewImages.length - 1;

    }


    if (
        index >=
        work5ViewImages.length
    ) {

        index = 0;

    }


    work5ViewIndex = index;


    viewProjectImage.src =
        work5ViewImages[
            work5ViewIndex
        ];

}


/* ==================================================
   HIDE OTHER ARROWS
================================================== */

function hideOtherArrows() {

    /* Responsive arrows */

    document
        .querySelectorAll(
            ".responsive-work-arrow"
        )
        .forEach(
            function(button) {

                button.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            }
        );


    /* Detail arrows */

    document
        .querySelectorAll(
            ".detail-arrow"
        )
        .forEach(
            function(button) {

                button.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            }
        );

}


/* ==================================================
   RESTORE OTHER ARROWS
================================================== */

function restoreOtherArrows() {

    document
        .querySelectorAll(
            ".detail-arrow"
        )
        .forEach(
            function(button) {

                button.style.removeProperty(
                    "display"
                );

            }
        );


    updateResponsiveArrows();

}


/* ==================================================
   VIEW PROJECT OPEN
================================================== */

detailLink.addEventListener(
    "click",
    function(event) {

        /*
           Work 1~4
           그냥 링크
        */

        if (currentWork !== 5) {

            return;

        }


        /*
           Work 5
           View Project
        */

        event.preventDefault();
        event.stopPropagation();


        work5ViewIndex = 0;


        showWork5ViewImage(0);


        viewProjectOverlay.classList.add(
            "active"
        );


        detailOverlay.classList.add(
            "view-project-open"
        );


        hideOtherArrows();

    }
);


/* ==================================================
   VIEW PROJECT NEXT
================================================== */

viewProjectNext.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();


        showWork5ViewImage(
            work5ViewIndex + 1
        );

    }
);


/* ==================================================
   VIEW PROJECT PREVIOUS
================================================== */

viewProjectPrev.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();


        showWork5ViewImage(
            work5ViewIndex - 1
        );

    }
);


/* ==================================================
   CLOSE VIEW PROJECT
================================================== */

function closeViewProject() {

    viewProjectOverlay.classList.remove(
        "active"
    );


    viewProjectImage.src = "";


    detailOverlay.classList.remove(
        "view-project-open"
    );


    restoreOtherArrows();

}


viewProjectClose.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();


        closeViewProject();

    }
);


/* ==================================================
   CLICK OUTSIDE VIEW PROJECT
================================================== */

viewProjectOverlay.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            viewProjectOverlay
        ) {

            closeViewProject();

        }

    }
);


/* ==================================================
   RESPONSIVE WORK
   1000px 이하
================================================== */

const responsiveCards =
    Array.from(workCards).sort(
        function(a, b) {

            return (
                Number(a.dataset.work) -
                Number(b.dataset.work)
            );

        }
    );


let responsiveIndex = 0;


let responsiveMode =
    window.innerWidth <= 1000;


/* ==================================================
   REMOVE OLD RESPONSIVE ARROWS
================================================== */

document
    .querySelectorAll(
        ".responsive-work-arrow"
    )
    .forEach(
        function(button) {

            button.remove();

        }
    );


/* ==================================================
   CREATE RESPONSIVE ARROWS
================================================== */

const responsivePrev =
    document.createElement("button");


responsivePrev.className =
    "responsive-work-arrow responsive-work-prev";


responsivePrev.setAttribute(
    "aria-label",
    "Previous work"
);


const responsiveNext =
    document.createElement("button");


responsiveNext.className =
    "responsive-work-arrow responsive-work-next";


responsiveNext.setAttribute(
    "aria-label",
    "Next work"
);


document.body.appendChild(
    responsivePrev
);

document.body.appendChild(
    responsiveNext
);


/* ==================================================
   SHOW RESPONSIVE WORK
================================================== */

function showResponsiveWork(index) {

    if (
        responsiveCards.length === 0
    ) {

        return;

    }


    if (index < 0) {

        index =
            responsiveCards.length - 1;

    }


    if (
        index >=
        responsiveCards.length
    ) {

        index = 0;

    }


    responsiveIndex = index;


    responsiveCards.forEach(
        function(card) {

            card.classList.remove(
                "mobile-active"
            );

        }
    );


    responsiveCards[
        responsiveIndex
    ].classList.add(
        "mobile-active"
    );

}


/* ==================================================
   RESPONSIVE ARROW VISIBILITY
================================================== */

function updateResponsiveArrows() {

    /*
       Desktop
    */

    if (!responsiveMode) {

        responsivePrev.style.display =
            "none";

        responsiveNext.style.display =
            "none";

        return;

    }


    /*
       Detail open
    */

    if (
        detailOverlay.classList.contains(
            "active"
        )
    ) {

        responsivePrev.style.display =
            "none";

        responsiveNext.style.display =
            "none";

        return;

    }


    /*
       View Project open
    */

    if (
        viewProjectOverlay.classList.contains(
            "active"
        )
    ) {

        responsivePrev.style.display =
            "none";

        responsiveNext.style.display =
            "none";

        return;

    }


    /*
       Normal Work
    */

    responsivePrev.style.display =
        "block";

    responsiveNext.style.display =
        "block";

}


/* ==================================================
   ENABLE RESPONSIVE
================================================== */

function enableResponsive() {

    responsiveMode = true;

    responsiveIndex = 0;

    showResponsiveWork(0);

    updateResponsiveArrows();

}


/* ==================================================
   DISABLE RESPONSIVE
================================================== */

function disableResponsive() {

    responsiveMode = false;


    responsiveCards.forEach(
        function(card) {

            card.classList.remove(
                "mobile-active"
            );

        }
    );


    updateResponsiveArrows();

}


/* ==================================================
   RESPONSIVE NEXT
================================================== */

responsiveNext.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();


        if (!responsiveMode) {

            return;

        }


        if (
            detailOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            viewProjectOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        showResponsiveWork(
            responsiveIndex + 1
        );

    }
);


/* ==================================================
   RESPONSIVE PREVIOUS
================================================== */

responsivePrev.addEventListener(
    "click",
    function(event) {

        event.preventDefault();
        event.stopPropagation();


        if (!responsiveMode) {

            return;

        }


        if (
            detailOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            viewProjectOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        showResponsiveWork(
            responsiveIndex - 1
        );

    }
);


/* ==================================================
   TOUCH SWIPE
================================================== */

let touchStartX = 0;

let touchStartY = 0;


document.addEventListener(
    "touchstart",
    function(event) {

        if (!responsiveMode) {

            return;

        }


        if (
            detailOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            viewProjectOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        touchStartX =
            event.touches[0].clientX;


        touchStartY =
            event.touches[0].clientY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    function(event) {

        if (!responsiveMode) {

            return;

        }


        if (
            detailOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            viewProjectOverlay.classList.contains(
                "active"
            )
        ) {

            return;

        }


        const touchEndX =
            event.changedTouches[0].clientX;


        const touchEndY =
            event.changedTouches[0].clientY;


        const differenceX =
            touchEndX -
            touchStartX;


        const differenceY =
            touchEndY -
            touchStartY;


        if (
            Math.abs(differenceY) >
            Math.abs(differenceX)
        ) {

            return;

        }


        if (
            Math.abs(differenceX) < 50
        ) {

            return;

        }


        if (differenceX > 0) {

            showResponsiveWork(
                responsiveIndex - 1
            );

        }

        else {

            showResponsiveWork(
                responsiveIndex + 1
            );

        }

    },
    {
        passive: true
    }
);


/* ==================================================
   KEYBOARD
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /*
           View Project
        */

        if (
            viewProjectOverlay.classList.contains(
                "active"
            )
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                showWork5ViewImage(
                    work5ViewIndex + 1
                );

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                showWork5ViewImage(
                    work5ViewIndex - 1
                );

            }


            if (
                event.key ===
                "Escape"
            ) {

                closeViewProject();

            }


            return;

        }


        /*
           Detail
        */

        if (
            detailOverlay.classList.contains(
                "active"
            )
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                showWork(
                    currentWork + 1
                );

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                showWork(
                    currentWork - 1
                );

            }


            if (
                event.key ===
                "Escape"
            ) {

                closeDetail();

            }

        }

    }
);


/* ==================================================
   RESIZE
================================================== */

window.addEventListener(
    "resize",
    function() {

        const newResponsiveMode =
            window.innerWidth <= 1000;


        if (
            newResponsiveMode &&
            !responsiveMode
        ) {

            enableResponsive();

        }


        else if (
            !newResponsiveMode &&
            responsiveMode
        ) {

            disableResponsive();

        }


        /*
           800px 기준 Detail 이미지 변경
        */

        if (
            detailOverlay.classList.contains(
                "active"
            ) &&
            !viewProjectOverlay.classList.contains(
                "active"
            )
        ) {

            detailImage.src =
                getDetailImage(
                    currentWork
                );

        }


        updateResponsiveArrows();

    }
);


/* ==================================================
   INITIAL
================================================== */

if (responsiveMode) {

    enableResponsive();

}

else {

    disableResponsive();

}