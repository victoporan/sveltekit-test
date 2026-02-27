<script>
  import SortAndFilters from '$lib/components/SortAndFilters.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { getAllProducts } from '$lib/data/all-products';

  const all = getAllProducts();

  $: season = $page.params.season;

  $: base = all.filter((p) => p.group === season);

  let products = [];
  $: products = base;

  function openProduct(p) {
    goto(`/collection/${season}/${p.id}`);
  }
</script>

<h2>{season.toUpperCase()} COLLECTION</h2>

{#if base.length === 0}
  <p style="text-align:center; margin-top: 20px;">
    No products found for this season.
  </p>
{:else}
  <div class="wrap">
    <!-- Sidebar filters -->
    <SortAndFilters bind:products />

    <!-- Products grid -->
    <div class="grid">
      {#each products as p}
        <button type="button" class="card" on:click={() => openProduct(p)}>
          <img src={p.image} alt={p.name} />
          <div class="name">{p.name}</div>
          <div class="price">${p.price}</div>
        </button>
      {/each}
    </div>
  </div>
{/if}

<style>
  h2 {
    font-size: 28px;
    margin: 30px 0;
    text-align: center;
  }

  .wrap {
    max-width: 1800px;
    margin: 0 auto 40px;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 24px;
    align-items: start;
  }

  .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1023px) {
    .wrap {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  .card {
    text-align: left;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 12px;
    background: #fff;
    box-shadow: 0 0 0 1px #eee;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.12);
  }

  .card img {
    width: 100%;
    border-radius: 10px;
    display: block;
    margin-bottom: 10px;
  }

  .name {
    font-weight: 700;
    margin-bottom: 6px;
  }

  .price {
    opacity: 0.8;
  }
</style>