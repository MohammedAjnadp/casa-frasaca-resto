const initializeWebsite = () => {
    // -------------------------------------------------------------------------
    // 1. Menu Implementation with Rich Categories, Search, and Animations
    // -------------------------------------------------------------------------
    const menuData = [
        {
            category: "pasta",
            categoryLabel: "Delectable Pasta",
            name: "Aglio E Olio",
            price: "₹420",
            badge: "Classic",
            description: "Traditional Italian spaghetti tossed in premium extra virgin olive oil, slow-roasted garlic, parsley, and dry red pepper flakes.",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "pasta",
            categoryLabel: "Delectable Pasta",
            name: "Truffle Fettuccine",
            price: "₹580",
            badge: "Chef's Special",
            description: "Freshly-rolled fettuccine tossed in a luxurious cream and butter sauce infused with black winter truffles and aged Parmigiano-Reggiano.",
            image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "pasta",
            categoryLabel: "Delectable Pasta",
            name: "Spicy Penne Arrabbiata",
            price: "₹460",
            badge: "Spicy",
            description: "Tubular penne cooked al dente in a spicy San Marzano tomato sauce, fresh red chillies, garlic confit, and torn sweet basil.",
            image: "https://images.unsplash.com/photo-1563379971899-660589a01cd3?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "pizza",
            categoryLabel: "Handcrafted Pizza",
            name: "Jamie's Margherita",
            price: "₹490",
            badge: "Best Seller",
            description: "Our signature pie with fresh local buffalo mozzarella, crushed heirloom tomatoes, garden fresh basil, and a drizzle of organic olive oil.",
            image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "pizza",
            categoryLabel: "Handcrafted Pizza",
            name: "Miller's Carnivore",
            price: "₹620",
            badge: "Popular",
            description: "A meat lover's dream topped with premium imported pepperoni, house-smoked pork sausage, caramelized red onions, and bubbly mozzarella.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "pizza",
            categoryLabel: "Handcrafted Pizza",
            name: "Pesto & Sun-dried Tomato",
            price: "₹550",
            badge: "Vegetarian",
            description: "Thin crust pie layered with aromatic house basil pesto, sun-dried tomatoes, toasted pine nuts, and dollops of creamy fresh ricotta.",
            image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "desserts",
            categoryLabel: "Decadent Desserts",
            name: "Classic Tiramisu",
            price: "₹380",
            badge: "Must Try",
            description: "Layers of espresso-soaked ladyfinger biscuits and rich mascarpone sabayon, dusted with premium dark cocoa powder.",
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "desserts",
            categoryLabel: "Decadent Desserts",
            name: "Saffron Panna Cotta",
            price: "₹340",
            badge: "Signature",
            description: "Silky, delicate panna cotta infused with premium Kashmiri saffron, served with a tangy summer berry compote.",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "drinks",
            categoryLabel: "Signature Beverages",
            name: "Sunset Hibiscus Spritz",
            price: "₹280",
            badge: "Refreshing",
            description: "A sparkling, botanic mocktail featuring cold-brewed hibiscus flower tea, tonic water, fresh citrus juice, and fresh rosemary.",
            image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
        },
        {
            category: "drinks",
            categoryLabel: "Signature Beverages",
            name: "Cold Brew Espresso Tonic",
            price: "₹260",
            badge: "Premium Coffee",
            description: "Slow-dripped single-origin coffee from Araku Valley layered over artisanal tonic water and garnished with an orange wheel.",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
        }
    ];

    const menuContainer = document.getElementById('menu-container');
    const menuSearch = document.getElementById('menu-search');
    const menuTabs = document.getElementById('menu-tabs');
    const menuNoResults = document.getElementById('menu-no-results');

    // Function to render menu items with filter criteria
    function renderMenu(categoryFilter = 'all', searchQuery = '') {
        // Clear container
        menuContainer.innerHTML = '';
        const searchNormalized = searchQuery.toLowerCase().trim();

        // Filter items
        const filteredItems = menuData.filter(item => {
            const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
            const matchesSearch = item.name.toLowerCase().includes(searchNormalized) || 
                                  item.description.toLowerCase().includes(searchNormalized) ||
                                  item.categoryLabel.toLowerCase().includes(searchNormalized);
            return matchesCategory && matchesSearch;
        });

        // Toggle no-results message
        if (filteredItems.length === 0) {
            menuNoResults.classList.remove('hidden');
        } else {
            menuNoResults.classList.add('hidden');
        }

        // Create and append elements
        filteredItems.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <div class="menu-image-container">
                    <img src="${item.image}" alt="${item.name}" class="menu-image" loading="lazy">
                    <span class="menu-item-badge">${item.badge}</span>
                </div>
                <div class="menu-details">
                    <div class="menu-meta">
                        <span class="menu-category">${item.categoryLabel}</span>
                        <span class="menu-price">${item.price}</span>
                    </div>
                    <h3 class="menu-title">${item.name}</h3>
                    <p class="menu-desc">${item.description}</p>
                </div>
            `;
            menuContainer.appendChild(card);

            // Staggered intersection observer animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 80); // Stagger interval
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05 });

            observer.observe(card);
        });
    }

    // Set up menu events
    if (menuTabs) {
        menuTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tab-btn');
            if (!target) return;
            
            // Toggle active class
            menuTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');

            // Render
            const category = target.getAttribute('data-category');
            renderMenu(category, menuSearch.value);
        });
    }

    if (menuSearch) {
        menuSearch.addEventListener('input', () => {
            const activeTab = menuTabs.querySelector('.tab-btn.active');
            const category = activeTab ? activeTab.getAttribute('data-category') : 'all';
            renderMenu(category, menuSearch.value);
        });
    }

    // Initial render
    renderMenu();

    // -------------------------------------------------------------------------
    // 2. Smart Hours Status Script with Timezones
    // -------------------------------------------------------------------------
    const currentTimeDisplay = document.getElementById('current-time-val');
    
    function checkOpenStatus() {
        // HSR Layout timezone is IST (UTC +5:30)
        // We will calculate current IST time
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const istOffset = 5.5; // India standard offset
        const istTime = new Date(utc + (3600000 * istOffset));
        
        const currentHour = istTime.getHours();
        
        // Format time string
        let hrs = istTime.getHours();
        const mins = String(istTime.getMinutes()).padStart(2, '0');
        const ampm = hrs >= 12 ? 'PM' : 'AM';
        hrs = hrs % 12;
        hrs = hrs ? hrs : 12; // the hour '0' should be '12'
        const timeString = `${hrs}:${mins} ${ampm} IST`;
        
        if (currentTimeDisplay) {
            currentTimeDisplay.textContent = timeString;
        }

        // Open 9:00 AM (9) to 11:00 PM (23)
        const isOpen = currentHour >= 9 && currentHour < 23;
        
        const statusIndicator = document.querySelector('.status-indicator');
        const statusText = document.querySelector('.status-text');
        
        if (statusIndicator && statusText) {
            if (isOpen) {
                statusIndicator.className = 'status-indicator open';
                statusText.textContent = "We're Open";
            } else {
                statusIndicator.className = 'status-indicator closed';
                statusText.textContent = "Currently Closed";
            }
        }
    }
    
    checkOpenStatus();
    setInterval(checkOpenStatus, 15000); // Check every 15s for precision

    // -------------------------------------------------------------------------
    // 3. Navigation Controls: Hamburger Drawer & Smooth Scrolling
    // -------------------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksList = document.getElementById('nav-links');
    const navbar = document.getElementById('main-navbar');
    const navAnchors = document.querySelectorAll('.smooth-scroll');

    if (mobileToggle && navLinksList) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinksList.classList.toggle('active');
        });
    }

    // Smooth Scroll Click Handlers
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (mobileToggle && mobileToggle.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navLinksList.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar Scroll shadow and shrink
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link indicator update
        updateActiveNavLink();
    });

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 120; // offset
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navAnchors.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // -------------------------------------------------------------------------
    // 4. Scroll-Triggered Hero Canvas Optimization (Lazy, skipped frame-loading)
    // -------------------------------------------------------------------------
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const context = canvas.getContext('2d');
        const totalFrames = 240;
        
        // Optimize: skip frames to reduce initial download (approx. every 3rd frame is loaded)
        const frameStep = 3;
        const framesToDownload = [];
        
        for (let i = 1; i <= totalFrames; i += frameStep) {
            framesToDownload.push(i);
        }
        // Force include the last frame for a complete animation scroll
        if (framesToDownload[framesToDownload.length - 1] !== totalFrames) {
            framesToDownload.push(totalFrames);
        }

        const images = {};
        let loadedCount = 0;
        const totalToLoad = framesToDownload.length;
        
        // UI Loader elements
        const loader = document.getElementById('loader');
        const loaderProgress = document.getElementById('loader-progress');
        const loaderPercentage = document.getElementById('loader-percentage');

        // Path generator for files
        const getFramePath = index => {
            return `/images/hero section/ezgif-frame-${index.toString().padStart(3, '0')}.png`;
        };

        // Render function based on current scroll position
        function drawCanvasFrame(fraction) {
            const targetIndex = Math.min(totalFrames - 1, Math.floor(fraction * totalFrames)) + 1;
            
            // Find closest preloaded frame from the keys
            const loadedKeys = Object.keys(images).map(Number).sort((a, b) => a - b);
            if (loadedKeys.length === 0) return;
            
            const closest = loadedKeys.reduce((prev, curr) => {
                return (Math.abs(curr - targetIndex) < Math.abs(prev - targetIndex) ? curr : prev);
            });

            const imgToDraw = images[closest];
            if (imgToDraw && imgToDraw.complete) {
                // Handle canvas sizing properly
                context.drawImage(imgToDraw, 0, 0, canvas.width, canvas.height);
            }
        }

        // Scroll listener for Canvas and Text Steps
        const heroScroll = document.getElementById('hero-scroll');
        const scrollSteps = document.querySelectorAll('.scroll-step');
        
        function updateHeroContent() {
            if (!heroScroll) return;
            
            const maxScroll = heroScroll.scrollHeight - window.innerHeight;
            let scrollOffset = window.scrollY - heroScroll.offsetTop;
            
            if (scrollOffset < 0) scrollOffset = 0;
            if (scrollOffset > maxScroll) scrollOffset = maxScroll;
            
            const fraction = maxScroll > 0 ? scrollOffset / maxScroll : 0;
            
            // Draw Canvas
            drawCanvasFrame(fraction);
            
            // Update Active Scroll Text Steps
            const numSteps = scrollSteps.length;
            const currentStepDecimal = fraction * numSteps;
            
            scrollSteps.forEach((step, index) => {
                if (currentStepDecimal >= index && currentStepDecimal < index + 1) {
                    step.className = 'scroll-step active';
                } else if (currentStepDecimal >= index + 1) {
                    step.className = 'scroll-step inactive-up';
                } else {
                    step.className = 'scroll-step inactive-down';
                }
            });
        }

        function resizeCanvas() {
            canvas.width = 1920;
            canvas.height = 1080;
            updateHeroContent();
        }
        
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('scroll', updateHeroContent);

        // Preload skipped frames
        framesToDownload.forEach(frameIndex => {
            const img = new Image();
            img.onload = () => {
                images[frameIndex] = img;
                loadedCount++;
                
                // Update loader progress bar
                const percent = Math.round((loadedCount / totalToLoad) * 100);
                if (loaderProgress) loaderProgress.style.width = `${percent}%`;
                if (loaderPercentage) loaderPercentage.textContent = `${percent}%`;
                
                // If the first frame is loaded, draw immediately to hide canvas black flash
                if (frameIndex === 1) {
                    resizeCanvas();
                }

                // If loading completed, fade out loader screen
                if (loadedCount === totalToLoad) {
                    setTimeout(() => {
                        if (loader) loader.classList.add('fade-out');
                    }, 500);
                }
            };
            img.onerror = () => {
                // If frame fails, increment loaded count so loader doesn't block forever
                loadedCount++;
                if (loadedCount === totalToLoad) {
                    if (loader) loader.classList.add('fade-out');
                }
            };
            img.src = getFramePath(frameIndex);
        });

        // Set initial screen layout
        resizeCanvas();
    }

    // -------------------------------------------------------------------------
    // 5. LocalStorage-Based Reservation System
    // -------------------------------------------------------------------------
    const reservationForm = document.getElementById('reservation-form');
    const myBookingsContainer = document.getElementById('my-bookings-container');
    const bookingDetailsDisplay = document.getElementById('booking-details-display');
    const cancelBookingBtn = document.getElementById('btn-cancel-booking');
    const dateInput = document.getElementById('booking-date');
    const toast = document.getElementById('toast-notification');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastCloseBtn = document.getElementById('toast-close-btn');

    // Prevent selecting past dates in booking picker
    if (dateInput) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    // Custom success/warning toast notifications
    function showToast(title, message, isError = false) {
        if (!toast) return;
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        toast.className = 'toast';
        if (isError) {
            toast.style.borderLeftColor = '#ef4444';
            toast.querySelector('.toast-icon').className = 'fa-solid fa-circle-exclamation toast-icon';
            toast.querySelector('.toast-icon').style.color = '#ef4444';
        } else {
            toast.style.borderLeftColor = 'var(--primary)';
            toast.querySelector('.toast-icon').className = 'fa-solid fa-circle-check toast-icon';
            toast.querySelector('.toast-icon').style.color = 'var(--primary)';
        }
        
        toast.classList.remove('hidden');
        
        // Autohide after 5 seconds
        const timeoutId = setTimeout(hideToast, 5000);
        toast.dataset.timeoutId = timeoutId;
    }

    function hideToast() {
        if (!toast) return;
        toast.classList.add('hidden');
        if (toast.dataset.timeoutId) {
            clearTimeout(Number(toast.dataset.timeoutId));
        }
    }

    if (toastCloseBtn) {
        toastCloseBtn.addEventListener('click', hideToast);
    }

    // Load active reservations from localstorage
    function displayBookings() {
        const savedBooking = localStorage.getItem('casa_fresco_booking');
        if (savedBooking) {
            const booking = JSON.parse(savedBooking);
            
            // Format output date nicely
            const dateObj = new Date(booking.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });

            if (bookingDetailsDisplay) {
                bookingDetailsDisplay.innerHTML = `
                    <div class="booking-display-row"><strong>Name:</strong> ${booking.name}</div>
                    <div class="booking-display-row"><strong>Phone:</strong> ${booking.phone}</div>
                    <div class="booking-display-row"><strong>Date:</strong> ${formattedDate}</div>
                    <div class="booking-display-row"><strong>Time:</strong> ${booking.time}</div>
                    <div class="booking-display-row"><strong>Guests:</strong> ${booking.guests} Guest(s)</div>
                    <div class="booking-display-row"><strong>Zone:</strong> ${booking.area}</div>
                    ${booking.notes ? `<div class="booking-display-row"><strong>Notes:</strong> ${booking.notes}</div>` : ''}
                `;
            }
            if (myBookingsContainer) {
                myBookingsContainer.classList.remove('hidden');
            }
        } else {
            if (myBookingsContainer) {
                myBookingsContainer.classList.add('hidden');
            }
        }
    }

    // Form submit listener
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('booking-name').value;
            const phone = document.getElementById('booking-phone').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            const guests = document.getElementById('booking-guests').value;
            const area = document.getElementById('booking-area').value;
            const notes = document.getElementById('booking-notes').value;

            // Simple validation
            if (!name || !phone || !date || !time) {
                showToast("Booking Failed", "Please fill in all mandatory booking fields.", true);
                return;
            }

            const bookingData = { name, phone, date, time, guests, area, notes };
            
            // Save to local storage
            localStorage.setItem('casa_fresco_booking', JSON.stringify(bookingData));
            
            // Update display
            displayBookings();
            
            // Reset form fields
            reservationForm.reset();
            
            showToast("Table Reserved", "We have secured your rooftop dining space. See you soon!");
        });
    }

    // Cancel reservation listener
    if (cancelBookingBtn) {
        cancelBookingBtn.addEventListener('click', () => {
            localStorage.removeItem('casa_fresco_booking');
            displayBookings();
            showToast("Booking Cancelled", "Your reservation has been cancelled successfully.", true);
        });
    }

    // Initial booking check
    displayBookings();

    // -------------------------------------------------------------------------
    // 6. Customers Review Testimonial Autoplay Carousel Slider
    // -------------------------------------------------------------------------
    const reviewsData = [
        {
            name: "Ananya Sharma",
            rating: 5,
            text: "Casa Fresco has hands down the best rooftop vibes in HSR! The Truffle Fettuccine is extremely creamy and delicious. A solid 10/10 culinary spot.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Rohan Verma",
            rating: 5,
            text: "Loved the wood-fired pizzas, especially the Jamie's Margherita. Crust was crispy and toppings were incredibly fresh. Outstanding service too!",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Sophia Martinez",
            rating: 5,
            text: "Breathtaking sunset views from the lounge. The Hibiscus Spritz mocktail is so refreshing. It's the perfect spot to spend weekends in Bangalore.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
    ];

    const slider = document.getElementById('testimonials-slider');
    const dotsContainer = document.getElementById('slider-dots');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    let currentSlide = 0;
    let autoSlideInterval;

    function renderReviews() {
        if (!slider || !dotsContainer) return;
        
        slider.innerHTML = '';
        dotsContainer.innerHTML = '';

        reviewsData.forEach((review, index) => {
            // Slide creation
            const slide = document.createElement('div');
            slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
            
            // Build star rating icons
            let starsHtml = '';
            for (let s = 0; s < review.rating; s++) {
                starsHtml += '<i class="fa-solid fa-star"></i>';
            }

            slide.innerHTML = `
                <div class="review-content">
                    <i class="fa-solid fa-quote-left quote-icon"></i>
                    <div class="review-rating">${starsHtml}</div>
                    <p class="review-text">"${review.text}"</p>
                    <div class="review-author">
                        <img src="${review.avatar}" alt="${review.name}" class="author-avatar">
                        <span class="author-name">${review.name}</span>
                    </div>
                </div>
            `;
            slider.appendChild(slide);

            // Dot creation
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    function goToSlide(index) {
        if (!slider) return;
        
        const slides = slider.querySelectorAll('.testimonial-slide');
        const dots = dotsContainer.querySelectorAll('.dot');
        
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        currentSlide = index;
        
        // Move container width
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active states
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === currentSlide);
        });
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
        });

        // Reset timer
        resetAutoPlay();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        autoSlideInterval = setInterval(nextSlide, 7000); // Auto-slide every 7s
    }

    function resetAutoPlay() {
        clearInterval(autoSlideInterval);
        startAutoPlay();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Init Slider
    renderReviews();
    startAutoPlay();

    // -------------------------------------------------------------------------
    // 7. Footer Newsletter Subscription Simulation
    // -------------------------------------------------------------------------
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value;
                showToast("Subscribed", `Successfully subscribed ${email} to our tasting club newsletter!`);
                newsletterForm.reset();
            }
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}
