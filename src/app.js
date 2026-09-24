const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-menu');
const menuLabel = toggle.querySelector('[data-menu-label]');
function closeMenu(restoreFocus = false) {
  menu.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  menuLabel.textContent = 'Menu';
  document.body.classList.remove('menu-open');
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const opening = toggle.getAttribute('aria-expanded') !== 'true';
  if (!opening) { closeMenu(); return; }
  menu.hidden = false;
  toggle.setAttribute('aria-expanded', 'true');
  menuLabel.textContent = 'Close';
  document.body.classList.add('menu-open');
  menu.querySelector('a').focus();
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeMenu();
  const target = document.querySelector(link.hash);
  if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
}));
document.addEventListener('keydown', event => {
  if (menu.hidden) return;
  if (event.key === 'Escape') closeMenu(true);
  if (event.key === 'Tab') {
    const links = [...menu.querySelectorAll('a')];
    const first = toggle;
    const last = links.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
matchMedia('(min-width: 768px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const navLinks = [...document.querySelectorAll('.nav-link')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
const copy = document.querySelector('#copy-email');
copy.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('ertho.environmental@outlook.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Please select and copy the email address above.';
  }
});
