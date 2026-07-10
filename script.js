// Geeft een console log als herkenning dat de terminal-stijl actief is
console.log(">> Terminal mode activated. Systems nominal.");

// Subtiel fade-in effect voor de navigatiebalk tijdens het scrollen
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottom = '1px solid #a855f7';
    } else {
        navbar.style.borderBottom = '1px solid #1e1e24';
    }
});