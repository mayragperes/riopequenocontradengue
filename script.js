(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  document.getElementById('share').addEventListener('click', function () {
    var data = { title: 'Rio Pequeno Contra Dengue', text: 'Cada um deve fazer a sua parte! Dicas para prevenir a dengue no Rio Pequeno.', url: location.href };
    if (navigator.share) { navigator.share(data).catch(function () {}); }
    else if (navigator.clipboard) {
      navigator.clipboard.writeText(location.href).then(function () { alert('Link copiado!'); });
    }
  });
})();
