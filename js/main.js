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

const hotels = document.querySelectorAll(".hotel_box");
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

const titles = ["Our Story", "Our Rooms", "Our Services"];
const section = document.querySelectorAll(".section");
// Pin the section title using gsap
ScrollTrigger.create({
  trigger: ".sections_container",
  pin: ".sections_container-tooltip",
  // markers: true,
  start: "top 100px",
});

// Change the text when we enter the various sections
section.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    // markers: true,
    start: "top+=160 center",
    end: "bottom center-=85",
    onEnter: () => {
      gsap.set(".sections_container-tooltip", {
        innerText: titles[index],
      });
    },
    onEnterBack: () => {
      gsap.set(".sections_container-tooltip", {
        innerText: titles[index],
      });
    },
  });
});
