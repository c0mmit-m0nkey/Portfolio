document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    
    // --- Navbar Style Change on Scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Fade-in Animation on Scroll for Sections ---
    const fadeInSections = document.querySelectorAll('.fade-in');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Smooth Scrolling for Nav Links (Simplified) ---
    // The CSS 'scroll-padding-top' property now handles the offset. 
    // This JS just ensures the smooth animation.
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Initialize Particles.js ---
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, 
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00aaff" 
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff", 
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2, 
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" 
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" 
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});
