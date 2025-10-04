<script>
  import { Heart } from 'lucide-svelte';

  let products = [
    { id: 1, name: "Crystal Summer Earrings", image: "/images/summer-earrings-3.jpg", price: "$39", wished: false },
    { id: 2, name: "Blue Stone Jewelry", image: "/images/summer-necklaces-1.jpg", price: "$49", wished: false },
    { id: 3, name: "Golden Necklaces", image: "/images/summer-necklaces-2.jpg", price: "$49", wished: false },
    { id: 4, name: "Pearl Necklace", image: "/images/summer-bracelet-1.jpg", price: "$39", wished: false },
    { id: 5, name: "Summer Necklaces", image: "/images/summer-necklaces-3.jpg", price: "$59", wished: false },
    { id: 6, name: "Amber Stone Bracelet", image: "/images/summer-bracelet-2.jpg", price: "$39", wished: false },
    { id: 7, name: "Pearl Earrings", image: "/images/summer-earrings-2.jpg", price: "$29", wished: false },
    { id: 8, name: "Crystal Earrings", image: "/images/summer-earrings-1.jpg", price: "$29", wished: false }
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

  <main class="products-grid">
    {#each products as product}
      <div class="product-card">
        <!-- Wishlist button -->
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
.shop-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  padding: 20px;
}

/* Sidebar */
.sidebar h4 {
  margin-bottom: 10px;
  grid-column: span 2;
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

/* Wishlist button */
.wishlist-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.wishlist-icon:hover {
  transform: scale(1.2);
}

/* Add to cart button */
button {
  margin-top: 0px;
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

  .wishlist-icon {
    width: 20px;
    height: 20px;
  }

  .product-card h3 {
    font-size: 1rem;
  }

  .product-card p {
    font-size: 0.9rem;
  }

  button {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
}
</style>
