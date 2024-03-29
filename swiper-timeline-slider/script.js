$(document).ready(function () {
    var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    slidePerView:3.5,
    speed: 500,
    direction: "horizontal",
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar" 
    },
    
    loop: false,
    effect: "slide",
    spaceBetween: 30,

    on: {
        init: function () {
            $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
            $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
        },
        slideChangeTransitionStart: function () {
            $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
            $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
        } 
    } });
    
    
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
        mySwiper.slideTo($(this).index());
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(this).addClass("active");
    });
});






























// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });