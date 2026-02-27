<script>
    export let data;
  
    let qty = 1;
    let color = 'Gold';
  
    const product = data.product;
  
    function addToCart() {
      console.log('Add to cart:', { product, qty, color });
    }
  </script>
  
  <div class="page">
    <div class="left">
      <img src={product.image} alt={product.name} />
    </div>
  
    <div class="right">
      <h1>{product.name}</h1>
      <p class="price">${product.price}</p>
  
      <div class="row">
        <label>Color</label>
        <select bind:value={color}>
          <option>Gold</option>
          <option>Silver</option>
          <option>Bronze</option>
          <option>Black</option>
          <option>White</option>
        </select>
      </div>
  
      <div class="row">
        <label>Quantity</label>
        <div class="qty">
          <button type="button" on:click={() => qty = Math.max(1, qty - 1)}>-</button>
          <input type="number" min="1" bind:value={qty} />
          <button type="button" on:click={() => qty = qty + 1}>+</button>
        </div>
      </div>
  
      <button class="cta" on:click={addToCart}>Add to Cart</button>
    </div>
  </div>
  
  <style>
    .page {
      max-width: 1200px;
      margin: 30px auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 40px;
    }
  
    .left img {
      width: 100%;
      border-radius: 14px;
    }
  
    .price {
      font-size: 22px;
      margin-bottom: 20px;
    }
  
    .row {
      margin: 18px 0;
      display: grid;
      gap: 8px;
    }
  
    .qty {
      display: grid;
      grid-template-columns: 44px 1fr 44px;
      gap: 8px;
      max-width: 220px;
    }
  
    .cta {
      margin-top: 16px;
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 12px;
      background: #7f7b7b;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
    }
  
    @media (max-width: 900px) {
      .page {
        grid-template-columns: 1fr;
      }
    }
  </style>