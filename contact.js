/* ==================================================
   LETTER INTERACTION
================================================== */

const letterImage =
    document.getElementById("letterImage");

const letterWing =
    document.getElementById("letterWing");

const contactIcons =
    document.getElementById("contactIcons");


let animationStarted = false;



/* ==================================================
   LETTER 1 CLICK
================================================== */

letterImage.addEventListener("click", function () {


    /* 이미 실행했으면 다시 실행하지 않음 */

    if (animationStarted) {

        return;

    }


    animationStarted = true;



    /* ==============================================
       LETTER 1 → LETTER 2
    ============================================== */

    letterImage.classList.add("fade");


    setTimeout(function () {

        letterImage.src =
            "images/letter2.png";


        letterImage.classList.remove("fade");

    }, 400);



    /* ==============================================
       LETTER 2 → LETTER 3
       자동 진행
    ============================================== */

    setTimeout(function () {

        letterImage.classList.add("fade");

    }, 1300);



    setTimeout(function () {

        letterImage.src =
            "images/letter3.png";


        letterImage.classList.remove("fade");

    }, 1700);



    /* ==============================================
       WING + ICONS
    ============================================== */

    setTimeout(function () {


        /* wing */

        letterWing.classList.add("show");


        /* icons */

        contactIcons.classList.add("show");


    }, 1800);

});



/* ==================================================
   KAKAOTALK QR
================================================== */

const kakaoButton =
    document.getElementById("kakaoButton");

const kakaoModal =
    document.getElementById("kakaoModal");

const closeKakao =
    document.getElementById("closeKakao");



/* OPEN QR */

kakaoButton.addEventListener(
    "click",
    function () {

        kakaoModal.classList.add("active");

    }
);



/* CLOSE QR */

closeKakao.addEventListener(
    "click",
    function () {

        kakaoModal.classList.remove("active");

    }
);



/* CLICK OUTSIDE */

kakaoModal.addEventListener(
    "click",
    function (event) {


        if (
            event.target === kakaoModal
        ) {

            kakaoModal.classList.remove(
                "active"
            );

        }

    }
);