<script>
    export let data;
  </script>
  
  <h2>Search Results</h2>
  
  {#if !data.q || data.q.length < 2}
    <p>Type at least 2 characters.</p>
  {:else if data.results.length === 0}
    <p>No results for “{data.q}”.</p>
  {:else}
    <ul class="results">
      {#each data.results as product}
        <li>
          <a href={`${product.route}?pid=${product.id}#p-${product.group}-${product.id}`}>
            <img src={product.image} alt={product.name} />
            <div class="info">
              <strong>{product.name}</strong>
              <span>{product.group}</span>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
  
  <style>
    h2 {
      text-align: center;
      margin: 30px 0;
    }
  
    .results {
      list-style: none;
      padding: 0 20px;
      margin: 0 auto 50px;
      max-width: 900px;
      display: grid;
      gap: 12px;
    }
  
    .results li a {
      display: flex;
      gap: 15px;
      align-items: center;
      text-decoration: none;
      color: inherit;
      border: 1px solid #eee;
      border-radius: 12px;
      padding: 12px;
      background: #fff;
      transition: 0.3s;
    }
  
    .results img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 10px;
    }
  
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  
    .info span {
      font-size: 12px;
      opacity: 0.6;
      text-transform: uppercase;
    }
  </style>