const initializeWebsite = () => {
    // -------------------------------------------------------------------------
    // 1. Curated Menu Data
    // -------------------------------------------------------------------------
    const menuData = [
        {
            category: "pasta",
            categoryLabel: "Hand-Rolled Pasta",
            name: "Aglio E Olio",
            price: "₹420",
            badge: "Classic",
            description: "Traditional Italian spaghetti tossed in premium extra virgin olive oil, slow-roasted garlic confit, fresh parsley, and crushed red pepper flakes.",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "pasta",
            categoryLabel: "Hand-Rolled Pasta",
            name: "Truffle Fettuccine",
            price: "₹580",
            badge: "Chef's Special",
            description: "Freshly-rolled house fettuccine tossed in a luxurious cream and butter emulsion infused with black winter truffles and aged Parmigiano-Reggiano.",
            image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "pasta",
            categoryLabel: "Hand-Rolled Pasta",
            name: "Penne Arrabbiata",
            price: "₹460",
            badge: "Spicy",
            description: "Tubular penne cooked al dente in a fiery San Marzano tomato sauce, crushed red chillies, garlic confit, and torn garden sweet basil.",
            image: "https://images.unsplash.com/photo-1563379971899-660589a01cd3?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "pizza",
            categoryLabel: "Wood-Fired Pizza",
            name: "Jamie's Margherita",
            price: "₹490",
            badge: "Best Seller",
            description: "Our signature pie with fresh local buffalo mozzarella, crushed heirloom San Marzano tomatoes, garden sweet basil, and organic olive oil.",
            image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "pizza",
            categoryLabel: "Wood-Fired Pizza",
            name: "Miller's Carnivore",
            price: "₹620",
            badge: "Popular Choice",
            description: "A meat lover's dream topped with premium imported pepperoni, house-smoked pork sausage, caramelized red onions, and bubbly mozzarella.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "pizza",
            categoryLabel: "Wood-Fired Pizza",
            name: "Pesto & Sun-dried Tomato",
            price: "₹550",
            badge: "Vegetarian",
            description: "Thin crust pie layered with aromatic house basil pesto, sun-dried tomatoes, toasted pine nuts, and dollops of creamy fresh ricotta.",
            image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "desserts",
            categoryLabel: "Decadent Dessert",
            name: "Classic Tiramisu",
            price: "₹380",
            badge: "Must Try",
            description: "Layers of espresso-soaked ladyfinger biscuits and rich mascarpone sabayon, dusted with premium dark cocoa powder.",
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "desserts",
            categoryLabel: "Decadent Dessert",
            name: "Saffron Panna Cotta",
            price: "₹340",
            badge: "Signature",
            description: "Silky, delicate panna cotta infused with premium Kashmiri saffron, served with a tangy summer berry compote.",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "drinks",
            categoryLabel: "Signature Beverage",
            name: "Sunset Hibiscus Spritz",
            price: "₹280",
            badge: "Refreshing",
            description: "A sparkling, botanic mocktail featuring cold-brewed hibiscus flower tea, tonic water, fresh citrus juice, and fresh rosemary.",
            image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80&fm=webp"
        },
        {
            category: "drinks",
            categoryLabel: "Signature Beverage",
            name: "Cold Brew Espresso Tonic",
            price: "₹260",
            badge: "Premium Coffee",
            description: "Slow-dripped single-origin coffee from Araku Valley layered over artisanal tonic water and garnished with an orange wheel.",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80&fm=webp"
        }
    ];

    const menuContainer = document.getElementById('menu-container');
    const menuSearch = document.getElementById('menu-search');
    const menuTabs = document.getElementById('menu-tabs');
    const menuNoResults = document.getElementById('menu-no-results');

    // Render Menu Function with Transition
    function renderMenu(categoryFilter = 'all', searchQuery = '') {
        if (!menuContainer) return;
        
        const searchNormalized = searchQuery.toLowerCase().trim();

        // Filter items
        const filteredItems = menuData.filter(item => {
            const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
            const matchesSearch = item.name.toLowerCase().includes(searchNormalized) || 
                                  item.description.toLowerCase().includes(searchNormalized) ||
                                  item.categoryLabel.toLowerCase().includes(searchNormalized);
            return matchesCategory && matchesSearch;
        });

        // Add fading out effect
        menuContainer.style.opacity = '0';
        menuContainer.style.transform = 'translateY(15px)';
        menuContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
            menuContainer.innerHTML = '';

            if (filteredItems.length === 0) {
                menuNoResults.classList.remove('hidden');
            } else {
                menuNoResults.classList.add('hidden');
            }

            filteredItems.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'menu-item-row';
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-thumb" loading="lazy" width="90" height="90">
                    <div class="menu-item-body">
                        <div class="menu-item-head">
                            <h3 class="menu-item-name">${item.name}</h3>
                            <div class="menu-item-divider"></div>
                            <span class="menu-item-price">${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                    </div>
                `;
                menuContainer.appendChild(card);
            });

            // Fade back in
            menuContainer.style.opacity = '1';
            menuContainer.style.transform = 'translateY(0)';
        }, 200);
    }

    // Set up menu event triggers
    if (menuTabs) {
        menuTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tab-btn');
            if (!target) return;
            
            menuTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');

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

    renderMenu();

    // -------------------------------------------------------------------------
    // 2. Navigation: Sticky Glass Scroll & Mobile Drawer
    // -------------------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksList = document.getElementById('nav-links');
    const navbar = document.getElementById('main-navbar');

    if (mobileToggle && navLinksList) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinksList.classList.toggle('active');
        });
    }

    // Close drawer when link clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileToggle && mobileToggle.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navLinksList.classList.remove('active');
            }
        });
    });

    // Navbar Scroll Shadow
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // -------------------------------------------------------------------------
    // 3. Apple-Style Horizontal Gallery Drag Interaction
    // -------------------------------------------------------------------------
    const dragContainer = document.querySelector('.id-gallery-drag');
    if (dragContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        dragContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            dragContainer.classList.add('active');
            startX = e.pageX - dragContainer.offsetLeft;
            scrollLeft = dragContainer.scrollLeft;
        });

        dragContainer.addEventListener('mouseleave', () => {
            isDown = false;
            dragContainer.classList.remove('active');
        });

        dragContainer.addEventListener('mouseup', () => {
            isDown = false;
            dragContainer.classList.remove('active');
        });

        dragContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - dragContainer.offsetLeft;
            const walk = (x - startX) * 1.5; // scroll speed multiplier
            dragContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // -------------------------------------------------------------------------
    // 4. Scroll Reveal Animations (Intersection Observer)
    // -------------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null,
            threshold: 0.05,
            rootMargin: '0px 0px -40px 0px' // animate slightly before entering screen fully
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target); // only reveal once
                }
            });
        }, observerOptions);

        revealElements.forEach(el => observer.observe(el));
    }

    // -------------------------------------------------------------------------
    // 5. Google rating Testimonials Marquee duplication
    // -------------------------------------------------------------------------
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        // Clone reviews to ensure continuous loop filling viewport
        const clonedContent = marqueeTrack.innerHTML;
        marqueeTrack.innerHTML = clonedContent + clonedContent + clonedContent;
    }

    // -------------------------------------------------------------------------
    // 6. Luxury Toast Notification Banner
    // -------------------------------------------------------------------------
    const toast = document.getElementById('toast-notification');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastCloseBtn = document.getElementById('toast-close-btn');

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

        // Autohide after 5s
        if (toast.dataset.timeoutId) {
            clearTimeout(Number(toast.dataset.timeoutId));
        }
        const timeoutId = setTimeout(hideToast, 5000);
        toast.dataset.timeoutId = timeoutId;
    }

    function hideToast() {
        if (!toast) return;
        toast.classList.add('hidden');
    }

    if (toastCloseBtn) {
        toastCloseBtn.addEventListener('click', hideToast);
    }

    // -------------------------------------------------------------------------
    // 7. LocalStorage-Based Reservation System
    // -------------------------------------------------------------------------
    const mainForm = document.getElementById('reservation-form');
    const heroForm = document.getElementById('hero-booking-form');
    const myBookingsContainer = document.getElementById('my-bookings-container');
    const bookingDetailsDisplay = document.getElementById('booking-details-display');
    const cancelBookingBtn = document.getElementById('btn-cancel-booking');
    const dateInput = document.getElementById('booking-date');
    const heroDateInput = document.getElementById('hero-booking-date');

    // Prevent selecting past dates
    const restrictPastDates = (inputEl) => {
        if (!inputEl) return;
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        inputEl.min = `${yyyy}-${mm}-${dd}`;
    };

    restrictPastDates(dateInput);
    restrictPastDates(heroDateInput);

    // Save and Display Reservations
    function saveBooking(booking) {
        localStorage.setItem('casa_fresco_booking', JSON.stringify(booking));
        displayBookings();
        showToast("Table Secured", "We have verified your table seating slot at Casa Fresco HSR!");
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
                    <div class="booking-display-row"><strong>Name:</strong> ${booking.name || 'Club Member'}</div>
                    <div class="booking-display-row"><strong>Phone:</strong> ${booking.phone || '+91 User'}</div>
                    <div class="booking-display-row"><strong>Date:</strong> ${formattedDate}</div>
                    <div class="booking-display-row"><strong>Time:</strong> ${booking.time}</div>
                    <div class="booking-display-row"><strong>Guests:</strong> ${booking.guests} Guest(s)</div>
                    <div class="booking-display-row"><strong>Zone:</strong> ${booking.area || 'Rooftop'}</div>
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

    // Main booking form listener
    if (mainForm) {
        mainForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('booking-name').value;
            const phone = document.getElementById('booking-phone').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            const guests = document.getElementById('booking-guests').value;
            const area = document.getElementById('booking-area').value;
            const notes = document.getElementById('booking-notes').value;

            if (!name || !phone || !date || !time) {
                showToast("Fields Missing", "Please fill in all mandatory booking fields.", true);
                return;
            }

            saveBooking({ name, phone, date, time, guests, area, notes });
            mainForm.reset();
        });
    }

    // Hero quick reservation listener
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = document.getElementById('hero-booking-date').value;
            const time = document.getElementById('hero-booking-time').value;
            const guests = document.getElementById('hero-booking-guests').value;

            if (!date || !time) {
                showToast("Missing Date/Time", "Please pick a date and time slot first.", true);
                return;
            }

            // Fill default info for member quick reserve
            saveBooking({
                name: "Club Member (Quick Book)",
                phone: "Verified at Check-in",
                date,
                time,
                guests,
                area: "Rooftop Lounge (Panoramic Sky View)",
                notes: "Quick booked from hero screen card."
            });
            heroForm.reset();
        });
    }

    // Release/Cancel reservation
    if (cancelBookingBtn) {
        cancelBookingBtn.addEventListener('click', () => {
            localStorage.removeItem('casa_fresco_booking');
            displayBookings();
            showToast("Booking Released", "Your table reservation has been released.", true);
        });
    }

    displayBookings();
};

// Robust readyState load handler to solve race conditions
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}
