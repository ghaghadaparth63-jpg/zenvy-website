const products = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    price: 499,
    category: "Tee",
    color: "Black",
    collection: "Essentials",
    description: "Heavyweight oversized tee cut with a relaxed drape, premium cotton feel and a refined monochrome finish.",
    shortDescription: "Heavyweight oversized tee",
    colors: ["#111111", "#1c1c1c", "#474747"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true,
    tag: "NEW",
    placeholder: "ZENVY",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
    ],
    gradient: "linear-gradient(135deg, #1a1b1c 0%, #0a0a0a 100%)"
  },
  {
    id: 2,
    name: "Shadow Series Tee",
    price: 599,
    category: "Tee",
    color: "Onyx",
    collection: "Shadow Series",
    description: "A tonal streetwear staple with elevated structure and a stealth-inspired silhouette built for everyday wear.",
    shortDescription: "Oversized streetwear tee",
    colors: ["#141414", "#2d2d2d", "#6d6d6d"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    tag: "DROP",
    placeholder: "Z",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
    ],
    gradient: "linear-gradient(135deg, #202021 0%, #090909 100%)"
  },
  {
    id: 3,
    name: "Core Oversized Tee",
    price: 549,
    category: "Tee",
    color: "Midnight",
    collection: "Core",
    description: "Premium cotton with a longline fit, soft structure and a refined premium feel for everyday layering.",
    shortDescription: "Premium cotton oversized tee",
    colors: ["#111827", "#1b2436", "#475569"],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: false,
    tag: "Bestseller",
    placeholder: "CORE",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80"
    ],
    gradient: "linear-gradient(135deg, #1a232f 0%, #0a0d12 100%)"
  },
  {
    id: 4,
    name: "ZENVY Signature Tee",
    price: 649,
    category: "Tee",
    color: "Black",
    collection: "New Drop",
    description: "Statement-weight graphic essentials designed with a confident shape and premium premium finish.",
    shortDescription: "Premium oversized tee",
    colors: ["#0b0b0b", "#303030", "#8a8a8a"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    tag: "LIMITED",
    placeholder: "SIGN",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
    ],
    gradient: "linear-gradient(135deg, #151515 0%, #090909 100%)"
  },
  {
    id: 5,
    name: "Void Oversized Tee",
    price: 699,
    category: "Tee",
    color: "Charcoal",
    collection: "New Drop",
    description: "Minimal graphic streetwear built around calm contrast, sharp lines and a strong silhouette.",
    shortDescription: "Minimal graphic streetwear",
    colors: ["#2d2d2f", "#606062", "#8f8e8d"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true,
    tag: "NEW",
    placeholder: "VOID",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
    ],
    gradient: "linear-gradient(135deg, #29292b 0%, #121214 100%)"
  },
  {
    id: 6,
    name: "ZENVY Essential Hoodie",
    price: 1199,
    category: "Hoodie",
    color: "Black",
    collection: "Hoodies",
    description: "An oversized hoodie with a sculpted body, soft brushed interior and premium everyday layering energy.",
    shortDescription: "Oversized hoodie",
    colors: ["#0d0d0d", "#292929", "#585858"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    tag: "HOT",
    placeholder: "HOOD",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
    ],
    gradient: "linear-gradient(135deg, #111111 0%, #050505 100%)"
  }
];

const cartKey = "zenvyCart";
const wishlistKey = "zenvyWishlist";
const state = {
  cart: JSON.parse(localStorage.getItem(cartKey)) || [],
  wishlist: JSON.parse(localStorage.getItem(wishlistKey)) || [],
  searchQuery: "",
  filterState: {
    category: "All",
    price: "All",
    color: "All",
    size: "All",
    collection: "All"
  },
  sortBy: "featured",
  productId: null,
  selectedSize: null,
  checkoutStep: 1,
  order: null
};

const elements = {
  productGrid: document.getElementById("productGrid"),
  emptyState: document.getElementById("emptyState"),
  cartCount: document.getElementById("cartCount"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartBody: document.getElementById("cartBody"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartShipping: document.getElementById("cartShipping"),
  cartTotal: document.getElementById("cartTotal"),
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  wishlistBody: document.getElementById("wishlistBody"),
  productModal: document.getElementById("productModal"),
  sizeGuideModal: document.getElementById("sizeGuideModal"),
  checkoutModal: document.getElementById("checkoutModal"),
  confirmationModal: document.getElementById("confirmationModal"),
  searchModal: document.getElementById("searchModal"),
  toast: document.getElementById("toast"),
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterMessage: document.getElementById("newsletterMessage"),
  searchInput: document.getElementById("searchInput"),
  sortSelect: document.getElementById("sortSelect"),
  categoryFilter: document.getElementById("categoryFilter"),
  priceFilter: document.getElementById("priceFilter"),
  colorFilter: document.getElementById("colorFilter"),
  sizeFilter: document.getElementById("sizeFilter"),
  collectionFilter: document.getElementById("collectionFilter"),
  collectionsGrid: document.getElementById("collectionsGrid"),
  searchModalInput: document.getElementById("searchModalInput"),
  searchResults: document.getElementById("searchResults"),
  checkoutCartSummary: document.getElementById("checkoutCartSummary"),
  checkoutOrderSummary: document.getElementById("checkoutOrderSummary"),
  checkoutPrev: document.getElementById("checkoutPrev"),
  checkoutNext: document.getElementById("checkoutNext"),
  confirmationBody: document.getElementById("confirmationBody")
};

function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(state.cart));
}

function saveWishlist() {
  localStorage.setItem(wishlistKey, JSON.stringify(state.wishlist));
}

function showToast(message) {
  const toast = elements.toast;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

function formatPrice(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function getFilteredProducts() {
  const searchValue = state.searchQuery.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const matchesQuery =
      !searchValue ||
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.color.toLowerCase().includes(searchValue) ||
      product.collection.toLowerCase().includes(searchValue);

    const matchesCategory =
      state.filterState.category === "All" || product.category === state.filterState.category;
    const matchesColor =
      state.filterState.color === "All" || product.color === state.filterState.color;
    const matchesCollection =
      state.filterState.collection === "All" || product.collection === state.filterState.collection;
    const matchesSize =
      state.filterState.size === "All" || product.sizes.includes(state.filterState.size);

    const matchesPrice = (() => {
      if (state.filterState.price === "All") return true;
      if (state.filterState.price === "under-600") return product.price < 600;
      if (state.filterState.price === "600-999") return product.price >= 600 && product.price <= 999;
      if (state.filterState.price === "1000-plus") return product.price >= 1000;
      return true;
    })();

    return matchesQuery && matchesCategory && matchesColor && matchesCollection && matchesSize && matchesPrice;
  });

  const sorted = [...filtered];

  if (state.sortBy === "featured") {
    sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
  } else if (state.sortBy === "newest") {
    sorted.sort((a, b) => b.id - a.id);
  } else if (state.sortBy === "low-high") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "high-low") {
    sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  elements.emptyState.classList.toggle("hidden", filteredProducts.length > 0);

  elements.productGrid.innerHTML = filteredProducts
    .map((product) => {
      const isWishlisted = state.wishlist.includes(product.id);
      return `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-media" style="background: ${product.gradient};">
            <div class="product-badges">
              <span class="product-badge">${product.tag}</span>
            </div>
            <button type="button" class="wishlist-toggle ${isWishlisted ? "active" : ""}" data-wishlist-id="${product.id}" aria-label="Add to wishlist">${isWishlisted ? "♥" : "♡"}</button>
            <img class="product-image" src="${product.image || product.images[0]}" alt="${product.name}" />
            <div class="product-placeholder">${product.placeholder}</div>
          </div>

          <div class="product-content">
            <div class="product-meta">
              <div>
                <h3>${product.name}</h3>
                <p>${product.shortDescription}</p>
              </div>
              <strong>${formatPrice(product.price)}</strong>
            </div>

            <div class="color-row" aria-label="Available colors">
              ${product.colors
                .map((color) => `<span class="color-swatch" style="background:${color};" title="${product.color}"></span>`)
                .join("")}
            </div>

            <div class="card-actions">
              <button type="button" class="quick-view" data-quick-view="${product.id}">Quick View</button>
              <button type="button" class="card-button" data-add-cart="${product.id}">Add to Cart</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCollections() {
  const collectionNames = ["Essentials", "Shadow Series", "Core", "Hoodies", "New Drop"];

  elements.collectionsGrid.innerHTML = collectionNames
    .map((name) => {
      const count = products.filter((product) => product.collection === name).length;
      const palette = ["#17181a", "#101112", "#171b1f", "#111214", "#1a1a1a"][collectionNames.indexOf(name)];
      return `
        <article class="collection-card" style="background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.5)), ${palette};">
          <div>
            <h3>${name}</h3>
            <p>${count} Items</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateCartCount() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartCount.textContent = totalItems;
}

function getCartSummary() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;
  return { subtotal, shipping, total };
}

function renderCartDrawer() {
  const { subtotal, shipping, total } = getCartSummary();

  if (!state.cart.length) {
    elements.cartBody.innerHTML = '<div class="empty-drawer">Your cart is empty.</div>';
    elements.cartSubtotal.textContent = formatPrice(0);
    elements.cartShipping.textContent = formatPrice(0);
    elements.cartTotal.textContent = formatPrice(0);
    return;
  }

  elements.cartBody.innerHTML = state.cart
    .map(
      (item, index) => `
        <div class="cart-item-row">
          <div class="cart-item-thumb">${item.placeholder}</div>
          <div class="cart-item-copy">
            <h4>${item.name}</h4>
            <p>${item.size} · ${formatPrice(item.price)}</p>
            <div class="cart-item-controls">
              <div class="quantity-box">
                <button type="button" data-qty-action="decrease" data-index="${index}" aria-label="Decrease item quantity">−</button>
                <span>${item.quantity}</span>
                <button type="button" data-qty-action="increase" data-index="${index}" aria-label="Increase item quantity">+</button>
              </div>
              <button type="button" class="remove-btn" data-remove-index="${index}">Remove</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  elements.cartSubtotal.textContent = formatPrice(subtotal);
  elements.cartShipping.textContent = formatPrice(shipping);
  elements.cartTotal.textContent = formatPrice(total);
}

function renderWishlistDrawer() {
  const wishlistItems = state.wishlist
    .map((id) => getProductById(id))
    .filter(Boolean);

  if (!wishlistItems.length) {
    elements.wishlistBody.innerHTML = '<div class="empty-drawer">Your wishlist is empty.</div>';
    return;
  }

  elements.wishlistBody.innerHTML = wishlistItems
    .map(
      (product) => `
        <div class="wishlist-row">
          <div class="wishlist-thumb">${product.placeholder}</div>
          <div class="wishlist-copy">
            <h4>${product.name}</h4>
            <p>${formatPrice(product.price)}</p>
          </div>
          <div class="wishlist-actions">
            <button type="button" class="wishlist-btn" data-remove-wishlist="${product.id}">Remove</button>
            <button type="button" class="shop-btn" data-cart-from-wishlist="${product.id}">Move to cart</button>
          </div>
        </div>
      `
    )
    .join("");
}

function openDrawer(drawerName) {
  const drawers = {
    cart: elements.cartDrawer,
    wishlist: elements.wishlistDrawer
  };

  Object.values(drawers).forEach((drawer) => drawer.classList.remove("open"));
  if (drawers[drawerName]) drawers[drawerName].classList.add("open");
}

function closeDrawer(drawerName) {
  if (drawerName === "cart") elements.cartDrawer.classList.remove("open");
  if (drawerName === "wishlist") elements.wishlistDrawer.classList.remove("open");
}

function closeAllModals() {
  elements.productModal.classList.add("hidden");
  elements.productModal.setAttribute("aria-hidden", "true");
  elements.sizeGuideModal.classList.add("hidden");
  elements.sizeGuideModal.setAttribute("aria-hidden", "true");
  elements.checkoutModal.classList.add("hidden");
  elements.checkoutModal.setAttribute("aria-hidden", "true");
  elements.confirmationModal.classList.add("hidden");
  elements.confirmationModal.setAttribute("aria-hidden", "true");
  elements.searchModal.classList.add("hidden");
  elements.searchModal.setAttribute("aria-hidden", "true");
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  state.productId = product.id;
  state.selectedSize = product.sizes[2] || product.sizes[0] || null;

  const modal = elements.productModal;
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-topbar">
        <h3>Product details</h3>
        <button type="button" class="close-modal" data-close="product">×</button>
      </div>
      <div class="product-modal-wrap">
        <div class="product-modal-layout">
          <div class="gallery-column">
            <div class="gallery-thumbs">
              ${product.images
                .map(
                  (image, index) => `
                    <button type="button" class="thumb-button ${index === 0 ? "active" : ""}" data-product-thumb="${index}">
                      <img src="${image}" alt="${product.name} view ${index + 1}" />
                    </button>
                  `
                )
                .join("")}
            </div>
            <div class="product-gallery-main">
              <img src="${product.images[0]}" alt="${product.name}" data-main-gallery-image />
            </div>
          </div>

          <div class="product-summary">
            <p class="eyebrow">${product.collection} / ${product.category}</p>
            <h2>${product.name}</h2>
            <div class="product-price">${formatPrice(product.price)}</div>
            <p class="product-description">${product.description}</p>

            <div class="size-block">
              <div class="size-header">
                <h4>Select size</h4>
                <button type="button" class="size-guide-link" data-size-guide>Size guide</button>
              </div>
              <div class="size-options">
                ${product.sizes
                  .map(
                    (size) => `
                      <button type="button" class="size-button ${state.selectedSize === size ? "selected" : ""}" data-size-option="${size}">${size}</button>
                    `
                  )
                  .join("")}
              </div>
              <div class="selected-size-readout">Selected size: ${state.selectedSize || "None"}</div>
            </div>

            <div class="product-actions">
              <button type="button" class="secondary-button" data-wishlist-product="${product.id}">${state.wishlist.includes(product.id) ? "Saved" : "Wishlist"}</button>
              <button type="button" class="primary-button" data-add-detail-cart="${product.id}">Add to Cart →</button>
            </div>

            <div class="meta-grid">
              <div class="meta-card">
                <strong>Shipping</strong>
                <p>Free shipping on orders above ₹1,499.</p>
              </div>
              <div class="meta-card">
                <strong>Returns</strong>
                <p>Easy returns within 7 days for eligible items.</p>
              </div>
              <div class="meta-card">
                <strong>Product details</strong>
                <p>Premium cotton, oversized fit, limited-run drop.</p>
              </div>
              <div class="meta-card">
                <strong>Colors</strong>
                <p>${product.colors.length} colorways available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  const mainImage = modal.querySelector("[data-main-gallery-image]");
  const thumbButtons = modal.querySelectorAll("[data-product-thumb]");
  thumbButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.productThumb);
      mainImage.src = product.images[index];
      thumbButtons.forEach((item) => item.classList.toggle("active", item === button));
    });
  });

  modal.querySelectorAll("[data-size-option]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSize = button.dataset.sizeOption;
      modal.querySelector(".selected-size-readout").textContent = `Selected size: ${state.selectedSize}`;
      modal.querySelectorAll(".size-button").forEach((sizeButton) => {
        sizeButton.classList.toggle("selected", sizeButton === button);
      });
    });
  });

  modal.querySelector("[data-size-guide]").addEventListener("click", () => {
    elements.sizeGuideModal.classList.remove("hidden");
    elements.sizeGuideModal.setAttribute("aria-hidden", "false");
  });

  modal.querySelector("[data-wishlist-product]").addEventListener("click", () => {
    toggleWishlist(product.id);
    openProductModal(product.id);
  });

  modal.querySelector("[data-add-detail-cart]").addEventListener("click", () => {
    addProductToCart(product.id, state.selectedSize, 1);
  });

  modal.querySelector("[data-close='product']").addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  });
}

function openSearchModal() {
  elements.searchModal.classList.remove("hidden");
  elements.searchModal.setAttribute("aria-hidden", "false");
  elements.searchModalInput.value = state.searchQuery;
  updateSearchResults();
}

function updateSearchResults() {
  const query = elements.searchModalInput.value.trim().toLowerCase();
  const matches = products.filter((product) => {
    const haystack = [product.name, product.category, product.color, product.collection].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  if (!matches.length) {
    elements.searchResults.innerHTML = '<div class="empty-drawer">No products found.</div>';
    return;
  }

  elements.searchResults.innerHTML = matches
    .slice(0, 6)
    .map(
      (product) => `
        <button type="button" class="search-result-item" data-search-product="${product.id}">
          <strong>${product.name}</strong>
          <span>${product.collection}</span>
        </button>
      `
    )
    .join("");
}

function addProductToCart(productId, size, quantity) {
  const product = getProductById(productId);
  if (!product) return;

  if (product.sizes && product.sizes.length && !size) {
    showToast("Please select a size");
    return;
  }

  const existingItem = state.cart.find((item) => item.id === product.id && item.size === size);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    state.cart.push({ ...product, quantity, size: size || product.sizes[0] || "M" });
  }

  saveCart();
  updateCartCount();
  renderCartDrawer();
  showToast("Added to cart");
}

function changeCartQuantity(index, direction) {
  const item = state.cart[index];
  if (!item) return;

  item.quantity += direction;
  if (item.quantity <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  updateCartCount();
  renderCartDrawer();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCartDrawer();
}

function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    state.wishlist.push(productId);
    showToast("Added to wishlist");
  }

  saveWishlist();
  renderProducts();
  renderWishlistDrawer();
}

function renderCheckoutSummary() {
  const summary = getCartSummary();
  const items = state.cart.map(
    (item) => `
      <div class="checkout-summary-item">
        <span>${item.name} × ${item.quantity}</span>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
    `
  );

  elements.checkoutCartSummary.innerHTML = items.join("") || '<div class="empty-drawer">Your cart is empty.</div>';
  elements.checkoutOrderSummary.innerHTML = `
    ${items.join("") || '<div class="empty-drawer">Your cart is empty.</div>'}
    <div class="checkout-summary-item"><span>Subtotal</span><strong>${formatPrice(summary.subtotal)}</strong></div>
    <div class="checkout-summary-item"><span>Shipping</span><strong>${formatPrice(summary.shipping)}</strong></div>
    <div class="checkout-summary-item"><span>Total</span><strong>${formatPrice(summary.total)}</strong></div>
  `;
}

function openCheckout() {
  if (!state.cart.length) {
    showToast("Your cart is empty");
    return;
  }
  renderCheckoutSummary();
  state.checkoutStep = 1;
  updateCheckoutStep();
  elements.checkoutModal.classList.remove("hidden");
  elements.checkoutModal.setAttribute("aria-hidden", "false");
}

function updateCheckoutStep() {
  const panels = [...document.querySelectorAll(".checkout-panel")];
  panels.forEach((panel) => {
    panel.classList.toggle("active", Number(panel.dataset.step) === state.checkoutStep);
  });

  const dots = [...document.querySelectorAll(".step-dot")];
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index + 1 === state.checkoutStep);
  });

  elements.checkoutPrev.style.visibility = state.checkoutStep === 1 ? "hidden" : "visible";
  elements.checkoutNext.textContent = state.checkoutStep === 5 ? "PLACE ORDER →" : "NEXT →";
}

function validateCheckoutForm(step) {
  const panel = document.querySelector(`.checkout-panel[data-step="${step}"]`);
  const requiredInputs = [...panel.querySelectorAll("input")];

  for (const input of requiredInputs) {
    if (!input.value.trim()) {
      input.focus();
      showToast("Please complete all required fields");
      return false;
    }
  }

  return true;
}

function submitOrder() {
  const form = document.getElementById("checkoutForm");
  const formData = new FormData(form);

  const customer = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    state: formData.get("state"),
    pin: formData.get("pin")
  };

  state.order = {
    orderNumber: `ZV-${Math.floor(100000 + Math.random() * 900000)}`,
    customer,
    items: [...state.cart],
    shippingAddress: `${customer.address}, ${customer.city}, ${customer.state} ${customer.pin}`,
    subtotal: getCartSummary().subtotal,
    shipping: getCartSummary().shipping,
    total: getCartSummary().total
  };

  const confirmationMarkup = `
    <div class="confirmation-box">
      <p><strong>Order number:</strong> ${state.order.orderNumber}</p>
      <p><strong>Customer:</strong> ${customer.fullName}</p>
      <p><strong>Items:</strong> ${state.cart.map((item) => `${item.name} (${item.size})`).join(", ")}</p>
      <p><strong>Subtotal:</strong> ${formatPrice(state.order.subtotal)}</p>
      <p><strong>Shipping:</strong> ${formatPrice(state.order.shipping)}</p>
      <p><strong>Total:</strong> ${formatPrice(state.order.total)}</p>
      <p><strong>Shipping address:</strong> ${state.order.shippingAddress}</p>
    </div>
  `;

  elements.confirmationBody.innerHTML = confirmationMarkup;
  elements.checkoutModal.classList.add("hidden");
  elements.checkoutModal.setAttribute("aria-hidden", "true");
  elements.confirmationModal.classList.remove("hidden");
  elements.confirmationModal.setAttribute("aria-hidden", "false");

  state.cart = [];
  localStorage.setItem(cartKey, JSON.stringify(state.cart));
  updateCartCount();
  renderCartDrawer();
  form.reset();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches("[data-close='product']") || target.matches("[data-close='size-guide']") || target.matches("[data-close='checkout']") || target.matches("[data-close='confirmation']") || target.matches("[data-close='search']")) {
      const type = target.dataset.close;
      if (type === "product") elements.productModal.classList.add("hidden");
      if (type === "size-guide") elements.sizeGuideModal.classList.add("hidden");
      if (type === "checkout") elements.checkoutModal.classList.add("hidden");
      if (type === "confirmation") elements.confirmationModal.classList.add("hidden");
      if (type === "search") elements.searchModal.classList.add("hidden");
      return;
    }

    if (target.matches("[data-quick-view]")) {
      openProductModal(Number(target.dataset.quickView));
      return;
    }

    if (target.matches("[data-add-cart]")) {
      addProductToCart(Number(target.dataset.addCart), "M", 1);
      return;
    }

    if (target.matches("[data-wishlist-id]")) {
      toggleWishlist(Number(target.dataset.wishlistId));
      return;
    }

    if (target.matches("[data-remove-wishlist]")) {
      toggleWishlist(Number(target.dataset.removeWishlist));
      return;
    }

    if (target.matches("[data-cart-from-wishlist]")) {
      addProductToCart(Number(target.dataset.cartFromWishlist), "M", 1);
      toggleWishlist(Number(target.dataset.cartFromWishlist));
      return;
    }

    if (target.matches("[data-qty-action]")) {
      const index = Number(target.dataset.index);
      const action = target.dataset.qtyAction;
      changeCartQuantity(index, action === "increase" ? 1 : -1);
      return;
    }

    if (target.matches("[data-remove-index]")) {
      removeCartItem(Number(target.dataset.removeIndex));
      return;
    }

    if (target.matches(".cart-toggle")) {
      openDrawer("cart");
      return;
    }

    if (target.matches("[data-action='wishlist']")) {
      openDrawer("wishlist");
      return;
    }

    if (target.matches("[data-action='search']")) {
      openSearchModal();
      return;
    }

    if (target.matches(".close-drawer")) {
      closeDrawer(target.dataset.close);
      return;
    }

    if (target.matches(".checkout-trigger")) {
      openCheckout();
      return;
    }

    if (target.matches("[data-search-product]")) {
      openProductModal(Number(target.dataset.searchProduct));
      elements.searchModal.classList.add("hidden");
      return;
    }

    if (target.matches(".continue-shopping")) {
      elements.confirmationModal.classList.add("hidden");
      return;
    }
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    renderProducts();
  });

  elements.searchModalInput.addEventListener("input", updateSearchResults);

  elements.sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderProducts();
  });

  [
    elements.categoryFilter,
    elements.priceFilter,
    elements.colorFilter,
    elements.sizeFilter,
    elements.collectionFilter
  ].forEach((field) => {
    field.addEventListener("change", (event) => {
      const { id, value } = event.target;
      state.filterState[id.replace("Filter", "")] = value;
      renderProducts();
    });
  });

  document.querySelector(".reset-filters").addEventListener("click", () => {
    state.filterState = {
      category: "All",
      price: "All",
      color: "All",
      size: "All",
      collection: "All"
    };
    elements.categoryFilter.value = "All";
    elements.priceFilter.value = "All";
    elements.colorFilter.value = "All";
    elements.sizeFilter.value = "All";
    elements.collectionFilter.value = "All";
    renderProducts();
  });

  elements.newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = event.target.querySelector("input[type='email']");
    const email = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      elements.newsletterMessage.textContent = "Please enter a valid email address.";
      elements.newsletterMessage.style.color = "#f8d7da";
      return;
    }

    elements.newsletterMessage.textContent = "Thanks for joining the ZENVY list — your access is confirmed.";
    elements.newsletterMessage.style.color = "#d5f6de";
    event.target.reset();
  });

  elements.checkoutPrev.addEventListener("click", () => {
    if (state.checkoutStep > 1) {
      state.checkoutStep -= 1;
      updateCheckoutStep();
    }
  });

  elements.checkoutNext.addEventListener("click", () => {
    if (state.checkoutStep < 5) {
      if (validateCheckoutForm(state.checkoutStep)) {
        state.checkoutStep += 1;
        updateCheckoutStep();
      }
      return;
    }

    if (validateCheckoutForm(5)) {
      submitOrder();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
      closeDrawer("cart");
      closeDrawer("wishlist");
    }
  });
}

function init() {
  bindEvents();
  renderProducts();
  renderCollections();
  renderCartDrawer();
  renderWishlistDrawer();
  updateCartCount();
  updateCheckoutStep();
}

init();
