console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // Function to create section animation
  const createSectionAnimation = (wrapperClass, imageContainerClass, videoClass) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperClass,
        start: "top top",
        end: "+=350%",
        pin: true,
        scrub: 1,
        markers: false,
        anticipatePin: 1,
        pinSpacing: true,
        fastScrollEnd: true,
        toggleActions: "play none none reverse",
        onEnterBack: () => {
          gsap.to(wrapperClass, {
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut"
          });
        },
        onLeave: () => {
          gsap.to(wrapperClass, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut"
          });
        },
        onEnter: () => {
          gsap.fromTo(wrapperClass,
            {
              opacity: 0
            },
            {
              opacity: 1,
              duration: 0.5,
              ease: "power1.inOut"
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(wrapperClass, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut"
          });
        }
      }
    })
      .to(`${imageContainerClass} img`, {
        scale: 2,
        z: 400,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
      .to(
        videoClass,
        {
          scale: 1.1,
          z: 50,
          transformOrigin: "center center",
          ease: "power1.inOut"
        },
        "<"
      );
  };

  // Add smooth scroll
  gsap.to(window, {
    duration: 0.7,
    scrollTo: {
      y: "max",
      autoKill: true,
      ease: "power2.inOut"
    }
  });

  // Create animations for all sections
  createSectionAnimation(".wrapper", ".image-container", ".section.hero .hero-video");
  createSectionAnimation(".wrapper-story", ".image-container-story", ".section.story .story-video");
  createSectionAnimation(".wrapper-third", ".image-container-third", ".section.third .third-video");
  createSectionAnimation(".wrapper-fourth", ".image-container-fourth", ".section.fourth .fourth-video");
}); 