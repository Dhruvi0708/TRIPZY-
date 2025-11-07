// Data
const rideOptions = [
    { 
        name: 'Metro', 
        type: 'Public Transport', 
        price: 40, 
        eta: 25, 
        co2: 0.8, 
        icon: 'fa-train', 
        color: 'linear-gradient(to right, #2563eb, #0891b2)', 
        saving: 270,
        badge: 'GREENEST',
        rating: 4.5,
        users: '2.5M'
    },
    { 
        name: 'Rapido', 
        type: 'Bike Taxi', 
        price: 85, 
        eta: 18, 
        co2: 1.2, 
        icon: 'fa-motorcycle', 
        color: 'linear-gradient(to right, #f97316, #dc2626)', 
        saving: 225,
        badge: 'FAST & CHEAP',
        rating: 4.3,
        users: '1.8M'
    },
    { 
        name: 'Namma Yatri', 
        type: 'Auto Rickshaw', 
        price: 95, 
        eta: 22, 
        co2: 1.8, 
        icon: 'fa-taxi', 
        color: 'linear-gradient(to right, #eab308, #f59e0b)', 
        saving: 215,
        badge: 'BUDGET',
        rating: 4.2,
        users: '950K'
    },
    { 
        name: 'InDrive', 
        type: 'Cab (Negotiable)', 
        price: 180, 
        eta: 14, 
        co2: 3.5, 
        icon: 'fa-car', 
        color: 'linear-gradient(to right, #059669, #10b981)', 
        saving: 130,
        badge: 'BEST VALUE',
        rating: 4.4,
        users: '1.2M'
    },
    { 
        name: 'Ola + Metro', 
        type: 'Smart Combo', 
        price: 160, 
        eta: 28, 
        co2: 2.1, 
        icon: 'fa-bolt', 
        color: 'linear-gradient(to right, #0891b2, #3b82f6)', 
        saving: 150, 
        isCombo: true,
        badge: 'RECOMMENDED',
        rating: 4.7,
        users: '890K'
    },
    { 
        name: 'Uber Auto', 
        type: 'Auto Rickshaw', 
        price: 110, 
        eta: 20, 
        co2: 2.0, 
        icon: 'fa-taxi', 
        color: 'linear-gradient(to right, #475569, #1e293b)', 
        saving: 200,
        badge: null,
        rating: 4.1,
        users: '1.5M'
    },
    { 
        name: 'Ola', 
        type: 'Cab', 
        price: 280, 
        eta: 12, 
        co2: 4.2, 
        icon: 'fa-car', 
        color: 'linear-gradient(to right, #0d9488, #10b981)', 
        saving: 30,
        badge: null,
        rating: 4.4,
        users: '3.2M'
    },
    { 
        name: 'Uber', 
        type: 'Cab', 
        price: 310, 
        eta: 10, 
        co2: 4.5, 
        icon: 'fa-car', 
        color: 'linear-gradient(to right, #475569, #0f172a)', 
        saving: 0,
        badge: 'FASTEST',
        rating: 4.6,
        users: '4.1M'
    },
    { 
        name: 'BluSmart', 
        type: 'Electric Cab', 
        price: 265, 
        eta: 13, 
        co2: 0.5, 
        icon: 'fa-car', 
        color: 'linear-gradient(to right, #3b82f6, #1d4ed8)', 
        saving: 45,
        badge: 'ECO',
        rating: 4.5,
        users: '680K'
    },
    { 
        name: 'Meru', 
        type: 'Premium Cab', 
        price: 320, 
        eta: 15, 
        co2: 4.8, 
        icon: 'fa-car', 
        color: 'linear-gradient(to right, #7c3aed, #6d28d9)', 
        saving: 0,
        badge: null,
        rating: 4.3,
        users: '580K'
    }
];

const recentTrips = [
    { from: 'Connaught Place', to: 'Cyber Hub Gurgaon', date: 'Today, 9:15 AM', amount: 160, saved: 150, type: 'Combo' },
    { from: 'Koramangala', to: 'MG Road Bangalore', date: 'Today, 7:30 AM', amount: 85, saved: 225, type: 'Bike' },
    { from: 'Andheri West', to: 'BKC Mumbai', date: 'Yesterday', amount: 95, saved: 215, type: 'Auto' },
    { from: 'Rajiv Chowk', to: 'Gurgaon Sector 29', date: 'Yesterday', amount: 180, saved: 130, type: 'InDrive' },
    { from: 'Noida Sector 18', to: 'Delhi Airport', date: '2 days ago', amount: 265, saved: 45, type: 'BluSmart' },
    { from: 'Hauz Khas', to: 'Dwarka Sector 21', date: '3 days ago', amount: 40, saved: 270, type: 'Metro' },
    { from: 'Indiranagar', to: 'Electronic City', date: '4 days ago', amount: 110, saved: 200, type: 'Uber Auto' },
    { from: 'Powai', to: 'Nariman Point', date: '5 days ago', amount: 280, saved: 30, type: 'Ola Cab' },
    { from: 'Saket', to: 'Nehru Place', date: '6 days ago', amount: 85, saved: 225, type: 'Rapido' }
];

const testimonials = [
    { name: 'Rahul Sharma', role: 'Daily Commuter', avatar: '👨‍💼', text: 'Saved over ₹5000 this month! The combo suggestions are brilliant.', rating: 5 },
    { name: 'Priya Patel', role: 'Student', avatar: '👩‍🎓', text: 'Best app for budget travel. Love the eco-friendly options!', rating: 5 },
    { name: 'Arjun Singh', role: 'Corporate Professional', avatar: '👨‍💻', text: 'Perfect for daily office commute. Smart and reliable.', rating: 5 }
];

const partners = [
    { name: 'Uber', logo: '🚗' },
    { name: 'Ola', logo: '🚕' },
    { name: 'Rapido', logo: '🏍' },
    { name: 'Metro', logo: '🚇' },
    { name: 'Auto', logo: '🛺' },
    { name: 'InDrive', logo: '🚙' },
    { name: 'BluSmart', logo: '⚡' }
];

const routeSteps = [
    { step: 1, title: 'Walk to Metro Station', time: '5 mins', distance: '400m', color: 'linear-gradient(to bottom right, #06b6d4, #3b82f6)' },
    { step: 2, title: 'Take Metro (Blue Line)', time: '15 mins', distance: '8 stations', color: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)' },
    { step: 3, title: 'Book Ola from Station', time: '8 mins', distance: '3.2 km', color: 'linear-gradient(to bottom right, #14b8a6, #10b981)' }
];

// State
let currentFilter = 'cheapest';
let fromLocation = '';
let toLocation = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Show splash screen for 3 seconds
    setTimeout(() => {
        showScreen('login-screen');
    }, 3000);

    // Auth form handling
    const authForm = document.getElementById('auth-form');
    const toggleMode = document.getElementById('toggle-mode');
    const tabBtns = document.querySelectorAll('.tab-btn');

    /*authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showScreen('home-screen');
    });*/
    // Handle login form submission
document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault(); // stop page reload

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Simple check
    if (email && password) {
        // You can add real validation here later
        alert("Login successful! Welcome to Tripzy ✈");
        showScreen('home-screen'); // move to home page
    } else {
        alert("Please enter both email and password!");
    }
});


    toggleMode.addEventListener('click', (e) => {
        e.preventDefault();
        toggleAuthMode();
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mode = btn.dataset.tab;
            updateAuthForm(mode);
        });
    });

    // Search handling
    const searchBtn = document.getElementById('search-btn');
    const fromInput = document.getElementById('from-input');
    const toInput = document.getElementById('to-input');

    searchBtn.addEventListener('click', () => {
        fromLocation = fromInput.value;
        toLocation = toInput.value;

        if (fromLocation && toLocation) {
            document.getElementById('nav-from').textContent = fromLocation;
            document.getElementById('nav-to').textContent = toLocation;
            showScreen('results-screen');
            renderRides();
            renderRecentTrips();
            renderRouteSteps();
            setTimeout(() => {
                document.getElementById('ai-suggestion').classList.remove('hidden');
            }, 1000);
        }
    });

    // Filter tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderRides();
        });
    });

    // Render home page content
    renderTestimonials();
    renderPartners();
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    console.log("Switched to:",screenId);
}

function toggleAuthMode() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const isLogin = tabBtns[0].classList.contains('active');
    
    if (isLogin) {
        tabBtns[0].classList.remove('active');
        tabBtns[1].classList.add('active');
        updateAuthForm('signup');
    } else {
        tabBtns[1].classList.remove('active');
        tabBtns[0].classList.add('active');
        updateAuthForm('login');
    }
}

function updateAuthForm(mode) {
    const signupFields = document.querySelectorAll('.signup-only');
    const btnText = document.querySelector('.btn-text');
    const toggleAuth = document.querySelector('.toggle-auth');

    if (mode === 'signup') {
        signupFields.forEach(field => field.style.display = 'block');
        btnText.textContent = 'Create Account';
        toggleAuth.innerHTML = 'Already have an account? <a href="#" id="toggle-mode">Login</a>';
    } else {
        signupFields.forEach(field => field.style.display = 'none');
        btnText.textContent = 'Login to Tripzy';
        toggleAuth.innerHTML = "Don't have an account? <a href=\"#\" id=\"toggle-mode\">Sign Up</a>";
    }

    // Re-attach event listener
    document.getElementById('toggle-mode').addEventListener('click', (e) => {
        e.preventDefault();
        toggleAuthMode();
    });
}

function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    grid.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <div class="testimonial-avatar">${t.avatar}</div>
                <div>
                    <div class="testimonial-name">${t.name}</div>
                    <div class="testimonial-role">${t.role}</div>
                </div>
            </div>
            <div class="testimonial-rating">
                ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
        </div>
    `).join('');
}

function renderPartners() {
    const grid = document.getElementById('partners-grid');
    grid.innerHTML = partners.map(p => `
        <div class="partner-card">
            <div class="partner-logo">${p.logo}</div>
            <p class="partner-name">${p.name}</p>
        </div>
    `).join('');
}

function getSortedRides() {
    const sorted = [...rideOptions];
    switch(currentFilter) {
        case 'cheapest':
            return sorted.sort((a, b) => a.price - b.price);
        case 'fastest':
            return sorted.sort((a, b) => a.eta - b.eta);
        case 'greenest':
            return sorted.sort((a, b) => a.co2 - b.co2);
        default:
            return sorted;
    }
}

function renderRides() {
    const grid = document.getElementById('rides-grid');
    const rides = getSortedRides();
    
    grid.innerHTML = rides.map((ride, idx) => `
        <div class="ride-card" style="animation-delay: ${idx * 0.1}s;">
            <div class="ride-header" style="background: ${ride.color};">
                <div class="ride-header-content">
                    <div class="ride-info">
                        <div class="ride-icon-box">
                            <i class="fas ${ride.icon}"></i>
                        </div>
                        <div>
                            <h3 class="ride-name">${ride.name}</h3>
                            <p class="ride-type">${ride.type}</p>
                            <div class="ride-rating">
                                <div class="stars">
                                    ${generateStars(ride.rating)}
                                </div>
                                <span class="rating-text">${ride.rating} (${ride.users} users)</span>
                            </div>
                        </div>
                    </div>
                    ${ride.badge ? `
                        <div class="ride-badge">
                            ${ride.badge === 'RECOMMENDED' ? '<i class="fas fa-star"></i>' : ''}
                            ${ride.badge}
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="ride-content">
                <div class="stats-grid-ride">
                    <div class="stat-card-ride price">
                        <i class="fas fa-rupee-sign"></i>
                        <p class="stat-value-ride">₹${ride.price}</p>
                        <p class="stat-label-ride">Total Cost</p>
                    </div>
                    <div class="stat-card-ride time">
                        <i class="fas fa-clock"></i>
                        <p class="stat-value-ride">${ride.eta}</p>
                        <p class="stat-label-ride">Minutes</p>
                    </div>
                    <div class="stat-card-ride eco">
                        <i class="fas fa-leaf"></i>
                        <p class="stat-value-ride">${ride.co2}</p>
                        <p class="stat-label-ride">kg CO₂</p>
                    </div>
                </div>
                ${ride.saving > 0 ? `
                    <div class="savings-badge">
                        <p>
                            <i class="fas fa-chart-line"></i>
                            Save ₹${ride.saving} vs most expensive option
                        </p>
                    </div>
                ` : ''}
                <button class="btn-book" style="background: ${ride.color};">
                    <span>Book ${ride.name}</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star" style="opacity: 0.3;"></i>';
        }
    }
    return stars;
}

function renderRecentTrips() {
    const grid = document.getElementById('trips-grid');
    grid.innerHTML = recentTrips.slice(0, 3).map(trip => `
        <div class="trip-card">
            <div class="trip-meta">
                <span class="trip-date">${trip.date}</span>
                <span class="trip-type">${trip.type}</span>
            </div>
            <div class="trip-locations">
                <div class="trip-location">
                    <i class="fas fa-map-marker-alt teal"></i>
                    <span>${trip.from}</span>
                </div>
                <div class="trip-location">
                    <i class="fas fa-map-marker-alt orange"></i>
                    <span>${trip.to}</span>
                </div>
            </div>
            <div class="trip-stats">
                <div class="trip-amount">
                    <p>Amount Paid</p>
                    <p>₹${trip.amount}</p>
                </div>
                <div class="trip-saved">
                    <p>Saved</p>
                    <p>₹${trip.saved}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderRouteSteps() {
    const container = document.getElementById('route-steps');
    container.innerHTML = routeSteps.map(step => `
        <div class="route-step">
            <div class="step-number" style="background: ${step.color};">
                ${step.step}
            </div>
            <div class="step-info">
                <p class="step-title">${step.title}</p>
                <p class="step-details">${step.time} • ${step.distance}</p>
            </div>
            <i class="fas fa-chevron-right"></i>
        </div>
    `).join('');
}

function closeSuggestion() {
    document.getElementById('ai-suggestion').classList.add('hidden');
}

function goToHome() {
    showScreen('home-screen');
    document.getElementById('ai-suggestion').classList.add('hidden');
}

function scrollToSearch() {
    showScreen('home-screen');
    setTimeout(() => {
        document.querySelector('.search-card').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function initMap() {
  const delhi = { lat: 28.6139, lng: 77.2090 }; // Delhi
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: delhi,
  });

  new google.maps.Marker({
    position: delhi,
    map: map,
    title: "Tripzy Route Start ✈",
  });
}