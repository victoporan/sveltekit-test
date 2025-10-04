<script>
  import { Heart } from 'lucide-svelte';

  let products = [
    { id: 1, name: "Aurora Solitaire Ring", image: "/images/ring-1.jpg", price: "$49", wished: false },
    { id: 2, name: "Midnight Band", image: "/images/ring-2.jpg", price: "$89", wished: false },
    { id: 3, name: "Silver Horizon Ring", image: "/images/ring-3.jpg", price: "$119", wished: false },
    { id: 4, name: "Starlight Diamond Ring", image: "/images/ring-4.jpg", price: "$69", wished: false },
    { id: 5, name: "Emerald Classic Ring", image: "/images/ring-5.jpg", price: "$109", wished: false },
    { id: 6, name: "Golden Regent Ring", image: "/images/ring-6.jpg", price: "$89", wished: false },
    { id: 7, name: "Gold Majesty Ring", image: "/images/ring-7.jpg", price: "$59", wished: false },
    { id: 8, name: "Royal Classic Ring", image: "/images/ring-8.jpg", price: "$79", wished: false }
  ];


  function sortLowToHigh() {
    products = [...products].sort((a, b) => getPrice(a.price) - getPrice(b.price));
  }

  function sortHighToLow() {
    products = [...products].sort((a, b) => getPrice(b.price) - getPrice(a.price));
  }

  function getPrice(priceStr) {
    return parseFloat(priceStr.replace('$', ''));
  }

</script>

<div class="banner">
  <img src="/images/banner-3.jpg" alt="Ring Banner" class="banner-image" />
  <div class="banner-text">
    <h2>Timeless Elegance</h2>
    <p>Discover our exclusive collection of rings</p>
    <button on:click={() => {
      const el = document.getElementById('rings');
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }}>
      Shop Now
    </button>
  </div>
</div>

<div class="shop-container">
  <aside class="sidebar">
    <h3>Filters</h3>
    <h4>Sort by:</h4>
    <label><input type="checkbox" on:click={sortLowToHigh}/> Price: Low to High</label>
    <label><input type="checkbox" on:click={sortHighToLow}/> Price: High to Low</label>
    <label><input type="checkbox" on:click={sortNewest}/> Newest</label>
    <label><input type="checkbox" on:click={sortRecommended}/> Recommended</label>

    <h4>Color</h4>
    <label><input type="checkbox" /> Gold</label>
    <label><input type="checkbox" /> Silver</label>
    <label><input type="checkbox" /> Bronze</label>
    <label><input type="checkbox" /> White</label>
    <label><input type="checkbox" /> Black</label>
    <label><input type="checkbox" /> Red</label>
    <label><input type="checkbox" /> Blue</label>
    <label><input type="checkbox" /> Green</label>

    <h4>Size</h4>
    <label><input type="checkbox" /> Small</label>
    <label><input type="checkbox" /> Medium</label>
    <label><input type="checkbox" /> Large</label>

    <h4>Stone</h4>
    <label><input type="checkbox" /> Diamond</label>
    <label><input type="checkbox" /> Ruby</label>
    <label><input type="checkbox" /> Sapphire</label>
    <label><input type="checkbox" /> Emerald</label>
    <label><input type="checkbox" /> Topaz</label>
    <label><input type="checkbox" /> Amethyst</label>
    <label><input type="checkbox" /> Pearl</label>
    <label><input type="checkbox" /> Onyx</label>
  </aside>

  <main id="rings" class="products-grid">
    {#each products as product}
      <div class="product-card">
        <button
          class="wishlist-icon"
          on:click={() => toggleWishlist(product)}
          aria-label={product.wished ? "Remove from wishlist" : "Add to wishlist"}>
          <Heart
            size="24"
            stroke="#fff"
            stroke-width="2"
            fill={product.wished ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"}
          />
        </button>

        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button on:click={() => addToCart(product)}>Add to Cart</button>
      </div>
    {/each}
  </main>
</div>

<style>
/* Banner */
.banner {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  max-height: 720px;
  object-fit: cover;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 600px;
  transform: translateY(-50%);
  text-align: left;
  max-width: 400px;
}

.banner-text h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.banner-text p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.banner-text button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #7f7b7b;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.banner-text button:hover {
  background-color: #5a5757;
}

/* Shop container */
.shop-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  padding: 20px;
}

/* Sidebar */
.sidebar h4 {
  margin-bottom: 10px;
}

.sidebar label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  cursor: pointer;
  transition: color 0.2s;
}

.sidebar input[type="checkbox"] {
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.sidebar input[type="checkbox"]:checked {
  background-color: #7f7b7b;
}

/* Products grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product-card {
  position: relative;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  transition: transform 0.2s;
}

.product-card img {
  max-width: 100%;
  border-radius: 8px;
}

.product-card:hover {
  transform: translateY(-5px);
}

.wishlist-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.wishlist-icon:hover {
  transform: scale(1.2);
}

button {
  margin-top: 0;
  padding: 0.5rem 0;
  width: 100%;
  background-color: transparent;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  background-color: #7f7b7b;
  color: #fff;
}

/* Responsive */
/* Tablet */
@media (max-width: 900px) {
  .shop-container {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .banner-text {
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 350px;
    text-align: center;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .sidebar {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px 0;
  }

  .sidebar h4 {
    grid-column: span 2;
  }

  .sidebar label {
    font-size: 0.85rem;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .shop-container {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .banner-text {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    max-width: 90%;
    text-align: center;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .sidebar {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 10px 0;
  }

  .sidebar h4 {
    grid-column: span 2;
  }

  .sidebar label {
    font-size: 0.8rem;
  }

  .banner-text h2 {
    font-size: 1.8rem;
  }

  .banner-text p {
    font-size: 1rem;
  }

  .banner-text button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .wishlist-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
