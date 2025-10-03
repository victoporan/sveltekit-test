<script>
  import { Heart } from 'lucide-svelte';

  let products = [
    { id: 1, name: "Snowflake Necklace ", image: "/images/winter-necklace-1.jpg", price: "$49", wished: false },
    { id: 2, name: "Snowflake Golden Earrings", image: "/images/winter-earrings-2.jpg", price: "$29", wished: false },
    { id: 3, name: "Silver Ring", image: "/images/winter-ring-1.jpg", price: "$29", wished: false },
    { id: 4, name: "Diamond Snowflake Earrings", image: "/images/winter-earrings-1.jpg", price: "$59", wished: false },
    { id: 5, name: "Emerald Necklace", image: "/images/winter-necklace-2.jpg", price: "$39", wished: false },
    { id: 6, name: "Reindeer Golden Necklace", image: "/images/winter-necklace-5.jpg", price: "$39", wished: false },
    { id: 7, name: "Silver&Gold Reindeer Necklece", image: "/images/winter-necklace-3.jpg", price: "$59", wished: false },
    { id: 8, name: "Golden Reindeer Necklece", image: "/images/winter-necklace-4.jpg", price: "$29", wished: false }
  ];

  function addToCart(product) {
    alert(`${product.name} was added to cart!`);
  }

  function toggleWishlist(product) {
    product.wished = !product.wished;
  }
</script>

<div class="shop-container">
  <aside class="sidebar">
    <h3>Filters</h3>
    <h4>Sort by:</h4>
    <label><input type="checkbox" /> Price: Low to High</label><br/>
    <label><input type="checkbox" /> Price: High to Low</label><br/>
    <label><input type="checkbox" /> Newest</label><br/>
    <label><input type="checkbox" /> Recommended</label>

    <h4>Color</h4>
    <label><input type="checkbox" /> Gold</label><br/>
    <label><input type="checkbox" /> Silver</label><br/>
    <label><input type="checkbox" /> Bronze</label><br/>
    <label><input type="checkbox" /> White</label><br/>
    <label><input type="checkbox" /> Black</label><br/>
    <label><input type="checkbox" /> Red</label><br/>
    <label><input type="checkbox" /> Blue</label><br/>
    <label><input type="checkbox" /> Green</label>

    <h4>Size</h4>
    <label><input type="checkbox" /> Small</label><br/>
    <label><input type="checkbox" /> Medium</label><br/>
    <label><input type="checkbox" /> Large</label>

    <h4>Stone</h4>
    <label><input type="checkbox" /> Diamond</label><br/>
    <label><input type="checkbox" /> Ruby</label><br/>
    <label><input type="checkbox" /> Sapphire</label><br/>
    <label><input type="checkbox" /> Emerald</label><br/>
    <label><input type="checkbox" /> Topaz</label><br/>
    <label><input type="checkbox" /> Amethyst</label><br/>
    <label><input type="checkbox" /> Pearl</label><br/>
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

.sidebar h4 {
  margin-bottom: 10px;
}

.sidebar label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: -6px;
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product-card {
  position: relative; /* wishlist */
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
</style>
