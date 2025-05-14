// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load Instagram posts
    loadInstagramFeed();

    // Handle logo visibility on scroll
    handleLogoVisibility();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Full screen menu implementation for both desktop and mobile
    function initFullScreenMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
        if (!hamburger || !navLinks) return;
        
        // Show hamburger menu in all views
        hamburger.style.display = 'block';
        
        // Function to open menu
        function openMenu() {
            hamburger.classList.add('active');
            navLinks.classList.add('active');
            body.classList.add('menu-open');
            console.log('Menu opened');
        }
        
        // Function to close menu
        function closeMenu() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Close any open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('mobile-visible');
            });
            
            // Remove active state from dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            
            console.log('Menu closed');
        }
        
        // Toggle dropdown menus
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = this.closest('.dropdown');
                const dropdownMenu = parent.querySelector('.dropdown-menu');
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('mobile-visible');
                    }
                });
                
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    if (dropdown !== parent) {
                        dropdown.classList.remove('active');
                    }
                });
                
                // Toggle this dropdown
                dropdownMenu.classList.toggle('mobile-visible');
                parent.classList.toggle('active');
            });
        });
        
        // Hamburger click - toggle menu
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu when clicking menu items
        navLinks.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });
    }
    
    // Initialize full screen menu
    initFullScreenMenu();
    
    // Form submission handling with validation
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic form validation example
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Simple validation examples
            if (!nameInput.value.trim()) {
                isValid = false;
                // Add error styling
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                isValid = false;
                // Add error styling
            }
            
            if (!messageInput.value.trim()) {
                isValid = false;
                // Add error styling
            }
            
            // If not valid, prevent form submission
            if (!isValid) {
                e.preventDefault();
                // Display error message
            }
            
            // If using Netlify forms, the form will be handled automatically
            // No need for additional submission logic
        });
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Add event listener for page load to handle animations
window.addEventListener('load', function() {
    // Add animation classes to elements once the page is fully loaded
    const animateElements = document.querySelectorAll('.animate-on-load');
    animateElements.forEach(element => {
        element.classList.add('animated');
    });
    
    // Make sure video plays on all browsers
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Try to play the video (needed for some mobile browsers)
        const playPromise = heroVideo.play();
        
        // Handle play promise rejection (some browsers need user interaction)
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Auto-play was prevented. This is normal on some browsers.');
            });
        }
    }
});

// Function to lazy load images as they come into viewport
function lazyLoadImages() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        // Create a new image object to pre-load the image
                        const newImg = new Image();
                        
                        // When the image is loaded, update the visible img element
                        newImg.onload = function() {
                            img.src = src;
                            img.classList.add('loaded');
                            
                            // Hide placeholder after a small delay
                            const placeholder = img.nextElementSibling;
                            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                                setTimeout(() => {
                                    placeholder.style.opacity = '0';
                                }, 300);
                            }
                        };
                        
                        // Handle loading error
                        newImg.onerror = function() {
                            // Keep placeholder visible but change to error state if needed
                            console.error('Error loading image: ' + src);
                        };
                        
                        // Start loading the actual image
                        newImg.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading images when they're 50px from entering viewport
            threshold: 0.1 // Trigger when at least 10% of the element is visible
        });
        
        // Target all images with data-src attribute
        document.querySelectorAll('img.lazy-image[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img.lazy-image[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            
            // Hide placeholders
            const placeholder = img.nextElementSibling;
            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                placeholder.style.opacity = '0';
            }
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Function to handle logo visibility on scroll
function handleLogoVisibility() {
    const logo = document.querySelector('.logo');
    if (!logo) return;

    let lastScrollTop = 0;
    const scrollThreshold = 50; // Scroll amount before hiding/showing logo

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // When scrolling down more than threshold, hide the logo
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            logo.style.opacity = '0';
            logo.style.visibility = 'hidden';
        }
        // When scrolling back to top (less than threshold), show the logo
        else if (scrollTop < scrollThreshold) {
            logo.style.opacity = '1';
            logo.style.visibility = 'visible';
        }

        lastScrollTop = scrollTop;
    });
}

// Function to load Instagram posts
function loadInstagramFeed() {
    const instagramContainer = document.getElementById('instagram-embed-container');
    if (!instagramContainer) return;
    
    // Clear loading indicator after Instagram script is loaded
    function clearLoadingIndicator() {
        const loadingElement = document.querySelector('.loading-instagram');
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }
    
    // Load Instagram embed script
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//www.instagram.com/embed.js";
        js.onload = function() {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
                clearLoadingIndicator();
            }
        };
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'instagram-embed-js'));
    
    // Fetch and add Instagram posts
    const username = 'cta.yesplus';
    const postsToShow = 4;
    
    // Instagram embed code format
    const createEmbed = (postUrl, index) => {
        return `<blockquote class="instagram-media" data-instgrm-permalink="${postUrl}" 
        data-instgrm-version="14" style="width:100%; max-width:350px; min-width:280px;">
        </blockquote>`;
    };
    
    // Common public post URLs for YES+ account (will be replaced with actual API call in production)
    // For demonstration purposes only - in a real implementation, you would use Instagram's API
    const samplePostUrls = [
        `https://www.instagram.com/p/C8sV-CWLOia/`,
        `https://www.instagram.com/p/C8ZDp6PJZTP/`,
        `https://www.instagram.com/p/C8JvmYQJ6w1/`,
        `https://www.instagram.com/p/C74TstSJUNs/`
    ];
    
    // Add sample embeds
    let embedHTML = '';
    for (let i = 0; i < Math.min(postsToShow, samplePostUrls.length); i++) {
        embedHTML += createEmbed(samplePostUrls[i], i);
    }
    
    // Add embeds to container before loading indicator
    const loadingElement = document.querySelector('.loading-instagram');
    if (loadingElement) {
        instagramContainer.innerHTML = embedHTML + instagramContainer.innerHTML;
    } else {
        instagramContainer.innerHTML = embedHTML;
    }
    
    // Process Instagram embeds if instgrm is already loaded
    if (window.instgrm) {
        window.instgrm.Embeds.process();
        clearLoadingIndicator();
    }
    
    // Note: In a production environment, you would use Instagram's Graph API
    // or a server-side implementation to fetch the most recent posts programmatically
}