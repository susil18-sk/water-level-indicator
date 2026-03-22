// HERO ANIMATION
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-sub", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// SECTION ANIMATION
gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3
});

// TEAM CARDS ANIMATION
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".team",
    start: "top 80%"
  },
  scale: 0.5,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
