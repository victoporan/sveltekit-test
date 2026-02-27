<script>
  export let products;

  import {
    sortLowToHigh,
    sortHighToLow,
    sortNewest,
    sortRecommended
  } from '$lib/helpers/sort-and-filters-helpers';

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }

  function close() {
    isOpen = false;
  }

  function sortAndMaybeClose(fn) {
    products = fn(products);
    close();
  }
</script>


<button
  class="filters-toggle"
  type="button"
  aria-expanded={isOpen}
  on:click={toggle}
>
  Filters {isOpen ? '▲' : '▼'}
</button>

<aside class="sidebar" class:is-open={isOpen}>

  <div class="mobile-header">
    <h3>Filters</h3>
    <button class="close-btn" type="button" on:click={close} aria-label="Close filters">✕</button>
  </div>

  <h3 class="desktop-title">Filters</h3>

  <h4>Sort by:</h4>
  <label><input type="radio" name="sort" on:click={() => sortAndMaybeClose(sortLowToHigh)} /> Price: Low to High</label>
  <label><input type="radio" name="sort" on:click={() => sortAndMaybeClose(sortHighToLow)} /> Price: High to Low</label>
  <label><input type="radio" name="sort" on:click={() => sortAndMaybeClose(sortNewest)} /> Newest</label>
  <label><input type="radio" name="sort" on:click={() => sortAndMaybeClose(sortRecommended)} /> Recommended</label>

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
  .filters-toggle {
    display: none;
  }

  .mobile-header {
    display: none;
  }

  .desktop-title {
    display: block;
    margin-bottom: 10px;
  }

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

  @media (max-width: 900px) {
    .filters-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 12px 14px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background: #fff;
      cursor: pointer;
      margin-bottom: 12px;
      font-weight: 600;
    }

    .desktop-title {
      display: none;
    }

    .mobile-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      grid-column: span 2;
    }

    .close-btn {
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 8px;
      padding: 6px 10px;
      cursor: pointer;
      width: auto;
    }

    .sidebar {
      display: none;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding: 12px;
      border: 1px solid #eee;
      border-radius: 12px;
      background: #fff;
    }

    .sidebar.is-open {
      display: grid;
    }

    .sidebar h4 {
      grid-column: span 2;
    }

    .sidebar label {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 600px) {
    .sidebar {
      gap: 8px;
    }

    .sidebar label {
      font-size: 0.8rem;
    }
  }
</style>