const products = [
  {
    id: "arc-headphones",
    name: "Arc wireless headphones",
    category: "Audio",
    price: 129,
    label: "THE DAILY DRIVER",
    tagline: "A little quiet, wherever you find yourself.",
    description: "Rich, balanced sound and a comfortable fit that makes the long way home feel shorter. Thoughtful controls keep the good stuff simple.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    points: ["40-hour battery, with quick charge", "Soft over-ear cushions", "Made with recycled plastic"]
  },
  {
    id: "field-speaker",
    name: "Field portable speaker",
    category: "Audio",
    price: 89,
    label: "GOES EVERYWHERE",
    tagline: "Bring a little atmosphere with you.",
    description: "A compact, weather-ready speaker with a warm sound that fills a room without taking one over. Easy pairing means you're playing in seconds.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    points: ["12-hour playtime", "Splash-resistant design", "USB-C charging"]
  },
  {
    id: "daylight-lamp",
    name: "Daylight desk lamp",
    category: "Desk",
    price: 74,
    label: "A BRIGHT IDEA",
    tagline: "A softer light on the to-do list.",
    description: "A clean, adjustable lamp with warm-to-cool light for long work sessions, slow mornings, and everything in between.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    points: ["Three adjustable light temperatures", "Touch dimmer", "Low-energy LED"]
  },
  {
    id: "orbit-keyboard",
    name: "Orbit wireless keyboard",
    category: "Desk",
    price: 99,
    label: "DESK FAVOURITE",
    tagline: "A satisfying little click, all day long.",
    description: "A beautifully simple wireless keyboard with considered spacing, quiet tactile keys, and the ability to switch between three devices.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    points: ["Pairs with three devices", "Rechargeable USB-C battery", "Comfortable, low-profile keys"]
  },
  {
    id: "pocket-power",
    name: "Pocket power bank",
    category: "Mobile",
    price: 48,
    label: "SMALL BUT MIGHTY",
    tagline: "A little more get-up-and-go.",
    description: "A pocket-sized power boost that keeps your essentials charged without adding much weight to your day.",
    image: "https://images.unsplash.com/photo-1609592806596-b43bada49f79?auto=format&fit=crop&w=900&q=85",
    points: ["10,000 mAh capacity", "Fast USB-C charging", "Recycled aluminum shell"]
  },
  {
    id: "everyday-stand",
    name: "Everyday phone stand",
    category: "Mobile",
    price: 35,
    label: "MADE TO MOVE",
    tagline: "Hands-free, wherever work happens.",
    description: "A sturdy, fold-flat stand that makes video calls and catch-up episodes a little more comfortable, at home or on the move.",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=85",
    points: ["Folds flat for travel", "Adjustable viewing angle", "Fits most phones and cases"]
  },
  {
    id: "glow-bulb",
    name: "Glow smart bulb set",
    category: "Home",
    price: 42,
    label: "SET THE MOOD",
    tagline: "A better kind of switch-up.",
    description: "Easy-to-set-up smart bulbs that let you find the right light for winding down, making dinner, or getting a little more done.",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=900&q=85",
    points: ["Warm-to-cool white light", "Simple app controls", "No hub required"]
  },
  {
    id: "air-clock",
    name: "Air bedside clock",
    category: "Home",
    price: 58,
    label: "SLOW MORNINGS",
    tagline: "Wake up on the brighter side.",
    description: "An uncluttered bedside clock with a soft-glow display, gentle alarm, and brightness that adjusts to the room.",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=85",
    points: ["Auto-dimming display", "Gentle wake-up alarm", "USB-C powered"]
  }
];

const header = document.querySelector("#site-header");
const footer = document.querySelector("#site-footer");
const page = document.body.dataset.page;
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

if (header) {
  header.innerHTML = `
    <div class="announcement"><span>A GOOD TIME TO MAKE A GOOD CHOICE</span><span aria-hidden="true">·</span><a href="shop.html">Meet the shortlist ↗</a></div>
    <header class="site-header">
      <div class="wrap nav-wrap">
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">☰</button>
        <a class="brand" href="index.html" aria-label="Circuit Supply home"><span class="brand-mark">c.</span><span>circuit supply</span></a>
        <nav class="nav-links" id="primary-navigation" aria-label="Main navigation">
          <a href="shop.html" ${page === "shop" ? 'aria-current="page"' : ""}>Shop</a>
          <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""}>Our point of view</a>
          <a href="contact.html" ${page === "contact" ? 'aria-current="page"' : ""}>Say hello</a>
          <form class="nav-search" action="shop.html" method="get" role="search">
            <label class="visually-hidden" for="site-search">Search products</label>
            <input id="site-search" name="q" type="search" placeholder="Search products">
            <button type="submit" aria-label="Search">⌕</button>
          </form>
        </nav>
        <div class="nav-actions"><a href="contact.html">Need a hand?</a><a class="bag-link" href="cart.html" aria-label="Shopping bag, 0 items">Bag <span class="bag-count" data-bag-count>0</span></a></div>
      </div>
    </header>`;
}

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="wrap footer-main">
        <div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark">c.</span><span>circuit supply</span></a><p>Good technology should feel like it belongs. Here's to finding the things that do.</p></div>
        <div class="footer-col"><span class="eyebrow">TAKE A LOOK</span><a href="shop.html">Shop all</a><a href="shop.html?category=Audio">Audio</a><a href="shop.html?category=Desk">Desk</a><a href="shop.html?category=Home">Home</a></div>
        <div class="footer-col"><span class="eyebrow">THE HUMAN STUFF</span><a href="about.html">Our point of view</a><a href="contact.html">Get in touch</a><a href="cart.html">Your bag</a></div>
      </div>
      <div class="wrap footer-bottom"><span>© CIRCUIT SUPPLY · MADE WITH INTENTION</span><span class="footer-bottom-links"><a href="contact.html">Contact</a><a href="shop.html">Shipping & returns</a></span></div>
    </footer>`;
}

function readCart() {
  const saved = localStorage.getItem("circuit-cart");
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new TypeError("Cart data must be a list.");
    return parsed.filter((item) =>
      item && products.some((product) => product.id === item.id) &&
      Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 10
    );
  } catch (error) {
    console.error("Unable to read saved cart data.", error);
    localStorage.removeItem("circuit-cart");
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("circuit-cart", JSON.stringify(cart));
  updateBagCount(cart);
}

function readSavedItems() {
  const saved = localStorage.getItem("circuit-saved");
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new TypeError("Saved items must be a list.");
    return parsed.filter((item) =>
      item && products.some((product) => product.id === item.id) &&
      Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 10
    );
  } catch (error) {
    console.error("Unable to read saved items.", error);
    localStorage.removeItem("circuit-saved");
    return [];
  }
}

function saveSavedItems(items) {
  localStorage.setItem("circuit-saved", JSON.stringify(items));
}

function updateBagCount(cart = readCart()) {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll("[data-bag-count]").forEach((badge) => { badge.textContent = String(count); });
  const bagLink = document.querySelector(".bag-link");
  if (bagLink) bagLink.setAttribute("aria-label", `Shopping bag, ${count} ${count === 1 ? "item" : "items"}`);
  const headingCount = document.querySelector("[data-cart-heading-count]");
  if (headingCount) headingCount.textContent = `(${count})`;
}

function notify(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2800);
}

function productCard(product) {
  const isSaved = readSavedItems().some((item) => item.id === product.id);
  return `<article class="product-card">
    <a class="product-picture" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <span class="product-label">${product.label}</span>
    </a>
    <button class="quick-add" type="button" data-add-to-cart="${product.id}" aria-label="Add ${product.name} to bag"><span>Add to bag</span><span aria-hidden="true">↗</span></button>
    <button class="save-product${isSaved ? " is-saved" : ""}" type="button" data-save-product="${product.id}" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove" : "Save"} ${product.name} ${isSaved ? "from" : "for"} later">${isSaved ? "♥" : "♡"}</button>
    <div class="product-info"><div class="product-meta"><span class="product-category">${product.category}</span><a class="product-name" href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></div><span class="product-price">${money.format(product.price)}</span></div>
  </article>`;
}

document.querySelectorAll("[data-product-grid]").forEach((grid) => {
  const type = grid.dataset.productGrid;
  if (type === "shop") return;
  const limit = Number(grid.dataset.limit) || products.length;
  const selected = type === "related"
    ? products.filter((product) => product.id !== new URLSearchParams(location.search).get("id"))
    : products;
  grid.innerHTML = selected.slice(0, limit).map(productCard).join("");
});

if (page === "shop") {
  const grid = document.querySelector('[data-product-grid="shop"]');
  const count = document.querySelector("[data-product-count]");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const sort = document.querySelector("#sort-products");
  const search = document.querySelector("#shop-search");
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("q") || "";
  if (search) search.value = initialQuery;
  const headerSearch = document.querySelector("#site-search");
  if (headerSearch) headerSearch.value = initialQuery;
  let activeCategory = "All";
  const categoryQuery = searchParams.get("category");
  if (products.some((product) => product.category === categoryQuery)) activeCategory = categoryQuery;

  function renderShop() {
    const query = search?.value.trim().toLocaleLowerCase() || "";
    let visible = products.filter((product) =>
      (activeCategory === "All" || product.category === activeCategory) &&
      (!query || [product.name, product.category, product.tagline, product.description, product.label]
        .some((field) => field.toLocaleLowerCase().includes(query)))
    );
    if (sort.value === "price-low") visible = [...visible].sort((a, b) => a.price - b.price);
    if (sort.value === "price-high") visible = [...visible].sort((a, b) => b.price - a.price);
    if (sort.value === "name") visible = [...visible].sort((a, b) => a.name.localeCompare(b.name));
    grid.innerHTML = visible.length
      ? visible.map(productCard).join("")
      : `<p class="shop-no-results">No matches just yet. Try another name, category, or search.</p>`;
    count.textContent = `${String(visible.length).padStart(2, "0")} ${visible.length === 1 ? "PIECE" : "PIECES"}${query ? ` MATCHING “${search.value.trim()}”` : activeCategory === "All" ? "" : ` IN ${activeCategory.toUpperCase()}`}`;
    filterButtons.forEach((button) => {
      const selected = button.dataset.filter === activeCategory;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  filterButtons.forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    renderShop();
  }));
  sort.addEventListener("change", renderShop);
  search?.addEventListener("input", () => {
    if (headerSearch) headerSearch.value = search.value;
    renderShop();
  });
  renderShop();
}

if (page === "product") {
  const id = new URLSearchParams(location.search).get("id") || products[0].id;
  const product = products.find((item) => item.id === id);
  const detail = document.querySelector("[data-product-detail]");
  if (product) {
    document.title = `${product.name} — Circuit Supply`;
    document.querySelector("[data-product-breadcrumb]").textContent = product.name;
    document.querySelector("[data-detail-image]").src = product.image;
    document.querySelector("[data-detail-image]").alt = product.name;
    document.querySelector("[data-detail-index]").textContent = String(products.indexOf(product) + 1).padStart(2, "0");
    document.querySelector("[data-detail-category]").textContent = `${product.category} / CIRCUIT SHORTLIST`;
    document.querySelector("[data-detail-name]").textContent = product.name;
    document.querySelector("[data-detail-tagline]").textContent = product.tagline;
    document.querySelector("[data-detail-price]").textContent = money.format(product.price);
    document.querySelector("[data-detail-description]").textContent = product.description;
    document.querySelector("[data-detail-points]").innerHTML = product.points.map((point) => `<li>${point}</li>`).join("");
    document.querySelector("[data-add-detail]").dataset.addToCart = product.id;
  } else {
    detail.innerHTML = `<div class="cart-empty"><span class="eyebrow">NOT IN THIS SHORTLIST</span><h2>That one's wandered off.</h2><p>Let's find something good that is still here.</p><a class="button button-dark" href="shop.html">Back to the collection <span aria-hidden="true">↗</span></a></div>`;
    document.querySelector(".related-section")?.remove();
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");
  if (button) {
    const product = products.find((item) => item.id === button.dataset.addToCart);
    if (!product) return;
    const cart = readCart();
    const existing = cart.find((item) => item.id === product.id);
    const requested = button.matches("[data-add-detail]")
      ? Number(document.querySelector("#quantity").value)
      : 1;
    if (!Number.isInteger(requested) || requested < 1 || requested > 10) {
      notify("Choose a quantity between 1 and 10.");
      return;
    }
    if (existing) {
      if (existing.quantity + requested > 10) {
        notify("The limit is 10 of each item.");
        return;
      }
      existing.quantity += requested;
    } else {
      cart.push({ id: product.id, quantity: requested });
    }
    saveCart(cart);
    notify(`${product.name} added to your bag.`);
    return;
  }

  const saveButton = event.target.closest("[data-save-product]");
  if (saveButton) {
    const id = saveButton.dataset.saveProduct;
    const saved = readSavedItems();
    const existing = saved.find((item) => item.id === id);
    if (existing) {
      saveSavedItems(saved.filter((item) => item.id !== id));
      document.querySelectorAll(`[data-save-product="${id}"]`).forEach((button) => {
        button.classList.remove("is-saved");
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", `Save ${products.find((product) => product.id === id).name} for later`);
        button.textContent = "♡";
      });
      notify("Removed from saved items.");
    } else {
      saved.push({ id, quantity: 1 });
      saveSavedItems(saved);
      saveButton.classList.add("is-saved");
      saveButton.setAttribute("aria-pressed", "true");
      saveButton.setAttribute("aria-label", `Remove ${products.find((product) => product.id === id).name} from saved items`);
      saveButton.textContent = "♥";
      notify("Saved for later.");
    }
    return;
  }

  const saveForLaterButton = event.target.closest("[data-save-for-later]");
  if (saveForLaterButton) {
    const id = saveForLaterButton.dataset.saveForLater;
    const cart = readCart();
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;
    const saved = readSavedItems();
    const existing = saved.find((entry) => entry.id === id);
    if (existing && existing.quantity + item.quantity > 10) {
      notify("The saved quantity cannot exceed 10.");
      return;
    }
    if (existing) existing.quantity += item.quantity;
    else saved.push({ ...item });
    saveSavedItems(saved);
    saveCart(cart.filter((entry) => entry.id !== id));
    renderCart();
    notify("Moved to saved for later.");
    return;
  }

  const moveButton = event.target.closest("[data-move-to-cart]");
  if (moveButton) {
    const id = moveButton.dataset.moveToCart;
    const saved = readSavedItems();
    const item = saved.find((entry) => entry.id === id);
    if (!item) return;
    const cart = readCart();
    const existing = cart.find((entry) => entry.id === id);
    if (existing && existing.quantity + item.quantity > 10) {
      notify("The bag quantity cannot exceed 10.");
      return;
    }
    if (existing) existing.quantity += item.quantity;
    else cart.push({ ...item });
    saveCart(cart);
    saveSavedItems(saved.filter((entry) => entry.id !== id));
    renderCart();
    notify("Moved back to your bag.");
    return;
  }

  const removeSavedButton = event.target.closest("[data-remove-saved]");
  if (removeSavedButton) {
    saveSavedItems(readSavedItems().filter((item) => item.id !== removeSavedButton.dataset.removeSaved));
    renderCart();
    notify("Removed from saved items.");
  }
});

function renderCart() {
  const root = document.querySelector("[data-cart-content]");
  if (!root) return;
  const cart = readCart();
  const saved = readSavedItems();
  updateBagCount(cart);
  const subtotal = cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0);
  const shipping = subtotal >= 75 ? 0 : 8;
  const rows = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `<article class="cart-item">
      <img class="cart-item-image" src="${product.image}" alt="">
      <div><span class="cart-item-category">${product.category}</span><a class="cart-item-name" href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a><span class="cart-item-unit-price">${money.format(product.price)} each</span><div class="cart-item-controls"><label class="visually-hidden" for="quantity-${product.id}">Quantity for ${product.name}</label><input id="quantity-${product.id}" data-cart-quantity="${product.id}" type="number" min="1" max="10" value="${item.quantity}"><button class="save-for-later" type="button" data-save-for-later="${product.id}">Save for later</button><button class="remove-item" type="button" data-remove-item="${product.id}">Remove</button></div></div>
      <span class="cart-item-price" aria-label="Line total ${money.format(product.price * item.quantity)}">${money.format(product.price * item.quantity)}</span>
    </article>`;
  }).join("");
  const savedRows = saved.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `<article class="saved-item">
      <img class="saved-item-image" src="${product.image}" alt="">
      <div><span class="cart-item-category">${product.category}</span><a class="cart-item-name" href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a><span class="cart-item-unit-price">${money.format(product.price)} each · Qty ${item.quantity}</span></div>
      <div class="saved-item-actions"><strong>${money.format(product.price * item.quantity)}</strong><button class="saved-move" type="button" data-move-to-cart="${product.id}">Move to bag</button><button class="remove-item" type="button" data-remove-saved="${product.id}">Remove</button></div>
    </article>`;
  }).join("");
  root.innerHTML = `<div class="cart-content-grid"><div class="cart-items">${rows || `<div class="cart-empty"><span class="eyebrow">NOTHING IN HERE (YET)</span><h2>Room for something good.</h2><p>Your considered collection is one click away.</p><a class="button button-dark" href="shop.html">Find your thing <span aria-hidden="true">↗</span></a></div>`}</div>${cart.length ? `<aside class="cart-summary"><h2>The numbers</h2><div class="summary-row"><span>Subtotal</span><span>${money.format(subtotal)}</span></div><div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? "On us" : money.format(shipping)}</span></div><div class="summary-row total"><span>Purchase total</span><span>${money.format(subtotal + shipping)}</span></div><button class="button button-dark" type="button" data-checkout>On to checkout <span aria-hidden="true">↗</span></button><p>Free shipping on orders over $75.</p></aside>` : ""}</div>${saved.length ? `<section class="saved-section"><div class="saved-heading"><div><span class="eyebrow">PARKED FOR LATER</span><h2>Saved for later <span>(${saved.length})</span></h2></div><a class="text-link" href="shop.html">Keep looking <span aria-hidden="true">→</span></a></div><div class="saved-items">${savedRows}</div></section>` : ""}`;
}

if (page === "cart") renderCart();
updateBagCount();

document.addEventListener("change", (event) => {
  const input = event.target.closest("[data-cart-quantity]");
  if (!input) return;
  const quantity = Number(input.value);
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    notify("Choose a quantity between 1 and 10.");
    renderCart();
    return;
  }
  const cart = readCart();
  const item = cart.find((entry) => entry.id === input.dataset.cartQuantity);
  if (item) item.quantity = quantity;
  saveCart(cart);
  renderCart();
});

document.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove-item]");
  if (remove) {
    saveCart(readCart().filter((item) => item.id !== remove.dataset.removeItem));
    renderCart();
    return;
  }
  if (event.target.closest("[data-checkout]")) notify("Checkout isn't connected in this preview yet.");
});

const menuButton = document.querySelector(".menu-toggle");
menuButton?.addEventListener("click", () => {
  const navigation = document.querySelector("#primary-navigation");
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.querySelector(".form-feedback").textContent = "This preview can't send messages just yet. Email us at hello@circuitsupply.example.";
});
