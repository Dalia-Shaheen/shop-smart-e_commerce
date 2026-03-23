const products = [
    {
        id: 1,
        title: 'Air Jordan 1 Retro High OG "Chicago" Style',
        price: 950,
        category: 'sports',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&auto=format&fit=crop'
        ],
        description: 'The Air Jordan 1 Retro High OG "Chicago" brings back the classic colorway that changed sneaker history forever. Premium leather construction, signature Nike Air cushioning, and the iconic bold red/white/black palette.'
    },
    {
        id: 2,
        title: 'Brooks Brothers Vertical Ribbed Knit Polo',
        price: 750,
        category: 'fashion',
        images: [
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop'
        ],
        description: 'Classic vertical ribbed knit polo from Brooks Brothers. Crafted from premium breathable cotton, ensuring comfort and style for any casual or semi-formal occasion.'
    },
    {
        id: 3,
        title: 'Apple AirPods Max',
        price: 9000,
        category: 'electronics',
        images: [
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop'
        ],
        description: 'Experience high-fidelity audio, Active Noise Cancellation, and an exquisite design with the Apple AirPods Max, redefining over-ear headphones.'
    },
    {
        id: 4,
        title: 'Air Jordan 1 Retro High OG "UNC Toe"',
        price: 950,
        category: 'sports',
        images: [
            'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop'
        ],
        description: 'The UNC Toe colorway pairs black and white leather with a striking blue finish. Legendary silhouette, uncompromised swagger.'
    },
    {
        id: 5,
        title: 'Air Jordan 4 Retro "Military Black"',
        price: 950,
        category: 'sports',
        images: [
            'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop'
        ],
        description: 'Crisp white leather with black accents gives the "Military Black" AJ4 a clean, versatile look that rules the streets.'
    },
    {
        id: 6,
        title: 'Speedcat OG Sneakers | PUMA (Brown)',
        price: 850,
        category: 'sports',
        brand: 'PUMA',
        images: [
            'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop'
        ],
        description: 'PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. Wrapped in soft suede and premium leather.'
    },
    {
        id: 7,
        title: 'Speedcat OG Sneakers | PUMA (Beige)',
        price: 900,
        category: 'sports',
        brand: 'PUMA',
        images: [
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop'
        ],
        description: 'PUMA Speedcat has been synonymous with speed, precision, and unparalleled performance for over 25 years. It originated as a fireproof Formula 1® footwear style, but over the decades it found itself on a new circuit – transcending the tracks of Monaco for the streets of global fashion capitals. Wrapped in soft suede and premium leather, this silhouette is reissued in its original red and black colorways with a new PUMA Cat Logo at the front.'
    },
    {
        id: 8,
        title: 'Adidas Samba OG (White)',
        price: 650,
        category: 'sports',
        brand: 'Adidas',
        images: [
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584735174965-48c48d4daf27?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop'
        ],
        description: 'Originally an indoor soccer shoe, the Samba OG has become a staple of streetwear fashion with its minimalist profile and distinctive suede T-toe.'
    },
    {
        id: 9,
        title: 'Adidas Samba OG (Black)',
        price: 600,
        category: 'sports',
        brand: 'Adidas',
        images: [
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1610486829707-160fa47124f9?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop'
        ],
        description: 'The iconic Samba in its sleek black colorway. A versatile favorite that seamlessly blends heritage sports style with modern aesthetics.'
    }
];

// Theme Toggle Logic
const themeBtn = document.getElementById('themeToggleBtn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
}

function updateThemeIcon(theme) {
    if (!themeBtn) return;
    const icon = themeBtn.querySelector('i');
    if (icon) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// Cart System
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCartUI() {
    const countEls = document.querySelectorAll('.cart-count');
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEls.forEach(el => {
        el.innerText = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}
function addToCart(productId) {
    productId = parseInt(productId);
    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    alert('Product added to cart!');
}
document.addEventListener('DOMContentLoaded', updateCartUI);

// Rendering index.html products
const grid = document.getElementById('productsGrid');
if (grid) {
    function renderProducts(filterCategory = 'all') {
        grid.innerHTML = '';
        const filtered = filterCategory === 'all' ? products : products.filter(p => p.category === filterCategory);

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
        <a href="product.html?id=${p.id}" style="display:block">
          <div class="product-img-wrap">
            <img src="${p.images[0]}" alt="${p.title}">
          </div>
          <h4 class="product-title">${p.title}</h4>
          <div class="product-price">${p.price} <span>L.E</span></div>
        </a>
        <button class="add-to-cart-btn" onclick="addToCart(${p.id})"><i class="fa-solid fa-plus"></i></button>
      `;
            grid.appendChild(card);
        });
    }

    // Initial render
    renderProducts('all');

    // Category Filtering
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            renderProducts(cat);
            // Optional: add visual active state
            categoryCards.forEach(c => c.style.borderColor = 'var(--border-color)');
            card.style.borderColor = 'var(--text-main)';
        });
    });
}

// Rendering product.html single product
const productDetailsWrap = document.getElementById('productDetailsWrap');
const breadcrumbName = document.getElementById('breadcrumbName');
if (productDetailsWrap) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 7; // Default to Speedcat Beige if no ID
    const p = products.find(x => x.id === productId);

    if (p) {
        if (breadcrumbName) breadcrumbName.innerText = p.title;

        // Build Gallery HTML
        const thumbHTML = p.images.map((img, i) => `
      <div class="thumb ${i === 0 ? 'active' : ''}" onclick="changeImage(this, '${img}')">
        <img src="${img}" alt="Thumbnail ${i + 1}">
      </div>
    `).join('');

        const infoHTML = `
      <!-- Gallery -->
      <div class="product-gallery">
        <div class="main-img">
          <img id="mainImage" src="${p.images[0]}" alt="${p.title}">
        </div>
        <div class="thumbnails">
          ${thumbHTML}
        </div>
      </div>

      <!-- Info -->
      <div class="product-info">
        <div class="tags">
          <div class="tag"><i class="fa-solid fa-tag"></i> ${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
          ${p.brand ? `<div class="tag"><i class="fa-solid fa-award"></i> ${p.brand}</div>` : ''}
        </div>
        
        <h1 class="poppins">${p.title}</h1>
        <div class="price">${p.price} <span>L.E</span></div>
        
        <p class="desc">${p.description}</p>
        
        <div class="product-actions">
          <button class="add-btn" onclick="addToCart(${p.id})"><i class="fa-solid fa-lock"></i> Add to Cart</button>
          <button class="fav-btn" onclick="alert('Added to Wishlist!')"><i class="fa-regular fa-heart"></i></button>
        </div>
        
        <div class="features-list">
          <div class="f-item">
            <i class="fa-solid fa-truck-fast"></i>
            <span><strong>Free Shipping</strong> on orders over 500 L.E</span>
          </div>
          <div class="f-item">
            <i class="fa-solid fa-rotate-left"></i>
            <span><strong>14-Day Returns</strong> on all products</span>
          </div>
          <div class="f-item">
            <i class="fa-solid fa-shield-halved"></i>
            <span><strong>Secure Payment</strong> via encrypted checkout</span>
          </div>
        </div>
      </div>
    `;

        productDetailsWrap.innerHTML = infoHTML;
    } else {
        productDetailsWrap.innerHTML = '<p>Product not found.</p>';
    }
}

// Global Image Change Function (used by onclick)
window.changeImage = function (element, newSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) mainImage.src = newSrc;

    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(t => t.classList.remove('active'));
    element.classList.add('active');
};

// ==========================================
// Global Interactions (Cart Sidebar, Toasts, Routing)
// ==========================================

// 1. Toast Notification System
const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
toastContainer.id = 'toastContainer';
document.body.appendChild(toastContainer);

window.showToast = function (message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// 2. Cart Sidebar UI
const cartOverlay = document.createElement('div');
cartOverlay.className = 'cart-overlay';
cartOverlay.id = 'cartOverlay';
document.body.appendChild(cartOverlay);

const cartSidebar = document.createElement('div');
cartSidebar.className = 'cart-sidebar';
cartSidebar.id = 'cartSidebar';
cartSidebar.innerHTML = `
  <div class="cart-header">
    <h2>Your Cart</h2>
    <i class="fa-solid fa-xmark close-cart" onclick="toggleCartSidebar()"></i>
  </div>
  <div class="cart-items" id="cartItemsContainer"></div>
  <div class="cart-footer">
    <div class="cart-total">
      <span>Total:</span>
      <span id="cartTotalPrice">0 L.E</span>
    </div>
    <button class="checkout-btn" onclick="checkout()"><i class="fa-solid fa-lock" style="margin-right:8px"></i> Checkout</button>
  </div>
`;
document.body.appendChild(cartSidebar);

window.toggleCartSidebar = function () {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    if (cartSidebar.classList.contains('open')) renderCartItems();
};
cartOverlay.addEventListener('click', toggleCartSidebar);

// Override AddToCart to show toast
const originalAddToCart = window.addToCart;
window.addToCart = function (productId, showSidebar = true) {
    productId = parseInt(productId);
    const existing = cart.find(i => i.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ id: productId, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showToast('Item added to cart!');

    if (showSidebar) {
        if (!cartSidebar.classList.contains('open')) toggleCartSidebar();
        else renderCartItems();
    }
};

window.removeFromCart = function (productId) {
    cart = cart.filter(i => i.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    renderCartItems();
};

window.updateQty = function (productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) window.removeFromCart(productId);
        else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
            renderCartItems();
        }
    }
};

window.renderCartItems = function () {
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotalPrice');
    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:40px;">Your cart is empty.</p>';
        totalEl.innerText = '0 L.E';
        return;
    }

    cart.forEach(cartItem => {
        const p = products.find(x => x.id === cartItem.id);
        if (p) {
            total += p.price * cartItem.quantity;
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
        <img src="${p.images[0]}" class="cart-img" alt="${p.title}">
        <div class="cart-item-info">
          <div class="cart-item-title">${p.title}</div>
          <div class="cart-item-price">${p.price} L.E</div>
          <div class="cart-item-actions">
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQty(${p.id}, -1)">-</button>
              <span style="font-size:13px; font-weight:600; width:16px; text-align:center;">${cartItem.quantity}</span>
              <button class="qty-btn" onclick="updateQty(${p.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${p.id})">Remove</button>
          </div>
        </div>
      `;
            container.appendChild(el);
        }
    });
    totalEl.innerText = total + ' L.E';
};

window.checkout = function () {
    if (cart.length === 0) return showToast('Your cart is empty!');
    showToast('Processing checkout...');
    setTimeout(() => {
        cart = [];
        localStorage.removeItem('cart');
        updateCartUI();
        toggleCartSidebar();
        showToast('Payment successful!');
    }, 1500);
};

// Bind Cart Icon in Navbars
document.querySelectorAll('.cart-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCartSidebar();
    });
});

// 3. functional Links and Search
document.addEventListener('DOMContentLoaded', () => {
    // Search bar logic
    const searchInputs = document.querySelectorAll('.search-bar input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const val = input.value.trim().toLowerCase();
                if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
                    // highlight search results by hiding non-mathing cards
                    if (typeof renderProducts === 'function') {
                        document.querySelectorAll('.category-card').forEach(c => c.style.borderColor = 'var(--border-color)');
                        const grid = document.getElementById('productsGrid');
                        grid.innerHTML = '';
                        const filtered = products.filter(p => p.title.toLowerCase().includes(val));
                        if (filtered.length === 0) grid.innerHTML = '<p style="grid-column:1/-1; text-align:center;">No products found.</p>';
                        filtered.forEach(p => {
                            const card = document.createElement('div'); card.className = 'product-card';
                            card.innerHTML = `<a href="product.html?id=${p.id}" style="display:block"><div class="product-img-wrap"><img src="${p.images[0]}"></div><h4 class="product-title">${p.title}</h4><div class="product-price">${p.price} <span>L.E</span></div></a><button class="add-to-cart-btn" onclick="addToCart(${p.id})"><i class="fa-solid fa-plus"></i></button>`;
                            grid.appendChild(card);
                        });
                        window.scrollTo({ top: document.getElementById('productsGrid').offsetTop - 100, behavior: 'smooth' });
                    }
                } else {
                    showToast('Search via Home Page not implemented yet, redirecting...');
                    setTimeout(() => window.location.href = 'index.html', 1000);
                }
            }
        });
    });

    // Dummy links binding
    const dummyLinks = document.querySelectorAll('a[href="#"]');
    dummyLinks.forEach(link => {
        if (!link.classList.contains('cart-icon')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const text = link.innerText.trim();
                if (text.includes('Shop') || text.includes('Featured') || text.includes('View All Products') || text.includes('View Deals')) {
                    if (document.getElementById('productsGrid')) {
                        window.scrollTo({ top: document.getElementById('productsGrid').offsetTop - 100, behavior: 'smooth' });
                    } else {
                        window.location.href = 'index.html';
                    }
                } else if (text.includes('Categories')) {
                    if (document.querySelector('.categories')) {
                        window.scrollTo({ top: document.querySelector('.categories').offsetTop - 100, behavior: 'smooth' });
                    } else {
                        window.location.href = 'index.html';
                    }
                } else {
                    showToast(text ? `Navigating to ${text}...` : 'Action triggered');
                }
            });
        }
    });

    // Login page specific
    const loginForm = document.querySelector('.login-form-wrapper form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Logging in...');
            setTimeout(() => window.location.href = 'index.html', 1000);
        });
        const socialBtns = document.querySelectorAll('.social-login button');
        socialBtns.forEach(btn => btn.addEventListener('click', () => {
            showToast('Social login processing...');
            setTimeout(() => window.location.href = 'index.html', 1000);
        }));
    }
});

