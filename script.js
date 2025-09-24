 
        // DOM Elements
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const contactForm = document.getElementById('contactForm');

        // Mobile Menu Toggle
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                // Show the corresponding page
                const pageId = link.getAttribute('data-page');
                pages.forEach(page => {
                    page.classList.remove('active');
                    if (page.id === pageId) {
                        page.classList.add('active');
                    }
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                // Scroll to top
                window.scrollTo(0, 0);
            });
        });

        // Form Validation
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            if (name && email && service && message) {
                // In a real application, you would send the form data to a server here
                alert('Thank you for your message! We will contact you within 24 hours.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Footer navigation
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks.forEach(link => {
            if (link.getAttribute('data-page')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = link.getAttribute('data-page');
                    
                    // Update active link in main nav
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                        if (navLink.getAttribute('data-page') === pageId) {
                            navLink.classList.add('active');
                        }
                    });
                    
                    // Show the corresponding page
                    pages.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === pageId) {
                            page.classList.add('active');
                        }
                    });
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            }
        });
