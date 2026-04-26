// Catalog filtering and sorting logic

let filteredRecords = [...records];
let currentFilters = {
    genre: 'Все',
    format: 'all',
    condition: 'all',
    search: ''
};

// Initialize genre filter buttons
function initGenreFilter() {
    const genreFilter = document.getElementById('genreFilter');
    genreFilter.innerHTML = genres.map(g => 
        `<button class="filter-btn ${g === 'Все' ? 'active' : ''}" data-genre="${g}">${g}</button>`
    ).join('');

    genreFilter.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            genreFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilters.genre = btn.dataset.genre;
            applyFilters();
        });
    });
}

// Format filter
document.getElementById('formatFilter').querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('formatFilter').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilters.format = btn.dataset.filter;
        applyFilters();
    });
});

// Condition filter
document.getElementById('conditionFilter').querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('conditionFilter').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilters.condition = btn.dataset.filter;
        applyFilters();
    });
});

// Search
document.getElementById('searchInput').addEventListener('input', (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
});

// Sort
document.getElementById('sortSelect').addEventListener('change', (e) => {
    applySorting(e.target.value);
});

function applyFilters() {
    filteredRecords = records.filter(record => {
        // Genre filter
        if (currentFilters.genre !== 'Все' && record.genre !== currentFilters.genre) {
            return false;
        }

        // Format filter
        if (currentFilters.format !== 'all' && record.format !== currentFilters.format) {
            return false;
        }

        // Condition filter
        if (currentFilters.condition !== 'all' && record.condition !== currentFilters.condition) {
            return false;
        }

        // Search filter
        if (currentFilters.search) {
            const search = currentFilters.search;
            return record.title.toLowerCase().includes(search) ||
                   record.artist.toLowerCase().includes(search) ||
                   record.catalogNum.toLowerCase().includes(search);
        }

        return true;
    });

    applySorting(document.getElementById('sortSelect').value);
}

function applySorting(sortType) {
    switch(sortType) {
        case 'price-low':
            filteredRecords.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredRecords.sort((a, b) => b.price - a.price);
            break;
        case 'year-new':
            filteredRecords.sort((a, b) => b.year - a.year);
            break;
        case 'year-old':
            filteredRecords.sort((a, b) => a.year - b.year);
            break;
        case 'title':
            filteredRecords.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
            break;
        case 'featured':
        default:
            filteredRecords.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');

    if (filteredRecords.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    grid.innerHTML = filteredRecords.map((record, i) => `
        <a href="product.html?id=${record.id}" style="text-decoration: none; color: inherit;">
            <div class="product-card" style="animation: fadeIn 0.6s ease ${i * 0.05}s backwards;">
                <div class="product-image" style="background: linear-gradient(135deg, hsl(${Math.random() * 360}, 50%, 40%) 0%, hsl(${Math.random() * 360}, 50%, 20%) 100%);">
                    🎵
                    <div class="product-badge">${record.featured ? '⭐ Рекомендуемое' : record.condition}</div>
                </div>
                <div class="product-title">${record.title}</div>
                <div class="product-artist">${record.artist}</div>
                <div style="font-size: 12px; color: #b0b0b0; margin-bottom: 8px;">${record.year} • ${record.format}</div>
                <div class="product-price">${record.price.toLocaleString('ru-RU')} ₽</div>
                <div class="product-status">${record.condition} • ${record.inStock > 0 ? 'В наличии' : 'Нет в наличии'}</div>
                <div class="product-actions">
                    <button class="btn btn-icon" onclick="event.preventDefault(); toggleFavorite(this)">♡</button>
                    <button class="btn btn-icon" onclick="event.preventDefault(); addToCart(this)">🛒</button>
                </div>
            </div>
        </a>
    `).join('');
}

function toggleFavorite(btn) {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
}

function addToCart(btn) {
    btn.style.opacity = '0.5';
    setTimeout(() => btn.style.opacity = '1', 200);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initGenreFilter();
    renderProducts();
});
