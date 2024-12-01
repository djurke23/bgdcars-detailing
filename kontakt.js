document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animacija za dugme
    const button = this.querySelector('button');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
    
    // Ovde možete dodati logiku za slanje forme
    alert('Poruka je uspešno poslata!');
    this.reset();
});

// Animacija za info-items pri scroll-u
const infoItems = document.querySelectorAll('.info-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0)';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5 });

infoItems.forEach(item => {
    observer.observe(item);
});