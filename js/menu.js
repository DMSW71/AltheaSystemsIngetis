export function initialiserMenu() {
  const bouton = document.querySelector('.menu-bouton');
  const entete = document.querySelector('.entete');
  if (!bouton || !entete) return;

  bouton.setAttribute('aria-expanded', 'false');
  entete.classList.add('menu-ferme');

  bouton.addEventListener('click', () => {
    const ouvert = bouton.getAttribute('aria-expanded') === 'true';
    bouton.setAttribute('aria-expanded', String(!ouvert));
    entete.classList.toggle('menu-ferme', ouvert);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && bouton.getAttribute('aria-expanded') === 'true') {
      bouton.setAttribute('aria-expanded', 'false');
      entete.classList.add('menu-ferme');
      bouton.focus();
    }
  });
}
