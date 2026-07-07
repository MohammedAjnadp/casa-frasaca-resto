document.addEventListener('DOMContentLoaded', () => {
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
        if (!menuContainer) return;
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
            if (menuNoResults) menuNoResults.classList.remove('hidden');
        } else {
            if (menuNoResults) menuNoResults.classList.add('hidden');
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
                        }, index * 40); // Fast, light stagger
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.02 });

            observer.observe(card);
        });
    }

    // Set up menu events
    if (menuTabs) {
        menuTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tab-btn');
            if (!target) return;
            
            menuTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');

            const category = target.getAttribute('data-category');
            renderMenu(category, menuSearch ? menuSearch.value : '');
        });
    }

    if (menuSearch) {
        menuSearch.addEventListener('input', () => {
            const activeTab = menuTabs ? menuTabs.querySelector('.tab-btn.active') : null;
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
        hrs = hrs ? hrs : 12;
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
    setInterval(checkOpenStatus, 15000); // Check every 15s

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

    // Navbar Scroll shadow and active link highlights
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
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
    // 4. Scroll-Triggered Hero Canvas Optimization (Skipped frame-loading)
    // -------------------------------------------------------------------------
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const context = canvas.getContext('2d');
        const totalFrames = 240;
        const frameStep = 3; // Keep only every 3rd frame (80 total)
        const framesToDownload = [];
        
        for (let i = 1; i <= totalFrames; i += frameStep) {
            framesToDownload.push(i);
        }
        if (framesToDownload[framesToDownload.length - 1] !== totalFrames) {
            framesToDownload.push(totalFrames);
        }

        const images = {};
        let loadedCount = 0;
        const totalToLoad = framesToDownload.length;
        
        const loader = document.getElementById('loader');
        const loaderProgress = document.getElementById('loader-progress');
        const loaderPercentage = document.getElementById('loader-percentage');

        const getFramePath = index => {
            return `images/hero section/ezgif-frame-${index.toString().padStart(3, '0')}.png`;
        };

        function drawCanvasFrame(fraction) {
            const targetIndex = Math.min(totalFrames - 1, Math.floor(fraction * totalFrames)) + 1;
            const loadedKeys = Object.keys(images).map(Number).sort((a, b) => a - b);
            if (loadedKeys.length === 0) return;
            
            const closest = loadedKeys.reduce((prev, curr) => {
                return (Math.abs(curr - targetIndex) < Math.abs(prev - targetIndex) ? curr : prev);
            });

            const imgToDraw = images[closest];
            if (imgToDraw && imgToDraw.complete) {
                context.drawImage(imgToDraw, 0, 0, canvas.width, canvas.height);
            }
        }

        const heroScroll = document.getElementById('hero-scroll');
        const scrollSteps = document.querySelectorAll('.scroll-step');
        
        function updateHeroContent() {
            if (!heroScroll) return;
            
            const maxScroll = heroScroll.scrollHeight - window.innerHeight;
            let scrollOffset = window.scrollY - heroScroll.offsetTop;
            
            if (scrollOffset < 0) scrollOffset = 0;
            if (scrollOffset > maxScroll) scrollOffset = maxScroll;
            
            const fraction = maxScroll > 0 ? scrollOffset / maxScroll : 0;
            
            drawCanvasFrame(fraction);
            
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

        framesToDownload.forEach(frameIndex => {
            const img = new Image();
            img.src = getFramePath(frameIndex);
            img.onload = () => {
                images[frameIndex] = img;
                loadedCount++;
                
                const percent = Math.round((loadedCount / totalToLoad) * 100);
                if (loaderProgress) loaderProgress.style.width = `${percent}%`;
                if (loaderPercentage) loaderPercentage.textContent = `${percent}%`;
                
                if (frameIndex === 1) {
                    resizeCanvas();
                }

                if (loadedCount === totalToLoad) {
                    setTimeout(() => {
                        if (loader) loader.classList.add('fade-out');
                    }, 400); // Fast load animation under 1s
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === totalToLoad) {
                    if (loader) loader.classList.add('fade-out');
                }
            };
        });

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

    if (dateInput) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

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

    function displayBookings() {
        const savedBooking = localStorage.getItem('casa_fresco_booking');
        if (savedBooking) {
            const booking = JSON.parse(savedBooking);
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
                    <div class="booking-display-row"><strong>Tier:</strong> ${booking.area}</div>
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

            if (!name || !phone || !date || !time) {
                showToast("Booking Failed", "Please fill in all mandatory booking fields.", true);
                return;
            }

            const bookingData = { name, phone, date, time, guests, area, notes };
            localStorage.setItem('casa_fresco_booking', JSON.stringify(bookingData));
            displayBookings();
            reservationForm.reset();
            showToast("Tasting Preview Booked", "Your VIP preview session request has been submitted. Check details below!");
        });
    }

    if (cancelBookingBtn) {
        cancelBookingBtn.addEventListener('click', () => {
            localStorage.removeItem('casa_fresco_booking');
            displayBookings();
            showToast("Booking Cancelled", "Your VIP tasting request has been cancelled.", true);
        });
    }

    displayBookings();

    // -------------------------------------------------------------------------
    // 6. Testimonials Hover Video Playback Action
    // -------------------------------------------------------------------------
    const videoTestimonials = document.querySelectorAll('.video-testimonial');
    videoTestimonials.forEach(card => {
        const video = card.querySelector('.video-player');
        const playBtn = card.querySelector('.btn-play-video');
        const thumb = card.querySelector('.video-thumb');

        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch(e => console.log("Video playback interrupted:", e));
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    // -------------------------------------------------------------------------
    // 7. Membership Comparison Table Toggle
    // -------------------------------------------------------------------------
    const compareBtn = document.getElementById('compare-btn');
    const compareTableContainer = document.getElementById('compare-table-container');

    if (compareBtn && compareTableContainer) {
        compareBtn.addEventListener('click', () => {
            const isHidden = compareTableContainer.classList.contains('hidden');
            if (isHidden) {
                compareTableContainer.classList.remove('hidden');
                compareBtn.setAttribute('aria-expanded', 'true');
                // Scroll table smoothly into view
                setTimeout(() => {
                    compareTableContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                compareTableContainer.classList.add('hidden');
                compareBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // -------------------------------------------------------------------------
    // 8. Apple Style Horizontal Gallery Drag-to-Scroll
    // -------------------------------------------------------------------------
    const track = document.getElementById('gallery-track');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (track) {
        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.classList.add('dragging');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            e.preventDefault(); // Prevent text/image selection
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.classList.remove('dragging');
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.classList.remove('dragging');
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5; // Scroll speed modifier
            track.scrollLeft = scrollLeft - walk;
        });

        // Touch support for mobile devices
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        }, { passive: true });

        track.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - track.offsetLeft;
            const walk = (x - startX) * 1.2;
            track.scrollLeft = scrollLeft - walk;
        }, { passive: true });
    }

    // -------------------------------------------------------------------------
    // 9. FAQ Collapsible Accordion
    // -------------------------------------------------------------------------
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            const content = parent.querySelector('.faq-content');
            const isActive = parent.classList.contains('active');

            // Collapse other items (Accordion behavior)
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                    const itemContent = item.querySelector('.faq-content');
                    if (itemContent) itemContent.style.maxHeight = '0px';
                    const itemHeader = item.querySelector('.faq-header');
                    if (itemHeader) itemHeader.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            if (isActive) {
                parent.classList.remove('active');
                content.style.maxHeight = '0px';
                header.setAttribute('aria-expanded', 'false');
            } else {
                parent.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // -------------------------------------------------------------------------
    // 10. Micro-Interactions: Magnetic Buttons
    // -------------------------------------------------------------------------
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    // Disable on touch devices for performance
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Pull button slightly towards cursor (max 12px)
                btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });
    }

    // -------------------------------------------------------------------------
    // 11. Micro-Interactions: 3D Card Tilt Effect
    // -------------------------------------------------------------------------
    const tiltCards = document.querySelectorAll('.tilt-card');

    if (!isTouchDevice) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const percentX = x / rect.width;
                const percentY = y / rect.height;
                
                // Calculate angles (max 10 degrees tilt)
                const rotateX = (0.5 - percentY) * 10;
                const rotateY = (percentX - 0.5) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    // -------------------------------------------------------------------------
    // 12. Micro-Interactions: Dynamic Click Ripple
    // -------------------------------------------------------------------------
    const allClickables = document.querySelectorAll('.btn, .tab-btn, .faq-header, .nav-links a');
    allClickables.forEach(element => {
        element.addEventListener('click', function(e) {
            // Only add ripple if it's a mouse click
            if (e.clientX === 0 && e.clientY === 0) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple-span';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // -------------------------------------------------------------------------
    // 13. Dynamic Viewport Scroll Reveals & Count Animations (Intersection Observer)
    // -------------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-left, .reveal-right, .reveal-scale');
    const statCards = document.querySelectorAll('.stat-number');

    // Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('revealed');
                }, Number(delay));
                
                revealObserver.unobserve(element);
            }
        });
    }, { threshold: 0.05 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Stats Counter Animation
    let countersStarted = false;
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const statsContainer = document.getElementById('stats-counters');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }

    function animateCounters() {
        statCards.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            function updateCount(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out cubic
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                const currentValue = Math.floor(easeProgress * target);
                
                // Add commas to large numbers
                counter.textContent = currentValue.toLocaleString() + (target >= 1000 ? '+' : '');

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target.toLocaleString() + (target >= 1000 ? '+' : '');
                }
            }
            requestAnimationFrame(updateCount);
        });
    }

    // -------------------------------------------------------------------------
    // 14. Footer Newsletter Subscription
    // -------------------------------------------------------------------------
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput) {
                showToast("Subscribed", `Successfully subscribed ${emailInput.value} to our tasting club newsletter!`);
                newsletterForm.reset();
            }
        });
    }
});
