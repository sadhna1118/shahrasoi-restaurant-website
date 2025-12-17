document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking on a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Menu Category Filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            menuItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize menu items with animation
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon!`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Here you would typically send the email to your server
                alert(`Thank you for subscribing with ${email}!`);
                this.reset();
            }
        });
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check in case elements are already in view
    animateOnScroll();

    // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined') {
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
                    "value": "#e67e22"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#e67e22",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
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
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Menu Items Data
    const menuItemsData = [
        // Starters
        {
            name: 'Litti Chokha',
            description: 'Traditional Bihari dish made with whole wheat dough balls stuffed with sattu, served with baingan bharta and chokha.',
            price: '₹180',
            category: 'starters',
            isSpecial: true,
            isVeg: true
        },
        {
            name: 'Sattu Paratha',
            description: 'Healthy and nutritious paratha stuffed with roasted gram flour and spices.',
            price: '₹150',
            category: 'starters',
            isSpecial: false,
            isVeg: true
        },
        {
            name: 'Chana Ghugni',
            description: 'Spicy and tangy white peas curry, a popular street food from Bihar and UP.',
            price: '₹120',
            category: 'starters',
            isSpecial: false,
            isVeg: true
        },
        // Main Course
        {
            name: 'Dal Bati Churma',
            description: 'Rajasthani delicacy - baked wheat balls served with panchmel dal and sweet churma.',
            price: '₹250',
            category: 'main-course',
            isSpecial: true,
            isVeg: true
        },
        {
            name: 'Baingan Bharta',
            description: 'Smoky roasted eggplant cooked with onions, tomatoes and aromatic spices.',
            price: '₹180',
            category: 'main-course',
            isSpecial: false,
            isVeg: true
        },
        {
            name: 'Sattu Ka Paratha',
            description: 'Parathas stuffed with spiced roasted gram flour, served with yogurt and pickle.',
            price: '₹160',
            category: 'main-course',
            isSpecial: false,
            isVeg: true
        },
        // Breads
        {
            name: 'Tandoori Roti',
            description: 'Whole wheat bread baked in clay oven for that perfect smoky flavor.',
            price: '₹40',
            category: 'breads',
            isSpecial: false,
            isVeg: true
        },
        {
            name: 'Lachha Paratha',
            description: 'Flaky, multi-layered whole wheat bread, perfect with any curry.',
            price: '₹60',
            category: 'breads',
            isSpecial: false,
            isVeg: true
        },
        // Sweets
        {
            name: 'Khaja',
            description: 'Crispy layered sweet from Bihar, made with refined flour and sugar syrup.',
            price: '₹200',
            category: 'sweets',
            isSpecial: true,
            isVeg: true
        },
        {
            name: 'Malpua',
            description: 'Sweet pancakes dipped in sugar syrup, served with rabri.',
            price: '₹180',
            category: 'sweets',
            isSpecial: false,
            isVeg: true
        },
        // Beverages
        {
            name: 'Sattu Sharbat',
            description: 'Refreshing drink made with roasted gram flour, lemon, and spices.',
            price: '₹80',
            category: 'beverages',
            isSpecial: false,
            isVeg: true
        },
        {
            name: 'Lassi',
            description: 'Creamy yogurt-based drink, available in sweet and salted variants.',
            price: '₹70',
            category: 'beverages',
            isSpecial: false,
            isVeg: true
        }
    ];

    // Function to render menu items
    function renderMenuItems() {
        const menuContainer = document.getElementById('menu-items');
        
        if (!menuContainer) return;
        
        let menuHTML = '';
        
        menuItemsData.forEach((item, index) => {
            menuHTML += `
                <div class="menu-item ${item.category} ${item.isSpecial ? 'special' : ''} animate-on-scroll" style="animation-delay: ${index * 0.1}s">
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3>${item.name}</h3>
                            <span class="price">${item.price}</span>
                        </div>
                        <p class="description">${item.description}</p>
                        <div class="menu-item-footer">
                            ${item.isSpecial ? '<span class="special-tag">Chef\'s Special</span>' : ''}
                            <span class="veg-tag"><i class="fas fa-leaf"></i> Veg</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        menuContainer.innerHTML = menuHTML;
    }
    
    // Call the function to render menu items
    renderMenuItems();
});
document.getElementById("year").textContent = new Date().getFullYear();
