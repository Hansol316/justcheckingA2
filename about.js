/* ==================================================
   ABOUT PAGE INTERACTION
================================================== */

const aboutItems = document.querySelectorAll(".about-item");


aboutItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const activeImage = item.dataset.active;

        /*
            클릭하면 무조건
            1번 이미지 → 2번 이미지

            다시 클릭해도
            1번으로 돌아가지 않음.
        */

        item.src = activeImage;

    });

});