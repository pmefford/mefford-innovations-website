(function () {
  // Single source of truth for every "Get in touch" button site-wide.
  // Change these two values (e.g. to a booking link) to update the CTA everywhere at once.
  var CTA = { label: 'Get in touch', href: '/contact.html' };

  document.querySelectorAll('[data-cta-primary]').forEach(function (el) {
    el.setAttribute('href', CTA.href);
    var label = el.querySelector('[data-cta-label]');
    if (label) label.textContent = CTA.label;
  });

  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  var navbarEl = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger-icon');
  var closeIcon = document.getElementById('close-icon');

  function closeMobileMenu() {
    menu.classList.remove('open');
    menu.style.top = '';
    document.body.classList.remove('mobile-menu-open');
    if (hamburger) hamburger.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  }

  if (btn && menu && navbarEl) {
    btn.addEventListener('click', function () {
      var willOpen = !menu.classList.contains('open');
      if (willOpen) {
        // Menu is still display:none here, so navbar's rendered height is just the top bar.
        menu.style.top = navbarEl.offsetHeight + 'px';
        menu.classList.add('open');
        document.body.classList.add('mobile-menu-open');
        if (hamburger) hamburger.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      } else {
        closeMobileMenu();
      }
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobileMenu);
    });
  }

  var navbar = document.getElementById('navbar');
  if (navbar) {
    var onScroll = function () { navbar.classList.toggle('scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }
})();
