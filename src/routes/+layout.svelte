<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import logo from '$lib/assets/logo-1.png';
  import { getAllProducts } from '$lib/data/all-products';
  import { Search, Heart, ShoppingCart, User, MapPin, Facebook, Instagram, X } from 'lucide-svelte';

  let isSticky = false;
  let dropdownOpen = false;

  let q = '';
  let showSearch = false;
  let searchResults = [];
  let activeIndex = -1;
  let searchWrap;

  const all = getAllProducts();

  onMount(() => {
    const nav = document.querySelector('.nav-container');
    const offsetTop = nav.offsetTop;

    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        isSticky = window.scrollY > offsetTop;
      } else {
        isSticky = true;
      }
    };

    const closeOnClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) dropdownOpen = false;
      if (searchWrap && !searchWrap.contains(e.target)) {
        showSearch = false;
        activeIndex = -1;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('click', closeOnClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('click', closeOnClickOutside);
    };
  });

  function goToSeason(path) {
    dropdownOpen = false;
    goto(path);
  }

  function updateSearch() {
  const v = q.trim().toLowerCase();
  activeIndex = -1;

  if (v.length === 0) {
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    searchResults = shuffled.slice(0, 8);
    showSearch = searchResults.length > 0;
    return;
  }

  if (v.length < 2) {
    searchResults = [];
    showSearch = false;
    return;
  }

  searchResults = all
    .filter((p) => (p.name || '').toLowerCase().includes(v))
    .slice(0, 8);

  showSearch = searchResults.length > 0;
}

  async function pick(p) {
  const types = new Set(['watches', 'rings', 'bracelets', 'necklaces', 'earrings']);

  const target = types.has(p.group)
    ? `/products/${p.group}/${p.id}`
    : `/collection/${p.group}/${p.id}`;

  q = '';
  showSearch = false;
  activeIndex = -1;

  await goto(target, { invalidateAll: true, noScroll: true });
}

  function submitSearch() {
    const v = q.trim();
    if (!v) return;
    showSearch = false;
    activeIndex = -1;
    goto(`/search?q=${encodeURIComponent(v)}`);
  }

  function onSearchKeydown(e) {
    if (e.key === 'Escape') {
      showSearch = false;
      activeIndex = -1;
      return;
    }

    if (!showSearch) {
      if (e.key === 'Enter') submitSearch();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, searchResults.length - 1);
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && searchResults[activeIndex]) pick(searchResults[activeIndex]);
      else submitSearch();
    }
  }
</script>

<header>
  <div class="header-container">
    <a href="/">
      <img src={logo} alt="Equinox Jewelry Logo" class="logo" />
    </a>

    <div class="top-icons">
      <a href="/wishlist" title="Wishlist"><Heart size="20" /></a>
      <a href="/cart" title="My Cart"><ShoppingCart size="20" /></a>
      <a href="/account" title="My Account"><User size="20" /></a>
      <a href="/stores" title="Find a Boutique"><MapPin size="20" /></a>
    </div>

    <div class="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size="20" /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size="20" /></a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer"><X size="20" /></a>
    </div>

    <nav class="nav-container {isSticky ? 'sticky' : ''}">
      <a href="/" class:active={$page.url.pathname === '/'}>Home</a>

      <div class="dropdown">
        <a
          href="/collection"
          class:active={$page.url.pathname.startsWith('/collection')}
          on:click|preventDefault|stopPropagation={() => {
            dropdownOpen = !dropdownOpen;
            if (!dropdownOpen) goto('/collection');
          }}
        >
          Collections ▾
        </a>

        {#if dropdownOpen}
        <div class="dropdown-content">
          <a href="/collection/autumn" on:click|preventDefault={() => goToSeason('/collection/autumn')} class:active={$page.url.pathname === '/collection/autumn'}>Autumn</a>
          <a href="/collection/winter" on:click|preventDefault={() => goToSeason('/collection/winter')} class:active={$page.url.pathname === '/collection/winter'}>Winter</a>
          <a href="/collection/spring" on:click|preventDefault={() => goToSeason('/collection/spring')} class:active={$page.url.pathname === '/collection/spring'}>Spring</a>
          <a href="/collection/summer" on:click|preventDefault={() => goToSeason('/collection/summer')} class:active={$page.url.pathname === '/collection/summer'}>Summer</a>
        </div>
        {/if}
      </div>

      <a href="/products/watches" class:active={$page.url.pathname === '/watches'}>Watches</a>
      <a href="/products/rings" class:active={$page.url.pathname === '/rings'}>Rings</a>
      <a href="/products/bracelets" class:active={$page.url.pathname === '/bracelets'}>Bracelets</a>
      <a href="/products/necklaces" class:active={$page.url.pathname === '/necklaces'}>Necklaces</a>
      <a href="/products/earrings" class:active={$page.url.pathname === '/earrings'}>Earrings</a>
      <a href="/about" class:active={$page.url.pathname === '/about'}>About Us</a>
      <a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>

      <div class="search-wrap" bind:this={searchWrap}>
        <div class="search-box">
          <input
            type="text"
            placeholder="Search..."
            bind:value={q}
            on:input={updateSearch}
            on:focus={updateSearch}
            on:keydown={onSearchKeydown}
            autocomplete="off"
          />
          <button type="button" class="search-btn" on:click={submitSearch} aria-label="Search">
            <Search size="20" />
          </button>
        </div>

        {#if showSearch}
          <div class="search-dropdown" role="listbox">
            {#each searchResults as p, i}
              <button
                type="button"
                class="search-item"
                class:active={i === activeIndex}
                on:pointerdown|preventDefault={() => pick(p)}
                role="option"
                aria-selected={i === activeIndex}
              >
                <img src={p.image} alt={p.name} />
                <div class="search-txt">
                  <div class="name">{p.name}</div>
                  <div class="meta">{p.group}</div>
                </div>
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </nav>
  </div>
</header>

<main>
  <slot />
</main>

<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-about">
      <h4>About Equinox Jewelry</h4>
      <p>Equinox Jewelry creates timeless pieces that blend elegance and modern design. Follow us on social media for updates and new collections.</p>
    </div>

    <div class="footer-subscribe">
      <h4>Subscribe to our newsletter</h4>
      <form class="subscribe-form" on:submit|preventDefault={() => console.log('Subscribed!')}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Equinox Jewelry. All rights reserved.</p>
  </div>
</footer>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Imperial URW', sans-serif;
  }

  header {
    width: 100%;
    background-color: #e4e1e1;
    border-bottom: 1px solid #ccc;
    position: relative;
    z-index: 100;
  }

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .logo {
    height: 60px;
    margin-bottom: 1rem;
  }

  .top-icons,
  .social-icons {
    display: flex;
    gap: 1rem;
    position: absolute;
    top: 15px;
  }

  .top-icons {
    right: 20px;
  }
  .social-icons {
    left: 20px;
  }

  .top-icons a,
  .social-icons a {
    color: #111;
    transition: color 0.3s;
  }
  .top-icons a:hover,
  .social-icons a:hover {
    color: rgb(165, 141, 167);
  }

  .nav-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 0;
    background-color: inherit;
    transition: all 0.3s ease;
  }

  .nav-container a {
    text-decoration: none;
    color: #111;
    font-weight: 500;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
  }

  .nav-container a:hover,
  .nav-container a.active {
    color: rgb(168, 163, 169);
    border-bottom: 2px solid rgb(96, 85, 92);
  }

  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #e4e1e1;
    border-bottom: 1px solid #ccc;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    background: #f9f9f9;
    min-width: 180px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    z-index: 999;
  }

  .dropdown-content a {
    padding: 10px 15px;
  }

  .search-wrap {
    position: relative;
  }

  .search-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    margin-left: 1rem;
    background: transparent;
  }

  .search-btn {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: inherit;
  }

  .search-box input {
    border: none;
    outline: none;
    font-size: 0.9rem;
    background: transparent;
    color: #111;
  }

  .search-box input::placeholder {
    color: #555;
  }

  .search-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: min(420px, 92vw);
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    z-index: 2000;
  }

  .search-item {
    width: 100%;
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 10px;
    align-items: center;
    padding: 10px 12px;
    background: #fff;
    border: none;
    text-align: left;
    cursor: pointer;
  }

  .search-item:hover,
  .search-item.active {
    background: #f4f4f4;
  }

  .search-item img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    object-fit: cover;
  }

  .search-txt .name {
    font-weight: 600;
    font-size: 14px;
  }

  .search-txt .meta {
    font-size: 11px;
    opacity: 0.65;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .site-footer {
    background-color: #e4e1e1;
    padding: 30px 20px 15px 20px;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
  }

  .footer-about,
  .footer-subscribe {
    flex: 1 1 300px;
  }

  .subscribe-form {
    display: flex;
    gap: 0.5rem;
  }

  .subscribe-form input {
    padding: 0.6rem 1rem;
    border: 1px solid #000;
    border-radius: 25px;
    flex: 1;
  }

  .subscribe-form button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 25px;
    background: #fff;
    color: #111;
    cursor: pointer;
    transition: 0.3s;
  }

  .subscribe-form button:hover {
    background: #ccc;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }

  @media (max-width: 1023px) and (min-width: 601px) {
    .header-container {
      padding: 0.5rem 1rem;
      flex-direction: column;
      align-items: center;
    }

    .logo {
      height: 55px;
      margin-bottom: 0.5rem;
    }

    .nav-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.3rem 0;
      width: 100%;
    }

    .nav-container a {
      font-size: 0.9rem;
      padding: 0.3rem 0.5rem;
      text-align: center;
      flex: 1 1 auto;
    }

    .nav-container.sticky {
      position: static;
      top: auto;
      left: auto;
      width: 100%;
      background-color: #e4e1e1;
      padding: 0.3rem 0;
    }

    .top-icons,
    .social-icons {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      position: static;
    }
  }

  @media (max-width: 600px) {
    .header-container {
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
    }

    .logo {
      height: 50px;
      margin-bottom: 0.3rem;
    }

    .nav-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.3rem;
      padding: 0.3rem 0;
      width: 100%;
    }

    .nav-container a {
      font-size: 0.85rem;
      padding: 0.3rem 0.5rem;
      text-align: center;
      flex: 1 1 auto;
    }

    .nav-container.sticky {
      position: static;
      top: auto;
      left: auto;
      width: 100%;
      background-color: #e4e1e1;
      padding: 0.3rem 0;
    }

    .top-icons,
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 0.3rem;
      margin-bottom: 0.3rem;
      position: static;
      flex-wrap: wrap;
    }
  }
</style>