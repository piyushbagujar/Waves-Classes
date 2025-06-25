// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// NAVBAR hide/show on scroll
let lastScroll = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  gsap.to(navbar, {
    y: currentScroll > lastScroll && currentScroll > 100 ? -100 : 0,
    duration: 0.5,
    ease: "power2.out",
  });
  lastScroll = currentScroll;
});

// PARALLAX BACKGROUND
const bg = document.querySelector(".parallax-bg");
document.querySelector(".home").addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  gsap.to(bg, {
    x,
    y,
    rotation: -30,
    duration: 1.2,
    ease: "power3.out",
  });
});
document.querySelector(".home").addEventListener("mouseleave", () => {
  gsap.to(bg, { x: 0, y: 0, rotation: -30, duration: 1.2, ease: "power3.out" });
});

// ABOUT SECTION Animations
gsap.from(".about-heading", {
  x: "-1000",
  duration: 0.5,
  delay: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-heading",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".about-left", {
  scale: 0.9,
  opacity: 0,
  y: 40,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-left img",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".about-right", {
  scale: 0.9,
  opacity: 0,
  y: 40,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-right",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

// Courses Section Animations
gsap.from(".courses", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".courses",
    start: "top 95%",
    toggleActions: "play none none reverse",
  },
});
gsap.from(".courses h1", {
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".courses",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

// YouTube Gallery Animation
gsap.from(".youtube-videos h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".youtube-videos h1",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Animate each swiper-slide
gsap.utils.toArray(".swiper-slide").forEach((slide, index) => {
  gsap.fromTo(
    slide,
    {
      opacity: 0,
      y: 100,
      scale: 0.85,
      rotateX: -15,
      transformOrigin: "center center",
    },
    {
      scrollTrigger: {
        trigger: slide,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 1,
      ease: "power4.out",
      delay: index * 0.1,
    }
  );
});

// Swiper for YouTube Gallery or General Carousel
const mainSwiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Swiper for Results Section
const resultsSwiper = new Swiper(".results-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
