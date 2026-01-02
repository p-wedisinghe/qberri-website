document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const modal = document.getElementById('contact-modal');
    const openBtns = document.querySelectorAll('.contact-trigger, #open-contact');
    const closeBtn = document.querySelector('.close-modal');
    const leadForm = document.getElementById('lead-form');
    const formStatus = document.getElementById('form-status');

    openBtns.forEach(btn => {
        btn.onclick = () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Form Submission to Google Sheets
    leadForm.onsubmit = async (e) => {
        e.preventDefault();
        formStatus.textContent = 'Sending...';
        formStatus.className = '';

        const formData = new FormData(leadForm);
        const data = Object.fromEntries(formData.entries());

        try {
            // Google Apps Script Web App URL
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNOpgbhvdfwdwtUbUz6M9kxPis0CKgFVInPHQe9Gaxpwy1npA0h7686lfmaMA54Dd3/exec';

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for sending data to Google Script
                body: formData
            });

            console.log('Form Data Sent:', data);

            formStatus.textContent = 'Thank you! We\'ll get in touch soon.';
            formStatus.classList.add('success');
            leadForm.reset();
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                formStatus.textContent = '';
            }, 3000);

        } catch (error) {
            formStatus.textContent = 'Oops! Something went wrong. Please try again.';
            formStatus.classList.add('error');
        }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to sections and cards
    const animatedElements = document.querySelectorAll('.service-card, .about-container, .section-title');
    animatedElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Smooth scroll for nav links (handled by CSS, but good to ensure accessibility)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                // Let CSS handle the smooth scroll, but could add JS fallback here if needed
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.padding = '0.8rem 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.padding = '1.2rem 0';
            navbar.style.boxShadow = 'none';
        }
    });
});
