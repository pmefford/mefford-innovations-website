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
  var hamburger = document.getElementById('hamburger-icon');
  var closeIcon = document.getElementById('close-icon');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      if (hamburger) hamburger.classList.toggle('hidden', open);
      if (closeIcon) closeIcon.classList.toggle('hidden', !open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        if (hamburger) hamburger.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      });
    });
  }

  var navbar = document.getElementById('navbar');
  if (navbar) {
    var onScroll = function () { navbar.classList.toggle('scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }
})();
