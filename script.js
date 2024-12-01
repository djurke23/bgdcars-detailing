
// HAMBURGER

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Zatvaranje menija kada se klikne na link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});

// Zatvaranje menija kada se klikne van njega
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});




// o nama v2



document.addEventListener('DOMContentLoaded', function() {
    const services = [
        {
            icon: 'fa-check-circle',
            title: "Tretmani za svaki budžet",
            description: "Od osnovnog do premium detaljnog čišćenja, imamo opcije za svačiji džep, garantujući najbolju vrednost."
        },
        {
            icon: 'fa-shield-alt',
            title: "Garancija kvaliteta",
            description: "Pružamo konkurentne cene na tržištu, tako da možete rezervisati sa sigurnošću da dobijate najbolju ponudu."
        },
        {
            icon: 'fa-clock',
            title: "Podrška 24/7",
            description: "Naš posvećeni tim je dostupan 24/7 da vam pomogne sa svim pitanjima, osiguravajući besprekorno iskustvo čišćenja."
        }
    ];

    const servicesSection = document.querySelector('.services-section');

    services.forEach((service, index) => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <div class="service-text">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
        servicesSection.appendChild(serviceItem);

        // Trigger animation after a slight delay
        setTimeout(() => {
            serviceItem.style.opacity = '1';
            serviceItem.style.transform = 'translateX(0)';
        }, 100 + (index * 200));
    });

    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-item').forEach(item => {
        observer.observe(item);
    });
});






// CENE

// Dodavanje jednostavne animacije kada kartice postanu vidljive

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const screenPosition = window.innerHeight / 1.3;

    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;

        if (cardPosition < screenPosition) {
            card.classList.add('appear');
        } else {
            card.classList.remove('appear');
        }
    });
});






// BROJKE


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 1000; // Sporije učitavanje brojki - povećanje vrednosti

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => {
                animateCounter(counter);
            }, 20); // Povećano vreme za sporiju animaciju
        } else {
            counter.innerText = target;
        }
    };

    const checkVisibilityAndAnimate = () => {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                animateCounter(counter);
                counter.parentElement.classList.add('in-viewport');
            } else {
                counter.parentElement.classList.remove('in-viewport');
            }
        });
    };

    window.addEventListener('scroll', checkVisibilityAndAnimate);
    checkVisibilityAndAnimate(); // Initial check in case the counter is already in view
});






// faq


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});







// slider after before


const container = document.querySelector('.image-container5');
        const beforeWrapper = document.querySelector('.image-wrapper-before');
        const slider = document.querySelector('.slider5');
        let isActive = false;

        const calculatePercentage = (event) => {
            const { left, width } = container.getBoundingClientRect();
            let pos = (event.clientX - left) / width;
            pos = Math.max(0, Math.min(1, pos));
            return pos * 100;
        };

        const updateSlider = (percentage) => {
            beforeWrapper.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
            slider.style.left = `${percentage}%`;
        };

        const move = (event) => {
            if (!isActive) return;
            const percentage = calculatePercentage(event);
            updateSlider(percentage);
        };

        // Mouse events
        container.addEventListener('mousedown', () => isActive = true);
        window.addEventListener('mouseup', () => isActive = false);
        window.addEventListener('mousemove', move);

        // Touch events
        container.addEventListener('touchstart', (e) => {
            isActive = true;
        });

        window.addEventListener('touchend', () => {
            isActive = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isActive) return;
            const touch = e.touches[0];
            const mockEvent = {
                clientX: touch.clientX
            };
            move(mockEvent);
        });

        // Prevent image dragging
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });











 // nase usluge


        const serviceDetails = {
            poliranje: {
                title: "Poliranje automobila",
                description: "Profesionalni tretman koji vraća originalni sjaj vašem vozilu i uklanja sve vrste površinskih oštećenja.",
                items: [
                    "Jednoslojno poliranje",
                    "Dvoslojno poliranje",
                    "Troslojno poliranje",
                    "Višeslojno poliranje",
                    "Detaljno spoljašnje pranje",
                    "Sušenje automobila",
                    "Hemijska i fizička dekontaminacija laka",
                    "Poliranje"
                ]
            },
            dubinsko: {
                title: "Dubinsko pranje",
                description: "Temeljno čišćenje svih površina vozila koje uklanja duboko ukorenjenu prljavštinu i održava svežinu enterijera.",
                items: [
                    "Detaljno unutrašnje pranje",
                    "Dubinsko pranje",
                    "Sušenje automobila"
                ]
            },
            keramicka: {
                title: "Keramička zaštita",
                description: "Napredna tehnologija zaštite koja pruža dugotrajnu otpornost na spoljašnje uticaje i održava sjaj vozila.",
                items: [
                    "U trajnosti od 12 meseci",
                    "U trajnosti od 24 meseca",
                    "U trajnosti od 36 meseci",
                    "U trajnosti od 60 meseci",
                    "Detaljno spoljašnje pranje",
                    "Sušenje automobila",
                    "Hemijska i fizička dekontaminacija laka",
                    "Nanošenje keramičke zaštite"
                ]
            },
            spoljasnje: {
                title: "Detaljno spoljašnje pranje",
                description: "Pažljivo i detaljno čišćenje svih spoljašnjih površina vozila za besprekoran izgled.",
                items: [
                    "Osnovno pranje",
                    "Ručno pranje",
                    "Pranje uvala",
                    "Čišćenje felni",
                    "Čišćenje potkrila",
                    "Sušenje automobila"
                ]
            },
            unutrasnje: {
                title: "Detaljno unutrašnje pranje",
                description: "Kompletno osvežavanje enterijera vašeg vozila sa posebnom pažnjom na svaki detalj.",
                items: [
                    "Usisavanje automobila",
                    "Uklanjanje dlaka sa podova",
                    "Čišćenje ventilacionih otvora",
                    "Čišćenje celog enterijera četkicama",
                    "Brisanje stakala"
                ]
            },
            farovi: {
                title: "Polimerizacija farova sa keramičkom zaštitom",
                description: "Profesionalna restauracija farova koja vraća njihovu providnost i štiti ih od budućeg zamućenja.",
                items: [
                    "Pranje farova",
                    "Šmirglanje",
                    "Polimerizovanje farova",
                    "Nanošenje keramičke zaštite"
                ]
            }
        };
        
        function openModal(service) {
            const modal = document.getElementById('serviceModal');
            const modalContent = document.getElementById('modalContent');
            const details = serviceDetails[service];
            
            modalContent.innerHTML = `
                <h3>${details.title}</h3>
                <p class="service-description-modal">${details.description}</p>
                <ul>
                    ${details.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            
            modal.style.display = 'block';
            // Trigger reflow
            modal.offsetHeight;
            modal.classList.add('fade-in');
        }
        
        function closeModal() {
            const modal = document.getElementById('serviceModal');
            modal.classList.remove('fade-in');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Vreme trajanja animacije
        }
        
        window.onclick = function(event) {
            const modal = document.getElementById('serviceModal');
            if (event.target == modal) {
                closeModal();
            }
        }
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });









        // SCROLL NAV BAR 


        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });




        // recenzije



        const track = document.querySelector('.testimonial-track');
        const slides = document.querySelectorAll('.testimonial');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const dotsContainer = document.querySelector('.dots-container');

        let currentIndex = 0;
        let interval;
        const autoScrollDelay = 4000;

        // Kreiranje tačkica za navigaciju
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateSlideClasses() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
            updateSlideClasses();
            resetInterval();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(currentIndex);
        }

        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(nextSlide, autoScrollDelay);
        }

        // Event listeners
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        // Inicijalno pokretanje auto-scroll
        interval = setInterval(nextSlide, autoScrollDelay);

        // Zaustavi auto-scroll kada korisnik pređe mišem preko slidera
        track.addEventListener('mouseenter', () => clearInterval(interval));
        track.addEventListener('mouseleave', resetInterval);









//dugme scroll to top


        const scrollBtn = document.getElementById('scrollBtn');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });





// cenovnik 


function checkScroll() {
    const cards = document.querySelectorAll('.service-card-cenovnik');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

const tables = document.querySelectorAll('.price-table');
tables.forEach(table => {
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.transition = 'background-color 0.3s ease';
        });
    });
});









// kontakt


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