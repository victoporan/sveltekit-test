<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import logo from '$lib/assets/logo-1.png';
  import { Search, Heart, ShoppingCart, User, MapPin, Facebook, Instagram, X } from 'lucide-svelte';

  let isSticky = false;

  onMount(() => {
    const nav = document.querySelector('.nav-container');
    const offsetTop = nav.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > offsetTop) {
        isSticky = true;
      } else {
        isSticky = false;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header>
  <div class="header-container">
    <img src={logo} alt="Equinox Jewelry Logo" class="logo" />

    <div class="nav-wrapper">
      <nav class="nav-container {isSticky ? 'sticky' : ''}">
        <a href="/" class:active={$page.url.pathname === '/'}>Home</a>

        <div class="dropdown">
          <a href="/collections" class:active={$page.url.pathname.startsWith('/collections')}>Collections ▾</a>
          <div class="dropdown-content">
            <a href="/collections/autumn" class:active={$page.url.pathname === '/collections/autumn'}>Autumn</a>
            <a href="/collections/winter" class:active={$page.url.pathname === '/collections/winter'}>Winter</a>
            <a href="/collections/spring" class:active={$page.url.pathname === '/collections/spring'}>Spring</a>
            <a href="/collections/summer" class:active={$page.url.pathname === '/collections/summer'}>Summer</a>
          </div>
        </div>

        <a href="/watches" class:active={$page.url.pathname === '/watches'}>Watches</a>
        <a href="/rings" class:active={$page.url.pathname === '/rings'}>Rings</a>
        <a href="/bracelets" class:active={$page.url.pathname === '/bracelets'}>Bracelets</a>
        <a href="/necklaces" class:active={$page.url.pathname === '/necklaces'}>Necklaces</a>
        <a href="/earrings" class:active={$page.url.pathname === '/earrings'}>Earrings</a>
        <a href="/about" class:active={$page.url.pathname === '/about'}>About Us</a>
        <a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
      </nav>

	  <div class="search-box">
        <input type="text" placeholder="Search..." />
        <Search size="20" />
      </div>
    </div>
  </div>

	<div class="social-icons">
	  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"><Facebook size="20" /></a>
	  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram size="20" /></a>
	  <a href="https://x.com" target="_blank" rel="noopener noreferrer" title="X"><X size="20" /></a>
	</div>

	<div class="top-icons">
	  <a href="/wishlist" title="Wishlist"><Heart size="20" /></a>
	  <a href="/cart" title="My Cart"><ShoppingCart size="20" /></a>
	  <a href="/account" title="My Account"><User size="20" /></a>
	  <a href="/stores" title="Find a Boutique"><MapPin size="20" /></a>
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
  @font-face {
    font-family: 'Imperial URW';
    src: url('/fonts/imperial-urw.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  :global(body) {
    font-family: 'Imperial URW', sans-serif;
  }
  
:globa(body) {
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  background-color: #e4e1e1;
  border-bottom: 1px solid #ccc;
  position: relative;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.top-icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  position: absolute;
  top: 20%;         
  transform: translateY(-50%);
  right: 40px;           
  display: flex;
  gap: 1rem;
}

.top-icons a {
  color: #111;
  text-decoration: none;
  transition: color 0.3s;
}

.top-icons a:hover {
  color: rgb(165, 141, 167);
}

:global(.top-row) {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.social-icons {
  position: absolute;
  top: 20%;           
  transform: translateY(-50%);
  left: 2%;          
  display: flex;
  gap: 0rem;
}

.social-icons a {
  margin-right: 1rem;
  color: #111;
  transition: color 0.3s;

}

.social-icons a:hover {
  color: rgb(165, 141, 167);
}

.logo {
  height: 60px;
  margin-bottom: 1rem;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  min-width: 180px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 999;
  flex-direction: column;
}

.dropdown-content a {
  padding: 10px 15px;
  text-decoration: none;
  color: #111;
  display: block;
  transition: background 0.2s;
}

.dropdown-content a:hover {
  background-color: #e4e1e1;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

.nav-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0;
  background-color: inherit;
  transition: all 0.3s ease;
}

.search-box {
  position: absolute;
  right: 2%;
  top: 75%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 3.5rem;
  border: 1px solid #ccc;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background-color: transparent;
}

.search-box input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  background-color: transparent;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: #e4e1e1;
}

.nav-container a {
  text-decoration: none;
  color: #111;
  font-weight: 500;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.3s, border-bottom 0.3s;
}

.nav-container a:hover {
  color: rgb(168, 163, 169);
  border-bottom: 2px solid rgb(96, 85, 92);
}

.nav-container a.active {
  color: rgb(168, 163, 169);
  border-bottom: 2px solid rgb(96, 85, 92);
}

.site-footer {
  background-color: #e4e1e1;
  padding: 40px 20px 20px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  gap: 40px;
}

.subscribe-form {
  display: flex;
  gap: 0.5rem;
}

.subscribe-form input {
  padding: 0.7rem 1rem;
  border: 1px solid #000000;
  border-radius: 25px;
  background: transparent;
  font-family: 'Imperial URW', serif;
  width: 250px;
}

.subscribe-form button {
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: #fff;
  color: #111;
  font-weight: 600;
  font-family: 'Imperial URW', serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-form button:hover {
  background: #ccc;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
}
main {
  padding: 0rem;
}
</style>
