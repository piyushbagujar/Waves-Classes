// Minimal version
window.onload = function() {
  window.scrollTo(0, 0);
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
};

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
  },
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
  spaceBetween: 40,
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
    toggleActions: "play none none reverse",
  },
});
gsap.registerPlugin(ScrollTrigger);

// Animate testimonial heading
gsap.from(".testimonial-heading", {
  scrollTrigger: {
    trigger: ".testimonial-heading",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
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
  duration: 1,
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

// Timeline for menu open animation
const menuTimeline = gsap.timeline({ paused: true });

menuTimeline
  .fromTo(
    mobileMenu,
    { y: "-100%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 0.6, ease: "power4.out" }
  )
  .from(
    ".mobile-link",
    {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.4,
      ease: "back.out(1.7)",
    },
    "-=0.3"
  );

// Open menu
hamburger.addEventListener("click", () => {
  hamburger.classList.add("active");
  mobileMenu.classList.add("show");
  menuTimeline.restart();
});

// Close menu function
function closeMobileMenu() {
  gsap.to(mobileMenu, {
    y: "-100%",
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      mobileMenu.classList.remove("show");
      hamburger.classList.remove("active");
    },
  });
}

// Close when clicking the close button
closeBtn.addEventListener("click", closeMobileMenu);

// Close when clicking a menu link
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Optional: Scroll-based fade-in animations
gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Video Swiper with autoplay
  const videoSwiper = new Swiper('.videoSwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.videoSwiper .swiper-button-next',
      prevEl: '.videoSwiper .swiper-button-prev',
    },
    pagination: {
      el: '.videoSwiper .swiper-pagination',
      clickable: true,
    },
  });

  // Initialize Photo Swiper with autoplay
  const photoSwiper = new Swiper('.photoSwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.photoSwiper .swiper-button-next',
      prevEl: '.photoSwiper .swiper-button-prev',
    },
    pagination: {
      el: '.photoSwiper .swiper-pagination',
      clickable: true,
    },
  });

  // Fullscreen functionality
  const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
  const fullscreenImage = document.querySelector('.fullscreen-image');
  const fullscreenCaption = document.querySelector('.fullscreen-caption');
  const closeBtn = document.querySelector('.close-fullscreen');
  
  // Get all gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const captionTitle = this.querySelector('h3').textContent;
      const captionText = this.querySelector('p').textContent;
      
      fullscreenImage.src = imgSrc;
      fullscreenImage.alt = this.querySelector('img').alt;
      fullscreenCaption.querySelector('h3').textContent = captionTitle;
      fullscreenCaption.querySelector('p').textContent = captionText;
      
      fullscreenOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close fullscreen
  closeBtn.addEventListener('click', function() {
    fullscreenOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close when clicking outside image
  fullscreenOverlay.addEventListener('click', function(e) {
    if (e.target === fullscreenOverlay) {
      fullscreenOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
      fullscreenOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const facultyGrid = document.getElementById('facultyGrid');
  
  viewMoreBtn.addEventListener('click', function() {
    facultyGrid.classList.toggle('show-all');
    this.classList.toggle('active');
    
    if (this.classList.contains('active')) {
      this.innerHTML = 'Show Less Faculty <i class="fas fa-chevron-up"></i>';
    } else {
      this.innerHTML = 'View More Faculty <i class="fas fa-chevron-down"></i>';
    }
  });
});