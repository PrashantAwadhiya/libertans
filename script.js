// Header fade-in on load
gsap.from("#header", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// Image animations
gsap.from("#main #img1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

gsap.from("#main #img2", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

// Text animations
gsap.from("#text h1", {
  scrollTrigger: {
      trigger: "#text",
      start: "top 80%",
      toggleActions: "play none none reset",
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});

gsap.from("#text p", {
  scrollTrigger: {
      trigger: "#text",
      start: "top 80%",
      toggleActions: "play none none reset",
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});

// Card animations in #second section
gsap.utils.toArray("#second #cards .card").forEach((card, i) => {
  gsap.from(card, {
      scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reset",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      delay: i * 0.2
  });
});

// Arrow rotation animation
gsap.to("#second #arrow i", {
  scrollTrigger: {
      trigger: "#second #arrow",
      start: "top center",
      toggleActions: "play none none reset",
  },
  rotation: 360,
  duration: 2,
  ease: "elastic.out(1, 0.5)"
});

gsap.from("#last #maintxt", {
  scrollTrigger: {
      trigger: "#last",
      start: "bottom 5%",
      toggleActions: "play none none reset",
  },
  opacity: 0,
  right: "20%",
  scale: 0.8,
  duration: 2,
  ease: "elastic.out(1, 0.5)",
  delay: 1
});



gsap.from("#last #circle img", {
  scrollTrigger: {
      trigger: "#last",
      start: "bottom 5%",
      toggleActions: "play none none reset",
  },
  opacity: 0,
  right: "20%",
  scale: 0.8,
  duration: 2,
  ease: "elastic.out(1, 0.5)",
  delay: 1
});

gsap.from("#box4 #part1 #img1, #box4 #part1 #img2, #box4 #part2 #img3, #box4 #part2 #img4", {
  scrollTrigger: {
      trigger: "#part1",
      start: "top 75%",
      toggleActions: "play none none reset",
  },
  opacity: 0,
  scale:0.8,
  // left: "-20%",
  duration: 1,
  ease: "elastic.out(1, 0.5)",
  delay: 0.5
});


ScrollTrigger.create({
  trigger: "#box5",
  start: "top 80%", 
  onEnter: () => animateJeepImages(),
  onEnterBack: () => animateJeepImages(), 
});

function animateJeepImages() {
  gsap.from("#box5 .jeep1 img, #box5 .jeep2 img", {
      opacity: 0,
      y: 50,
      duration: 1, 
      ease: "power3.out",
      stagger: 0.2, 
      delay: 0.3
  });
}




// Box 7 text fade-in and scale animation
gsap.from("#box7 h1", {
  scrollTrigger: {
      trigger: "#box7",
      start: "top 75%",
      toggleActions: "play none none reset",
  },
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  ease: "elastic.out(1, 0.5)",
  delay: 0.5
});

gsap.from("#box7 h2", {
  scrollTrigger: {
      trigger: "#box7",
      start: "top 75%",
      toggleActions: "play none none reset",
  },
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.6
});
