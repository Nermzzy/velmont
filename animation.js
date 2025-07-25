
// scroll effect 

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); // 👈 stops observing after first animation
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[class*="fade-"]').forEach(el => {
        observer.observe(el);
    });
});


