// ==========================================================================
// Site behavior: mobile menu + "current section" highlight in the nav.
// Everything here is progressive enhancement — the page works without it.
// ==========================================================================

(() => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const toggle = nav.querySelector('.site-nav__toggle');
  const links = [...nav.querySelectorAll('.site-nav__links a')];

  // --- Mobile menu ---------------------------------------------------------
  // CSS shows/hides the link list based on the button's aria-expanded value.
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const setMenu = (open) => toggle.setAttribute('aria-expanded', String(open));

  if (toggle) {
    toggle.addEventListener('click', () => setMenu(!isOpen()));

    // Close after choosing a link, when clicking elsewhere, or on Escape
    links.forEach((a) => a.addEventListener('click', () => setMenu(false)));

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) setMenu(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // --- Highlight the nav link for the section being read -------------------
  // Sections are looked up from the nav links themselves, so adding a new
  // nav link (with a matching section id) is all it takes to include it.
  const sections = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const updateActive = () => {
    // "Reading line": just below the pinned nav, a quarter of the way down
    const readingLine = nav.offsetHeight + window.innerHeight * 0.25;

    let current = null;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    });

    // A short last section (Contact) may never reach the reading line,
    // so at the very bottom of the page, treat it as the current one.
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = sections[sections.length - 1] || current;

    links.forEach((a) => {
      const active = Boolean(current) && a.getAttribute('href') === `#${current.id}`;
      a.classList.toggle('is-active', active);
      if (active) {
        a.setAttribute('aria-current', 'location');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  };

  // Run at most once per frame while scrolling
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateActive();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateActive();
})();
