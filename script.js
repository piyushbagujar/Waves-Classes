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

gsap.from(".results-heading", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".results-heading",
    start: "top 85%",
    toggleActions: "play none none reverse",
  }
});

// Animate Video Gallery Heading
gsap.from(".youtube-videos h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".youtube-videos h2",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Animate Video Cards
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

// Initialize Swiper
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
  spaceBetween:40,
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


gsap.utils.toArray(".swiper-slide").forEach((card, i) => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateX: -8,
      transformOrigin: "center center",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 1.2,
      delay: i * 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
        once: false,
      },
    }
  );
});

// ✅ GSAP animation for testimonials
gsap.registerPlugin(ScrollTrigger);

gsap.to(".testimonial-card", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".testimonial-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
gsap.registerPlugin(ScrollTrigger);

// Animate testimonial heading
gsap.from(".testimonial-heading", {
  scrollTrigger: {
    trigger: ".testimonial-heading",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});
const letters = document.querySelectorAll(".testimonial-heading span");

gsap.from(letters, {
  scrollTrigger: {
    trigger: ".testimonial-heading",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  stagger: 0.1,
  ease: "back.out(1.7)",
  duration: 1
});



gsap.from(".contact-box", {
  y: 5,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 85%",
  },
});
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Open mobile menu with GSAP
hamburger.addEventListener("click", () => {
  hamburger.classList.add("active");
  mobileMenu.classList.add("show");

  gsap.fromTo(
    mobileMenu,
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
  );

  gsap.from(".mobile-link", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.4,
    ease: "power2.out",
  });
});

// Close menu via close button
closeBtn.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      mobileMenu.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});

// Close menu when clicking any link
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    gsap.to(mobileMenu, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        mobileMenu.classList.remove("show");
        hamburger.classList.remove("active");
      }
    });
  });
});

// Optional ScrollTrigger Animations (for content fade-in)
gsap.utils.toArray(".fade-in").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });
});