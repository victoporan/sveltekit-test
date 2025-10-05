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
      if (window.innerWidth >= 1024) {
        isSticky = window.scrollY > offsetTop;
      } else {
        isSticky = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  });
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
        <a href="/collections" class:active={$page.url.pathname.startsWith('/collections')}>Collections ▾</a>
        <div class="dropdown-content">
          <a href="/collections/autumn" class:active={$page.url.pathname === '/collections/autumn'}>Autumn</a>
          <a href="/collections/winter" class:active={$page.url.pathname === '/collections/winter'}>Winter</a>
          <a href="/collections/spring" class:active={$page.url.pathname === '/collections/spring'}>Spring</a>
          <a href="/collections/summer" class:active={$page.url.pathname === '/collections/summer'}>Summer</a>
        </div>
      </div>

      <a href="/products/watches" class:active={$page.url.pathname === '/watches'}>Watches</a>
      <a href="/products/rings" class:active={$page.url.pathname === '/rings'}>Rings</a>
      <a href="/products/bracelets" class:active={$page.url.pathname === '/bracelets'}>Bracelets</a>
      <a href="/products/necklaces" class:active={$page.url.pathname === '/necklaces'}>Necklaces</a>
      <a href="/products/earrings" class:active={$page.url.pathname === '/earrings'}>Earrings</a>
      <a href="/about" class:active={$page.url.pathname === '/about'}>About Us</a>
      <a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>

      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <Search size="20" />
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

/* Header */
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

/* Top Icons */
.top-icons, .social-icons {
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 15px;
}

.top-icons { right: 20px; }
.social-icons { left: 20px; }

.top-icons a, .social-icons a {
  color: #111;
  transition: color 0.3s;
}
.top-icons a:hover, .social-icons a:hover {
  color: rgb(165, 141, 167);
}

/* Nav */
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
.nav-container a:hover, .nav-container a.active {
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

/* Dropdown */
.dropdown {
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #f9f9f9;
  min-width: 180px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  flex-direction: column;
  z-index: 999;
}
.dropdown-content a {
  padding: 10px 15px;
}
.dropdown:hover .dropdown-content {
  display: flex;
}

/* Search */
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

/* Footer */
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

.footer-about, .footer-subscribe {
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

/* Responsive Tablets */
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

  .top-icons, .social-icons {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    position: static;
  }
}

/* Responsive Mobile */
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

  .top-icons, .social-icons {
    display: flex;
    flex-wrap: column;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 0.3rem;
    position: static;
  }
}

</style>