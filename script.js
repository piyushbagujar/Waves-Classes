// ✅ Final GSAP ScrollTrigger setup to fix jitter when pinning

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// NAVBAR hide/show on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  gsap.to(navbar, {
    y: currentScroll > lastScroll && currentScroll > 100 ? -100 : 0,
    duration: 0.5,
    ease: 'power2.out'
  });
  lastScroll = currentScroll;
});

// PARALLAX BACKGROUND
const bg = document.querySelector('.parallax-bg');
document.querySelector('.home').addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  gsap.to(bg, {
    x, y,
    rotation: -30,
    duration: 1.2,
    ease: 'power3.out'
  });
});
document.querySelector('.home').addEventListener('mouseleave', () => {
  gsap.to(bg, { x: 0, y: 0, rotation: -30, duration: 1.2, ease: 'power3.out' });
});

// About Heading Animation
gsap.from('.about-heading', {
  x: '-1000',
  duration: 0.4,
  delay: 0.1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about-heading',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});

// IMAGE ANIMATION
gsap.from('.about-left', {
  scale: 0.9,
  opacity: 0,
  y: 40,
  duration: 0.3,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about-left img',
    start: 'top 80%',
    end: 'bottom 60%',
    toggleActions: 'play none none reverse'
  }
});

// TEXT BOX ANIMATION (about-right)
gsap.from('.about-right', {
  scale: 0.9,
  opacity: 0,
  y: 40,
  duration: 1.3,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about-left img',
    start: 'top 80%',
    end: 'bottom 60%',
    toggleActions: 'play none none reverse'
  }
});

// ABOUT SECTION ENTRANCE
// gsap.from(".about", {
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".about",
//     start: "top 90%",
//     end: "top 60%",
//     toggleActions: "play none none reverse"
//   }
// });


// ✅ Fixing the pin jitter by restructuring scroll + pin logic
gsap.to(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 0%",
    end: "-100%"
    
  },
  y:100

});

// Entrance animation for courses
gsap.from(".courses", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".courses",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
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
    toggleActions: "play none none reverse"
  }
});


const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });


// Animate each YouTube slide individually
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
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: index * 0.1,
    }
  );
});
