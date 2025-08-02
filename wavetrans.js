function playWaveTransition(callback) {
    const wave = document.getElementById("transition-wave");
  
    gsap.fromTo(
      wave,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          if (callback) callback();
        },
      }
    );
  }
  