const hotels = document.querySelectorAll(".hotel_box");
const tl = new gsap.timeline();
tl.from(hotels, {
  y: "-25%",
  autoAlpha: 0,
  duration: 1,
  ease: Power3.easeOut,
  stagger: { each: 0.1, from: "start" },
});

tl.to(
  ".row_hotelList-grid",
  {
    autoAlpha: 1,
    duration: 0.5,
    ease: Power3.easeOut,
  },
  "<0.75"
);
