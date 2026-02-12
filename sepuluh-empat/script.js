// 1. Kursor Hati Mengikuti Mouse
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Efek Saat Kartu Muncul (Scroll Animation)
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

// Set kondisi awal kartu (hidden)
cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.1}s`; // Delay bertahap
    observer.observe(card);
});

// 3. Konfigurasi Vanilla Tilt (Efek 3D Goyang)
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,    // Kemiringan maksimal
    speed: 400, // Kecepatan
    glare: true, // Kilau cahaya
    "max-glare": 0.3,
    scale: 1.05 // Sedikit membesar
});