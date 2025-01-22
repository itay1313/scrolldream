console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=350%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to(".image-container img", {
      scale: 2,
      z: 400,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".image-container-story img",
      {
        scale: 2,
        z: -400,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    )
    .to(
      ".section.hero",
      {
        scale: 1.1,
        z: 50,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    )
    .to(
      ".section.story",
      {
        scale: 1.1,
        z: -50,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    )
    .to(
      ".section.story-second-slide",
      {
        scale: 1.1,
        z: -50,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
}); 