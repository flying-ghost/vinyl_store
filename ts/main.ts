// ===== DATA =====
interface Vinyl {
    id: string;
    title: string;
    artist: string;
    price: number;
    genre: string;
    condition: string;
    quantity: number;
    badge: string;
    badgeColor: string;
    tracks?: string[];
    year?: number;
    format?: string;
    rating?: number;
    description?: string;
}

const vinylCatalog: Vinyl[] = [
    {
        id: 'miles-davis-kind-of-blue',
        title: 'Kind of Blue',
        artist: 'Miles Davis',
        price: 4200,
        genre: 'jazz',
        condition: 'Near Mint',
        quantity: 3,
        badge: 'ДЖАЗ',
        badgeColor: '#4a7ba7',
        year: 1959,
        format: '180g Vinyl',
        rating: 5,
        description: 'Легендарный альбом, один из самых продаваемых джазовых альбомов всех времён.',
        tracks: ['So What', 'Freddie Freeloader', 'Blue in Green', 'All Blues', 'Flamenco Sketches']
    },
    {
        id: 'pink-floyd-dark-side',
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        price: 5800,
        genre: 'rock',
        condition: 'Mint',
        quantity: 2,
        badge: 'РОК',
        badgeColor: '#8b6f47',
        year: 1973,
        format: '180g Vinyl',
        rating: 5,
        description: 'Классический прогрессив-рок альбом с инновационным звуком.',
        tracks: ['Speak to Me', 'Breathe', 'On the Run', 'Time', 'The Great Gig in the Sky', 'Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse']
    },
    {
        id: 'bach-goldberg',
        title: 'Goldberg Variations',
        artist: 'Glenn Gould',
        price: 6800,
        genre: 'classic',
        condition: 'Mint',
        quantity: 1,
        badge: 'КЛАССИКА',
        badgeColor: '#6b4c8a',
        year: 1981,
        format: '180g Vinyl',
        rating: 5,
        description: 'Исполнение Гленна Гулда - один из лучших интерпретаций.',
        tracks: ['Aria', 'Variation 1-30', 'Aria da Capo']
    },
    {
        id: 'daft-punk-discovery',
        title: 'Discovery',
        artist: 'Daft Punk',
        price: 3500,
        genre: 'electronic',
        condition: 'Very Good',
        quantity: 5,
        badge: 'ЭЛЕКТРОНИКА',
        badgeColor: '#5a8a6f',
        year: 2001,
        format: '180g Vinyl',
        rating: 4,
        description: 'Культовый электронный альбом с хитами "One More Time" и "Digital Love".',
        tracks: ['One More Time', 'Aerodynamic', 'Digital Love', 'Homework', 'Hard Better Faster Stronger', 'Crescendolls', 'Nightvision', 'Supermodel', 'High Life', 'Something About Us', 'Verdis Quo']
    },
    {
        id: 'john-coltrane-sheets',
        title: 'A Love Supreme',
        artist: 'John Coltrane',
        price: 4900,
        genre: 'jazz',
        condition: 'Excellent',
        quantity: 2,
        badge: 'ДЖАЗ',
        badgeColor: '#4a7ba7',
        year: 1964,
        format: '180g Vinyl',
        rating: 5,
        description: 'Духовный шедевр джаза, один из самых влиятельных альбомов XX века.',
        tracks: ['A Love Supreme (Part 1: Recognition)', 'A Love Supreme (Part 2: Resolution)', 'A Love Supreme (Part 3: Pursuance)', 'A Love Supreme (Part 4: Psalm)']
    },
    {
        id: 'queen-bohemian',
        title: 'A Night at the Opera',
        artist: 'Queen',
        price: 5200,
        genre: 'rock',
        condition: 'Near Mint',
        quantity: 3,
        badge: 'РОК',
        badgeColor: '#8b6f47',
        year: 1975,
        format: '180g Vinyl',
        rating: 5,
        description: 'Содержит хит "Bohemian Rhapsody" - один из самых известных рок-хитов.',
        tracks: ['Death on Two Legs', 'Lazing on a Sunday Afternoon', 'I\'m in Love with My Car', 'You Take My Breath Away', 'Sweet Lady', 'Seaside Rendezvous', 'The Prophet\'s Song', 'Bohemian Rhapsody', 'Good Old-Fashioned Lover Boy', 'Somebody to Love']
    },
    {
        id: 'beethoven-9th',
        title: 'Symphony No. 9',
        artist: 'Ludwig van Beethoven',
        price: 7200,
        genre: 'classic',
        condition: 'Mint',
        quantity: 1,
        badge: 'КЛАССИКА',
        badgeColor: '#6b4c8a',
        year: 1980,
        format: '180g Vinyl',
        rating: 5,
        description: 'Легендарное исполнение Карлоса Клейбера.',
        tracks: ['Allegro ma non troppo', 'Scherzo', 'Adagio molto e cantabile', 'Ode to Joy']
    },
    {
        id: 'kraftwerk-computer',
        title: 'The Robots',
        artist: 'Kraftwerk',
        price: 4100,
        genre: 'electronic',
        condition: 'Very Good',
        quantity: 4,
        badge: 'ЭЛЕКТРОНИКА',
        badgeColor: '#5a8a6f',
        year: 1978,
        format: '180g Vinyl',
        rating: 4,
        description: 'Пионеры электронной музыки. Альбом, который повлиял на всю электронную музыку.',
        tracks: ['The Robots', 'Spacelab', 'Trans-Europe Express', 'The Telephone Call', 'Showroom Dummies']
    }
];

// ===== DOM ELEMENTS =====
const navToggle = document.querySelector('.nav-toggle') as HTMLButtonElement;
const navMenu = document.querySelector('nav ul') as HTMLUListElement;
const accordionHeaders = document.querySelectorAll('.accordion-header') as NodeListOf<HTMLElement>;
const filterBtns = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLElement>;
const productGrid = document.getElementById('product-grid') as HTMLElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;

// ===== NAVIGATION TOGGLE =====
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
        });
    });
}

// ===== ACCORDION FUNCTIONALITY =====
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling as HTMLElement;
        const icon = header.querySelector('.accordion-icon') as HTMLElement;

        // Close other accordions
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                const otherContent = otherHeader.nextElementSibling as HTMLElement;
                const otherIcon = otherHeader.querySelector('.accordion-icon') as HTMLElement;
                otherContent?.classList.remove('open');
                otherIcon?.classList.remove('open');
            }
        });

        // Toggle current accordion
        content?.classList.toggle('open');
        icon?.classList.toggle('open');
    });
});

// ===== PRODUCT RENDERING =====
function renderProducts(products: Vinyl[]): void {
    if (!productGrid) return;

    productGrid.innerHTML = products.map(vinyl => `
        <div class="product-card" onclick="viewProduct('${vinyl.id}')">
            <div class="product-image">
                <span class="product-badge" style="background: ${vinyl.badgeColor};">${vinyl.badge}</span>
                🎵
            </div>
            <div class="product-title">${vinyl.title}</div>
            <div class="product-artist">${vinyl.artist}</div>
            <div class="product-price">${vinyl.price.toLocaleString('ru-RU')} ₽</div>
            <div class="product-status">${vinyl.condition} • В наличии: ${vinyl.quantity}</div>
            <div class="product-actions">
                <button class="btn btn-icon" onclick="event.stopPropagation(); toggleFavorite(this)">♡</button>
                <button class="btn btn-icon" onclick="event.stopPropagation(); addToCart('${vinyl.id}')">🛒</button>
            </div>
        </div>
    `).join('');
}

// ===== FILTER FUNCTIONALITY =====
let currentFilter = 'all';
let currentSort = 'price-asc';

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter || 'all';
            applyFiltersAndSort();
        });
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        applyFiltersAndSort();
    });
}

if (searchInput) {
    searchInput.addEventListener('input', () => {
        applyFiltersAndSort();
    });
}

function applyFiltersAndSort(): void {
    let filtered = vinylCatalog;

    // Apply genre filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(v => v.genre === currentFilter);
    }

    // Apply search
    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.toLowerCase();
        filtered = filtered.filter(v =>
            v.title.toLowerCase().includes(query) ||
            v.artist.toLowerCase().includes(query)
        );
    }

    // Apply sorting
    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'title') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderProducts(filtered);
}

// ===== PRODUCT DETAIL VIEW =====
function viewProduct(id: string): void {
    const product = vinylCatalog.find(v => v.id === id);
    if (product) {
        // Store product in sessionStorage and redirect
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'product.html';
    }
}

// ===== CART FUNCTIONALITY =====
function addToCart(id: string): void {
    const product = vinylCatalog.find(v => v.id === id);
    if (product) {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItem = cart.find((item: any) => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.title} добавлен в корзину!`);
    }
}

// ===== FAVORITES FUNCTIONALITY =====
function toggleFavorite(btn: HTMLElement): void {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
}

// ===== FORM VALIDATION =====
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLInputElement).value;

        // Simple validation
        if (!name || !email || !phone || !message) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Пожалуйста, введите корректный email!');
            return;
        }

        // Phone validation (simple)
        if (phone.replace(/\D/g, '').length < 10) {
            alert('Пожалуйста, введите корректный номер телефона!');
            return;
        }

        alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    // Set first filter button as active
    if (filterBtns.length > 0) {
        filterBtns[0].classList.add('active');
    }

    // Render initial products
    renderProducts(vinylCatalog);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href) as HTMLElement;
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .section').forEach(el => {
    observer.observe(el);
});
