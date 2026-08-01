// Click the crocus logo icon to watch it bloom.
(function () {
  document.querySelectorAll('.crocus-icon').forEach(function (icon) {
    var closeTimer = null;
    icon.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      icon.classList.add('bloomed');
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        icon.classList.remove('bloomed');
      }, 3200);
    });
  });

  // Homepage hero crocus: closed bud by default; click toggles it open/shut.
  var heroCrocus = document.getElementById('hero-crocus');
  if (heroCrocus) {
    var heroWrap = heroCrocus.closest('.hero-crocus-wrap');
    heroCrocus.addEventListener('click', function () {
      heroWrap.classList.toggle('bloomed');
    });
  }
})();
