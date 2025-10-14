document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigasi Aktif Berdasarkan Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const makeLinkActive = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                makeLinkActive(entry.target.id);
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Tombol Scroll to Top ---
    const scrollBtn = document.getElementById('scrollBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Fungsionalitas Tombol Interaktif ---
    const openLink = (url) => {
        if (url && url !== '#') {
            window.open(url, '_blank');
        } else {
            alert('Link untuk tombol ini belum diatur di file script.js!');
        }
    };

    // Tombol "Tampilkan Sangkar Air"
    const showCageBtn = document.getElementById('showCageBtn');
    if (showCageBtn) {
        showCageBtn.addEventListener('click', () => {
            const cageVisualizationURL = '#'; // <-- PASTE YOUR LINK HERE
            openLink(cageVisualizationURL);
        });
    }

    // Tombol "Aduk Campuran"
    const mixBtn = document.getElementById('mixBtn');
    if (mixBtn) {
        mixBtn.addEventListener('click', () => {
            const mixSimulationURL = '#'; // <-- PASTE YOUR LINK HERE
            openLink(mixSimulationURL);
        });
    }

    // Tombol "Diamkan"
    const separateBtn = document.getElementById('separateBtn');
    if (separateBtn) {
        separateBtn.addEventListener('click', () => {
            const separationSimulationURL = '#'; // <-- PASTE YOUR LINK HERE
            openLink(separationSimulationURL);
        });
    }
});
