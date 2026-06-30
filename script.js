// ── Nav scroll state ─────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 24) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile menu (simple toggle — expands nav-links as a dropdown) ───────────
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  navLinks.style.display = open ? 'flex' : 'none';
  navCta.style.display = open ? 'inline-flex' : 'none';
  if (open) {
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.flexDirection = 'column';
    navLinks.style.padding = '20px 32px';
    navLinks.style.background = 'rgba(10,10,15,0.97)';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    navCta.style.position = 'absolute';
    navCta.style.top = 'calc(100% + 190px)';
    navCta.style.left = '32px';
  }
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 980) {
      burger.classList.remove('open');
      navLinks.style.display = 'none';
      navCta.style.display = 'none';
    }
  });
});

// ── Scroll reveal ─────────────────────────────────────────────────────────────
const revealTargets = document.querySelectorAll(
  '.service-card, .how-step, .vendors-copy, .vendors-visual, .download-card, .section-head'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);
revealTargets.forEach((el) => io.observe(el));
