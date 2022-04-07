// Variables
const hotels = document.querySelectorAll(".hotel_box");
const titles = [
  "Our Story",
  "Our Rooms",
  "Our Services",
  "Nearest Attractions",
  "Testimonials",
  "Contact Us",
];
// const titles_bottom = ["Testimonials", "Contact Us"];
const section = document.querySelectorAll(".section");
// const sectionBottom = document.querySelectorAll(".section_bottom");
const sectionContainers = document.querySelector(".sections_container");
const navbar = document.querySelector(".nav");

// Slider in home page
$("#header_carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#testimonial_carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ['<img src="images/left.svg" />', '<img src="images/right.svg" />'],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

const tl = new gsap.timeline();
tl.from(hotels, {
  y: "-25%",
  autoAlpha: 0,
  duration: 1,
  ease: Power3.easeOut,
  stagger: { each: 0.2, from: "start" },
});

tl.to(
  ".row_hotelList-grid",
  {
    autoAlpha: 1,
    duration: 0.5,
    ease: Power3.easeOut,
  },
  "<0.25"
);

tl.to(
  ".select_dest-line",
  {
    width: "100%",
  },
  "="
);

// Pin the section title using gsap
///////////////////////////////////
// ScrollTrigger.create({
//   trigger: ".sections_container",
//   pin: ".sections_container-tooltip",
//   // markers: true,
//   // start: "top 100px",
// });

// Change the text when we enter the various sections
// //////////////////////////////////////////////////
// section.forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section,
//     // markers: true,
//     start: "top+=160 center",
//     end: "bottom center-=85",
//     onEnter: () => {
//       gsap.set(".sections_container-tooltip", {
//         innerText: titles[index],
//       });
//     },
//     onEnterBack: () => {
//       gsap.set(".sections_container-tooltip", {
//         innerText: titles[index],
//       });
//     },
//   });
// });

// Scroll trigger for bottom sections
// ScrollTrigger.create({
//   trigger: ".sections_container-bottom",
//   pin: ".sections_container-bottom-tooltip",
//   // markers: true,
//   start: "top 100px",
// });

// Change the text when we enter the various sections for bottom sections
// sectionBottom.forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section,
//     // markers: true,
//     start: "top+=160 center",
//     end: "bottom center-=85",
//     onEnter: () => {
//       gsap.set(".sections_container-bottom-tooltip", {
//         innerText: titles_bottom[index],
//       });
//     },
//     onEnterBack: () => {
//       gsap.set(".sections_container-bottom-tooltip", {
//         innerText: titles_bottom[index],
//       });
//     },
//   });
// });

// Changing the navigation bar style based on how much the user has scrolled
// Change the burger menu fill as well
ScrollTrigger.create({
  trigger: ".header",
  // markers: true,
  start: "bottom top",
  end: "top bottom",
  onEnter: () => {
    console.log("entered");
    navbar.classList.add("nav_dark");
    $(".nav_burger").addClass("nav_burger-dark");
  },
  onEnterBack: () => {
    console.log("entered back");
    navbar.classList.remove("nav_dark");
    $(".nav_burger").removeClass("nav_burger-dark");
  },
});

// Burger menu js starts
$(".nav_burger").on("click", function () {
  $(this).toggleClass("nav_burger-close");
  $(".nav").toggleClass("nav_active");
  $("body").toggleClass("body_noScroll");
});
