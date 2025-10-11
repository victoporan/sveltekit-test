<script>
  import SortAndFilters from '$lib/components/SortAndFilters.svelte';
  import { Heart } from 'lucide-svelte';
  import { formatPrice } from '$lib/helpers/formatters-helpers';

  export let data;

  $: products = data.products;
  $: season = data.season;
  $: title = data.title;



  function toggleWishlist(product) {
      product.wished = !product.wished;
  }

  function addToCart(product) {
      console.log('Adding to cart:', product);
  }
</script>

<h1>{title}</h1>

<div class="shop-container">
  
  <SortAndFilters products={products} />

  <main id="watches" class="products-grid">
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
        <p>{formatPrice(product.price)}</p>
        <button on:click={() => addToCart(product)}>Add to Cart</button>
      </div>
    {/each}
  </main>
</div>

<style>

/* Shop container */
.shop-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  padding: 20px;
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

 

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
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


  .wishlist-icon {
    width: 20px;
    height: 20px;
  }
}
</style>