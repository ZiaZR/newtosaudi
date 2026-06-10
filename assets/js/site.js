/* NewToSaudi.com — Shared JavaScript v3.0 */
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {

    /* ── SCROLL REVEAL (all directions) ── */
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => revealObs.observe(el));

    /* ── STAGGERED CARD ENTRANCE ── */
    const staggerGroups = [
      { sel: '.persona-card',    delay: 80  },
      { sel: '.guide-card',      delay: 100 },
      { sel: '.guide-tile',      delay: 90  },
      { sel: '.topic-item',      delay: 55  },
      { sel: '.city-card',       delay: 110 },
      { sel: '.directory-card',  delay: 80  },
      { sel: '.feature-card',    delay: 85  },
      { sel: '.info-card',       delay: 75  },
      { sel: '.bank-card',       delay: 90  },
      { sel: '.step-box',        delay: 70  },
      { sel: '.update-item',     delay: 65  },
    ];
    staggerGroups.forEach(({ sel, delay }) => {
      const els = document.querySelectorAll(sel);
      if (!els.length) return;
      const obs = new IntersectionObserver((entries) => {
        let i = 0;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0) scale(1)';
            }, i++ * delay);
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
      els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px) scale(0.98)';
        el.style.transition = 'opacity .65s cubic-bezier(0.16,1,0.3,1), transform .65s cubic-bezier(0.16,1,0.3,1)';
        obs.observe(el);
      });
    });

    /* ── NAVBAR SCROLL ── */
    const nav = document.querySelector('.nav');
    if (nav && nav.classList.contains('nav--transparent')) {
      const onScroll = () => {
        const s = window.scrollY > 60;
        nav.classList.toggle('nav--transparent', !s);
        nav.classList.toggle('nav--solid', s);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* ── MOBILE MENU ── */
    const toggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.querySelector('.nav__mobile-menu');
    const openMenu = () => {
      toggle.classList.add('active');
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      toggle.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    };
    if (toggle && mobileMenu) {
      toggle.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
      mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    }

    /* ── DESKTOP DROPDOWN (click/touch-safe) ── */
    document.querySelectorAll('.nav__dropdown').forEach(dd => {
      dd.addEventListener('click', e => {
        if (e.target.closest('.nav__dropdown-menu')) return;
        e.stopPropagation();
        const isOpen = dd.classList.contains('open');
        document.querySelectorAll('.nav__dropdown.open').forEach(d => d.classList.remove('open'));
        if (!isOpen) dd.classList.add('open');
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.nav__dropdown.open').forEach(d => d.classList.remove('open'));
    });

    /* ── MOBILE MENU ACCORDION ── */
    document.querySelectorAll('.nav__mobile-section-title').forEach(title => {
      title.addEventListener('click', () => {
        const section = title.closest('.nav__mobile-section');
        const isOpen = section.classList.contains('open');
        // Close all other sections
        document.querySelectorAll('.nav__mobile-section.open').forEach(s => s.classList.remove('open'));
        if (!isOpen) section.classList.add('open');
      });
    });

    /* ── COUNT-UP ANIMATION ── */
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
      const cObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const end = parseInt(el.getAttribute('data-count'));
          const suffix = el.getAttribute('data-suffix') || '';
          const dur = 1800;
          const start = performance.now();
          const ease = t => 1 - Math.pow(1 - t, 4);
          const tick = now => {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = Math.round(ease(p) * end) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          cObs.unobserve(el);
        });
      }, { threshold: 0.5 });
      counters.forEach(el => cObs.observe(el));
    }

    /* ── FAQ ACCORDION ── */
    // Handles both .faq-q (shared FAQ) and .faq-question (page-specific FAQ on iqama-guide)
    function setupAccordion(btnSel, itemSel, answerSel) {
      document.querySelectorAll(btnSel).forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest(itemSel);
          if (!item) return;
          const isOpen = item.classList.contains('open');
          // Close all in same list
          const list = item.parentElement;
          if (list) {
            list.querySelectorAll(itemSel + '.open').forEach(i => {
              i.classList.remove('open');
              const ans = i.querySelector(answerSel);
              if (ans) ans.style.maxHeight = null;
            });
          }
          // Open clicked if was closed
          if (!isOpen) {
            item.classList.add('open');
            const ans = item.querySelector(answerSel);
            if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
          }
        });
      });
    }
    setupAccordion('.faq-q',        '.faq-item', '.faq-a');
    setupAccordion('.faq-question', '.faq-item', '.faq-answer');

    /* ── SCROLL SPY (TOC) ── */
    const tocLinks = document.querySelectorAll('.toc__link[href^="#"]');
    if (tocLinks.length) {
      const headings = Array.from(tocLinks)
        .map(l => document.querySelector(l.getAttribute('href')))
        .filter(Boolean);
      const spyObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            const active = Array.from(tocLinks).find(l => l.getAttribute('href') === '#' + entry.target.id);
            if (active) active.classList.add('active');
          }
        });
      }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
      headings.forEach(h => spyObs.observe(h));
    }

    /* ── ACTIVE NAV LINK ── */
    const path = window.location.pathname;
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (href !== '/' && path.startsWith(href)) link.classList.add('active');
      if (href === '/' && (path === '/' || path === '/index.html')) link.classList.add('active');
    });

    /* ── 3D TILT (persona cards) ── */
    document.querySelectorAll('.persona-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `translateY(-10px) perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 8}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    /* ── PARALLAX ── */
    const pEls = document.querySelectorAll('[data-parallax]');
    if (pEls.length) {
      window.addEventListener('scroll', () => {
        pEls.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
          el.style.transform = `translateY(${(el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2) * speed}px)`;
        });
      }, { passive: true });
    }

  });
})();
