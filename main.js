/* =====================
   main.js — Engineer Visionary
   ===================== */

// ──────────────────────────────────────────────
// 1. Navbar: scroll effect + mobile toggle
// ──────────────────────────────────────────────
(function () {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const open = navMobile.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    // Animate hamburger → X
    const spans = navToggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile menu on nav link click
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = ''; s.style.opacity = '';
      });
    });
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
})();

// ──────────────────────────────────────────────
// 2. Scroll-reveal (AOS-lite)
// ──────────────────────────────────────────────
(function () {
  const els = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('aos-animate');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
})();

// ──────────────────────────────────────────────
// 3. Hero icon: subtle parallax on mousemove
// ──────────────────────────────────────────────
(function () {
  const heroCard = document.querySelector('.hero-card');
  if (!heroCard) return;
  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    heroCard.style.transform = `perspective(800px) rotateY(${dx * 5}deg) rotateX(${-dy * 4}deg)`;
  });
  document.addEventListener('mouseleave', () => {
    heroCard.style.transform = '';
  });
})();

// ──────────────────────────────────────────────
// 4. Project cards: tilt micro-interaction
// ──────────────────────────────────────────────
(function () {
  const cards = document.querySelectorAll('.project-card, .trans-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

// ──────────────────────────────────────────────
// 5. CTA Buttons: ripple effect
// ──────────────────────────────────────────────
(function () {
  const btns = document.querySelectorAll('.btn-cta');
  btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (btn.getAttribute('href') === '#') {
        e.preventDefault();
      }
      
      // Ripple
      const ripple = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute; border-radius:50%;
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
        background:rgba(255,255,255,0.35);
        transform:scale(0); animation:rippleAnim 0.5s ease-out forwards;
        pointer-events:none;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframe
  const style = document.createElement('style');
  style.textContent = `@keyframes rippleAnim { to { transform: scale(2.5); opacity: 0; } }`;
  document.head.appendChild(style);
})();

// ──────────────────────────────────────────────
// 6. Slider dots (decorative)
// ──────────────────────────────────────────────
(function () {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
})();

// ──────────────────────────────────────────────
// 7. Smooth scroll for anchor links
// ──────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ──────────────────────────────────────────────
// 8. Counter animation for stats (CTA section)
// ──────────────────────────────────────────────
(function () {
  function animateValue(el, start, end, duration) {
    let startTime = null;
    function update(time) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      el.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  const ctaSection = document.querySelector('.cta');
  if (!ctaSection) return;
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Nothing to animate numerically here, but keep for extensibility
      io.disconnect();
    }
  }, { threshold: 0.3 });
  io.observe(ctaSection);
})();
