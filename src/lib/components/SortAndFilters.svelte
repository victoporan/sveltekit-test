<script>
    export let products;

    import { sortLowToHigh, sortHighToLow, sortNewest, sortRecommended } from '$lib/helpers/sort-and-filters-helpers';
</script>

<aside class="sidebar">
    <h3>Filters</h3>
    <h4>Sort by:</h4>
    <label><input type="radio" name="sort" on:click={(e) => { products = sortLowToHigh(products)}}/> Price: Low to High</label>
    <label><input type="radio" name="sort" on:click={(e) => { products = sortHighToLow(products)}}/> Price: High to Low</label>
    <label><input type="radio" name="sort" on:click={(e) => { products = sortNewest(products)}}/> Newest</label>
    <label><input type="radio" name="sort" on:click={(e) => { products = sortRecommended(products)}}/> Recommended</label>

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


  <style>

    
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
    
    
    /* Responsive */
    /* Tablet */
    @media (max-width: 900px) {
    
    
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
    
    }
    </style>
    