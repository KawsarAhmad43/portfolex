// Preloader
$(document).ready(function () {
    setTimeout(function () {
        $('.wrapper').addClass('loaded');
    }, 2500);
});

// olivia moswa text
document.getElementsByClassName("olivia_moswa")[0];
// olivia moswa text end

// designer text
firstText = "Owner of EX-3 Limited";
// secondText = "Developer";
// thridText = "Freelancer"
intervalTime = 600;
window.load = displayText();
function displayText() {
    document.querySelector('.designer').innerText = firstText;
    firstText.innerText
    setTimeout(() => {
        document.querySelector('.designer').innerText = secondText;
    }, intervalTime * 3);
    setTimeout(() => {
        document.querySelector('.designer').innerText = thridText;
    }, intervalTime * 5);
}
setInterval(() => {
    displayText();
}, intervalTime * 7);
// designer text end

// card Tabs 
var tabs = document.getElementById('icetab-container').children;
var tabs2 = document.getElementById('icetab-container2').children;
var tabcontents = document.getElementById('icetab-content').children;
 
var mybtn = function () {
    var tabchange = this.mynum;
    for (var int = 0; int < tabcontents.length; int++) {
        tabcontents[int].className = 'tabcontent';

        if (tabs[int].className = 'icetab') {
            tabs[int].className = 'icetab';
            this.classList.add('current-tab');
            tabcontents[int].className = 'tabcontent'
            tabcontents[tabchange].classList.add('tab-active');
        }
    }
}

var mybtn2 = function () {
    var tabchange = this.mynum;
    for (var int = 0; int < tabcontents.length; int++) {
        tabcontents[int].className = 'tabcontent';
        if (tabs2[int].className = 'icetab') {
            tabs2[int].className = 'icetab';
            this.classList.add('current-tab');
            tabcontents[int].className = 'tabcontent'
            tabcontents[tabchange].classList.add('tab-active');
        }
    }
}

for (var index = 0; index < tabs.length; index++) {
    tabs[index].mynum = index;
    tabs[index].addEventListener('click', mybtn, false);
}

for (var index = 0; index < tabs2.length; index++) {
    tabs2[index].mynum = index;
    tabs2[index].addEventListener('click', mybtn2, false);
}
// card Tabs end

// circle Img my project click event
const elements = document.getElementById("portfolio");
const homeNavabr = document.getElementById("home");
const circular_imgClick = document.getElementsByClassName("circular_text_main");

circular_imgClick[0].addEventListener("click", () => {
    homeNavabr.classList.remove("tab-active");
    elements.classList.add("tab-active");
});

// Dark/ Light Mode Toggle
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var sunIcon = document.getElementById("sunIcon");
    var moonIcon = document.getElementById("moonIcon");

    if (element.classList.contains("dark-mode")) {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        localStorage.setItem("mode", "dark");
    } else {
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        localStorage.setItem("mode", "light");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
        document.body.classList.add("dark-mode");
        var sunIcon = document.getElementById("sunIcon");
        var moonIcon = document.getElementById("moonIcon");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }
});
// Dark/ Light Mode Toggle end

// Portfolio Pop-up
$(".pop-up").on("click", function () {
    $(".overlay").addClass("is-on");
});

$("#close").on("click", function () {
    $(".overlay").removeClass("is-on");
});
// Portfolio Pop-up end

// Share Btn
$(document).ready(function () {
    $(".share-btn").click(function (e) {
        $('.networks-5').not($(this).next(".networks-5")).each(function () {
            $(this).removeClass("active");
        });
        $(this).next(".networks-5").toggleClass("active");
    });
});
// Share Btn End

// Testimonial Card Slider
$(function () {
    $('.testimonials_card').on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
        .slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            arrows: true,
            prevArrow: '<span class="prev-arrow"><i class="ri-arrow-left-s-line"></i></span>',
            nextArrow: '<span class="next-arrow"><i class="ri-arrow-right-s-line"></i></span>',
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 1);
        });
});
// Testimonial Card Slider End

// View More View Less btn
$(document).ready(function () {
    $("#toggle").click(function () {
        var elem = $("#toggle").text();
        if (elem == "View More") {
            $("#toggle").text("View Less");
            $("#text").slideDown();
        } else {
            $("#toggle").text("View More");
            $("#text").slideUp();
        }
    });
});
// View More View Less btn End

// blog Page Pop Up
$(document).ready(function () {
    $('.trigger').click(function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur');
        return false;
    });
});
// blog Page Pop Up End

// blog_pop_up_slider
$(function () {
    $('.blog_pop_up_slider').slick({
        infinity: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        prevArrow: '<span class="prev-btn"><i class="fa-solid fa-arrow-left"></i> Prev </span>',
        nextArrow: '<span class="next-btn"> Next <i class="fa-solid fa-arrow-right"></i> </span>',
        responsive: [
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            }
        ]
    });
});
// blog_pop_up_slider end

// form
$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});
// form end

// side Nav 
function openNav() {
    var side = document.getElementById("mySidenav");
    if (side.style.width == "300px") {
        side.style.width = "0px";
    } else {
        side.style.width = "300px";
    }
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// cursor
let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('a,button,.pop-up,.trigger,.share,#close,.toggle,#vimeo,#youtube,.link,.gallery');
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY,
            }
        })
    }
});

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
cursorScale.forEach(link => {
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
});

// Whole Page Scrolling Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.fade_up');
hiddenElements.forEach((el) => observer.observe(el));


// pop video
$(document).ready(function () {
    $('#vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('#youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=OZzoAw9QHXY'
        },
        type: 'iframe'
    });

    $('.link').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });

});

// gallary code
window.addEventListener("load", () => {
    for (let i of document.querySelectorAll(".gallery img")) {
        i.onclick = () => i.classList.toggle("full");
    }
});

// skill bar function
$(function () {
    $('.circlechart').circlechart();
});