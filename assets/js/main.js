
// tabs
$('.tab-menu li a').on('click', function () {
    var target = $(this).attr('data-rel');
    $('.tab-menu li a').removeClass('active');
    $(this).addClass('active');
    $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
    return false;
});

// menu
let toggleMenu = document.querySelectorAll(".toggle-menu");
let mainNavs = document.querySelector(".nav-wrap");
let body = document.querySelector("body");
console.log(body, "body");
toggleMenu.forEach(btn => {
    btn.addEventListener("click", function () {
        // e.preventDefault()
        mainNavs.classList.toggle("active");
            if (mainNavs.classList.contains("active")) {
                   body.style = "overflow: hidden";
            
        } 
            else {
                   body.style = "overflow: visible";
                }
    })
})
// project gallery slider

// $('.gallery-wrapper').slick({
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });
var gallery = $('.gallery-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        // ...
    ]
});

// Update the slide count
function updateSlideCount(currentSlide) {
    var slideCount = currentSlide + 1;
    var totalSlides = gallery.slick('getSlick').slideCount;
    $('.slide-count').text(slideCount + '/' + totalSlides);
}

// Initialize the slide count
updateSlideCount(0);

// Listen for the 'afterChange' event to update slide count
gallery.on('afterChange', function (event, slick, currentSlide) {
    updateSlideCount(currentSlide);
});


;