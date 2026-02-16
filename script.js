/* ==========================================
   PORTFOLIO JAVASCRIPT
   Interactive functionality for Azhar Hamim's Portfolio
   ========================================== */

// ==========================================
// MOBILE NAVIGATION TOGGLE
// ==========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const THEME_STORAGE_KEY = 'theme';

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a navigation link
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add 'scrolled' class when scrolled past 50px
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// SMOOTH SCROLL WITH OFFSET
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ==========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinkItems.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animatedElements = document.querySelectorAll('.skill-card, .research-card, .project-card, .contact-card, .highlight-item, .education-card');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// ==========================================
// TYPING EFFECT FOR CODE WINDOW (Optional Enhancement)
// ==========================================
// This is optional but can add a nice touch to the code window
function typeCodeEffect() {
    const codeElement = document.querySelector('.window-content code');
    if (!codeElement) return;
    
    const codeText = codeElement.textContent;
    codeElement.textContent = '';
    let i = 0;
    
    function type() {
        if (i < codeText.length) {
            codeElement.textContent += codeText.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(() => {
        type();
    }, 800);
}

// Uncomment the line below to enable typing effect
// typeCodeEffect();

// ==========================================
// FORM VALIDATION (If you add a contact form later)
// ==========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Example form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    // Add your form handling logic here
    console.log('Form submitted');
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(highlightNavigation));

// ==========================================
// THEME TOGGLE
// ==========================================
function updateThemeButtonLabel() {
    if (!themeToggle) return;
    const isLightTheme = document.body.classList.contains('light-theme');
    themeToggle.textContent = isLightTheme ? 'Dark Mode' : 'Bright Mode';
    themeToggle.setAttribute('aria-label', isLightTheme ? 'Switch to dark mode' : 'Switch to bright mode');
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeButtonLabel();
}

function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    updateThemeButtonLabel();
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

loadTheme();

// ==========================================
// CURSOR TRACKING EFFECT (Optional Enhancement)
// ==========================================
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(6, 182, 212, 0.3);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Scale cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Uncomment to enable custom cursor (works best on desktop)
// if (window.innerWidth > 768) {
//     initCursorEffect();
// }

// ==========================================
// PARALLAX EFFECT FOR HERO SECTION (Optional)
// ==========================================
function parallaxEffect() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = heroSection.querySelector('.hero-visual');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Uncomment to enable parallax effect
// parallaxEffect();

// ==========================================
// PROJECT CARD TILT EFFECT (Optional Enhancement)
// ==========================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Uncomment to enable 3D tilt effect on cards
// if (window.innerWidth > 768) {
//     initTiltEffect();
// }

// ==========================================
// CONSOLE GREETING (Optional - Developer Easter Egg)
// ==========================================
console.log(`
%c👋 Hello, Developer!
%cWelcome to Azhar Hamim's Portfolio
%c
Built with ❤️ using HTML, CSS & JavaScript
Interested in the code? Check out the GitHub repo!
`,
'color: #06b6d4; font-size: 20px; font-weight: bold;',
'color: #e5e7eb; font-size: 14px;',
'color: #9ca3af; font-size: 12px;'
);

// ==========================================
// PAGE LOAD PERFORMANCE TRACKING
// ==========================================
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    
    // Trigger initial animations
    highlightNavigation();
});

// ==========================================
// ACCESSIBILITY: ESC KEY TO CLOSE MOBILE MENU
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ==========================================
// DYNAMIC YEAR IN FOOTER
// ==========================================
const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector('.footer-copyright');
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} All rights reserved.`;
}
