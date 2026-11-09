export function initialiserCarrousel() {
  const zone = document.querySelector('#une-defile');
  if (!zone) return;

  const precedent = document.querySelector('.precedent');
  const suivant = document.querySelector('.suivant');
  const slides = zone.querySelectorAll('.slide');
  const pastilles = document.querySelectorAll('.pastilles a');
  if (!precedent || !suivant) return;

  const defiler = (sens) => {
    const reduire = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    zone.scrollBy({
      left: sens * zone.clientWidth,
      behavior: reduire ? 'auto' : 'smooth'
    });
  };

  precedent.addEventListener('click', () => defiler(-1));
  suivant.addEventListener('click', () => defiler(1));

  const activerPastille = (id) => {
    pastilles.forEach((lien) => {
      if (lien.hash === '#' + id) lien.setAttribute('aria-current', 'true');
      else lien.removeAttribute('aria-current');
    });
  };

  if (slides[0]) activerPastille(slides[0].id);
  if (typeof IntersectionObserver === 'undefined') return;

  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) activerPastille(entree.target.id);
    });
  }, { root: zone, threshold: 0.6 });

  slides.forEach((slide) => observateur.observe(slide));
}
