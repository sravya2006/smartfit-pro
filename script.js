// Mobile menu
const nav = document.getElementById('nav');
document.getElementById('menuBtn').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Gallery: watch faces in different colours
const styles = [['Midnight','#0b1d26','#00c2a8'],['Rose','#3a1c2b','#ff7eb6'],['Ocean','#0a2a4a','#4db8ff'],
                ['Sunset','#3a1f0a','#ffa94d'],['Forest','#0f2e1c','#6be08a'],['Violet','#25164a','#b794ff']];
const grid = document.getElementById('gallery-grid');
styles.forEach(([n, bg, ac], i) => {
  grid.insertAdjacentHTML('beforeend', `<div class="shot"><svg viewBox="0 0 120 180">
    <rect x="38" y="0" width="44" height="50" rx="8" fill="#222"/><rect x="38" y="130" width="44" height="50" rx="8" fill="#222"/>
    <rect x="16" y="42" width="88" height="96" rx="24" fill="${bg}" stroke="${ac}" stroke-width="3"/>
    <text x="60" y="88" text-anchor="middle" font-size="24" font-weight="bold" fill="#fff" font-family="Arial">${10+i}:${(i*9+9)%60<10?'0':''}${(i*9+9)%60}</text>
    <text x="60" y="108" text-anchor="middle" font-size="9" fill="${ac}" font-family="Arial">♥ ${68+i*3} bpm</text></svg><span>${n} Edition</span></div>`);
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault(); document.getElementById('ok').hidden = false; e.target.reset();
});
