(() => {
  const panels = [...document.querySelectorAll('main > section')];
  const links = [...document.querySelectorAll('nav a')];

  function showPanel() {
    const id = location.hash.slice(1) || 'home';
    const selected = panels.find(panel => panel.id === id) || panels[0];
    panels.forEach(panel => { panel.hidden = panel !== selected; });
    links.forEach(link => {
      if (link.hash === `#${selected.id}`) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', showPanel);
  showPanel();
})();
