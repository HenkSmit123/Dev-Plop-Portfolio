// Een leuk klein effect: als je op de website scrollt, krijgt de navigatiebalk een schaduw
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.5)';
        navbar.style.backgroundColor = '#0f172a';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = '#1e293b';
    }
});

console.log("Portfolio website succesvol geladen!");
