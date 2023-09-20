AOS.init();

// --- Burger menu ---

const openBurgerBtn = document.querySelector(".burger-menu-btn");
const closeBurgerBtn = document.querySelector(".burger-menu-close-btn");
const burgerMenu = document.querySelector(".burger-menu");

const openBurgerMenu = () => {
    burgerMenu.classList.add("active");
    document.body.classList.add("lock");
};

const closeBurgerMenu = () => {
    burgerMenu.classList.remove("active");
    document.body.classList.remove("lock");
};

openBurgerBtn.addEventListener("click", () => {
    openBurgerMenu();
});
closeBurgerBtn.addEventListener("click", () => {
    closeBurgerMenu();
});

// --- Navigation ---

const aboutBtn = document.querySelectorAll(".menu-about-btn");
const vacancyBtn = document.querySelectorAll(".menu-vacancies-btn");
const conditionsBtn = document.querySelectorAll(".menu-conditions-btn");
const reviewsbtn = document.querySelectorAll(".menu-reviews-btn");
const contactsBtn = document.querySelectorAll(".menu-contacts-btn");

const aboutSection = document.querySelector(".about-section");
const conditionsSection = document.querySelector(".conditions-section");
const reviewSection = document.querySelector(".review-section");
const requirementsSection = document.querySelector(".requirements-section");

const buttons = document.querySelectorAll(".main-btn");
const introduceBtn = document.querySelector(".introduce-section-btn");
const contacts = document.querySelector(".footer");

for (let i = 0; i < aboutBtn.length; i++) {
    aboutBtn[i].addEventListener("click", () => {
        window.scrollTo({
            top:
                aboutSection.getBoundingClientRect().top +
                window.pageYOffset -
                100,
            behavior: "smooth",
        });
        closeBurgerMenu();
    });
}
for (let i = 0; i < conditionsBtn.length; i++) {
    conditionsBtn[i].addEventListener("click", () => {
        window.scrollTo({
            top:
                conditionsSection.getBoundingClientRect().top +
                window.pageYOffset -
                100,
            behavior: "smooth",
        });
        closeBurgerMenu();
    });
}
for (let i = 0; i < reviewsbtn.length; i++) {
    reviewsbtn[i].addEventListener("click", () => {
        window.scrollTo({
            top:
                reviewSection.getBoundingClientRect().top +
                window.pageYOffset -
                100,
            behavior: "smooth",
        });
        closeBurgerMenu();
    });
}
for (let i = 0; i < contactsBtn.length; i++) {
    contactsBtn[i].addEventListener("click", () => {
        window.scrollTo({
            top:
                contacts.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: "smooth",
        });
        closeBurgerMenu();
    });
}
for (let i = 0; i < vacancyBtn.length; i++) {
    vacancyBtn[i].addEventListener("click", () => {
        window.scrollTo({
            top:
                requirementsSection.getBoundingClientRect().top +
                window.pageYOffset -
                100,
            behavior: "smooth",
        });
        closeBurgerMenu();
    });
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        window.scrollTo({
            top:
                contacts.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: "smooth",
        });
    });
}
introduceBtn.addEventListener("click", () => {
    window.scrollTo({
        top: contacts.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "smooth",
    });
});

// ---

// --- Sliders ---

$(document).ready(function () {
    $(".housing-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "60px",
                    variableWidth: true,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".housing-mobile-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        adaptiveHeight: true,
    });
});

$(document).ready(function () {
    $(".review-slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 2,
        dots: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

// $(document).ready(function () {
//     $(".review-mobile-slider").slick({
//         infinite: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         adaptiveHeight: true,
//     });
// });

// ---
