// M1 Labs Website JavaScript - Cyberpunk Edition

document.addEventListener('DOMContentLoaded', function() {
    
    // Create cyberpunk grid overlay
    const createGrid = () => {
        const body = document.querySelector('body');
        const grid = document.createElement('div');
        grid.classList.add('grid-overlay');
        body.appendChild(grid);
    };
    
    // Create scanline effect
    const createScanline = () => {
        const body = document.querySelector('body');
        const scanline = document.createElement('div');
        scanline.classList.add('scanline');
        body.appendChild(scanline);
    };
    
    // Create glitch effect for glitch-text elements
    const setupGlitchEffect = () => {
        const glitchElements = document.querySelectorAll('.glitch-text');
        glitchElements.forEach(element => {
            // Set data-text attribute if not already set
            if (!element.getAttribute('data-text')) {
                element.setAttribute('data-text', element.textContent);
            }
            
            // Apply random glitch effect occasionally
            setInterval(() => {
                if (Math.random() > 0.9) {
                    element.classList.add('active-glitch');
                    setTimeout(() => {
                        element.classList.remove('active-glitch');
                    }, 200);
                }
            }, 3000);
        });
    };
    
    // Navbar scroll effect with cyberpunk style
    const navbar = document.querySelector('.navbar');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            
            // Add random flicker effect to navbar on scroll
            if (Math.random() > 0.995) {
                navbar.classList.add('flicker');
                setTimeout(() => {
                    navbar.classList.remove('flicker');
                }, 150);
            }
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Create particles
    const createParticles = () => {
        const heroSection = document.querySelector('.hero-content');
        if (!heroSection) return;
        
        const particleBg = document.createElement('div');
        particleBg.className = 'particle-bg';
        heroSection.appendChild(particleBg);
        
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 5 + 2; // 2-7px
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particleBg.appendChild(particle);
        }
    };
    
    // Run setup functions
    createParticles();
    setupGlitchEffect();
    
    // Cyberpunk smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Create a "glitch" effect when clicking navigation
            const pulseEffect = document.createElement('div');
            pulseEffect.classList.add('nav-pulse');
            this.appendChild(pulseEffect);
            
            setTimeout(() => {
                pulseEffect.remove();
            }, 700);
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Get the navbar height to offset the scroll position
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Highlight active navigation item based on scroll position with cyberpunk effect
    function updateActiveNavItem() {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.navbar-nav .nav-link');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
                
                // Occasionally add glow effect
                if (Math.random() > 0.95) {
                    item.classList.add('glow-pulse');
                    setTimeout(() => {
                        item.classList.remove('glow-pulse');
                    }, 700);
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavItem);
    updateActiveNavItem(); // Check on initial load
    
    // Fade in elements as they come into view with cyberpunk effect
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add glitch effect when element appears
                entry.target.classList.add('appear-glitch');
                
                setTimeout(() => {
                    entry.target.classList.remove('appear-glitch');
                    entry.target.classList.add('visible');
                }, 150);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
    
    // Initialize first elements as visible (hero section) with cyberpunk effect
    document.querySelector('#hero-text')?.classList.add('visible');
    setTimeout(function() {
        document.querySelector('#hero-image')?.classList.add('visible');
    }, 300);
    
    // Enhance feature cards with cyberpunk effect
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Create circuit animation effect
            const circuit = document.createElement('div');
            circuit.classList.add('circuit-animation');
            card.appendChild(circuit);
            
            setTimeout(() => {
                circuit.remove();
            }, 1000);
        });
    });
    
    // Handle contact form submission with cyberpunk effect
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form is handled by Flask backend
            // This is just for additional client-side functionality if needed
            
            // Add cyberpunk submission effect
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'SENDING...';
            submitBtn.classList.add('sending');
            
            // Clear form fields after successful submission (handled by redirect)
            const successParam = new URLSearchParams(window.location.search).get('contact_success');
            if (successParam === 'true') {
                contactForm.reset();
            }
        });
    }
    
    // Check for success parameter on page load for contact form
    const successParam = new URLSearchParams(window.location.search).get('contact_success');
    if (successParam === 'true') {
        const successAlert = document.querySelector('.alert-success');
        if (successAlert) {
            successAlert.classList.add('cyberpunk-alert');
            successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Auto-hide the success message after 5 seconds
            setTimeout(() => {
                successAlert.style.opacity = '0';
                successAlert.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    successAlert.style.display = 'none';
                    
                    // Remove the success parameter from the URL
                    const url = new URL(window.location);
                    url.searchParams.delete('contact_success');
                    window.history.replaceState({}, '', url);
                }, 500);
            }, 5000);
        }
    }
    
    // Add CSS to enable cyberpunk styling that needs to be added via JS
    const addDynamicStyles = () => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .nav-pulse {
                position: absolute;
                border-radius: 50%;
                background: var(--primary-color);
                opacity: 0.6;
                pointer-events: none;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: navPulse 0.7s ease-out forwards;
            }
            
            @keyframes navPulse {
                0% { width: 0; height: 0; opacity: 0.7; }
                100% { width: 50px; height: 50px; opacity: 0; }
            }
            
            .glow-pulse {
                animation: glowPulse 0.7s ease-out;
            }
            
            @keyframes glowPulse {
                0% { text-shadow: 0 0 5px var(--primary-color); }
                50% { text-shadow: 0 0 20px var(--primary-color), 0 0 30px var(--secondary-color); }
                100% { text-shadow: 0 0 5px var(--primary-color); }
            }
            
            .appear-glitch {
                animation: appearGlitch 0.15s steps(2) forwards;
            }
            
            @keyframes appearGlitch {
                0% { clip-path: inset(50% 0 40% 0); }
                100% { clip-path: inset(0% 0 0% 0); }
            }
            
            .circuit-animation {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, 
                    transparent 0%, 
                    transparent 45%, 
                    var(--primary-color) 45%, 
                    var(--primary-color) 55%, 
                    transparent 55%, 
                    transparent 100%);
                background-size: 200% 200%;
                opacity: 0.05;
                pointer-events: none;
                animation: circuitAnim 1s ease;
            }
            
            @keyframes circuitAnim {
                0% { background-position: 200% 200%; opacity: 0; }
                50% { opacity: 0.1; }
                100% { background-position: 0 0; opacity: 0; }
            }
            
            .cyberpunk-alert {
                border-left: 4px solid var(--primary-color);
                box-shadow: 0 0 15px rgba(78, 205, 196, 0.3);
                animation: alertBlink 0.5s ease-in-out;
            }
            
            @keyframes alertBlink {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            
            .active-glitch {
                animation: textGlitch 0.2s steps(2) infinite;
                position: relative;
            }
            
            @keyframes textGlitch {
                0% { transform: translate(2px, 0); }
                50% { transform: translate(-2px, 0); }
                100% { transform: translate(0, 0); }
            }
            
            .sending {
                animation: sendingPulse 1s infinite;
            }
            
            @keyframes sendingPulse {
                0% { box-shadow: 0 0 0 0 rgba(78, 205, 196, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(78, 205, 196, 0); }
                100% { box-shadow: 0 0 0 0 rgba(78, 205, 196, 0); }
            }
        `;
        document.head.appendChild(styleElement);
    };
    
    addDynamicStyles();
});
