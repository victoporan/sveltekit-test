<div class="banner">
  <img src="/images/banner-1.png" alt="Equinox Banner" />

  <a href="/collections/autumn" class="banner-btn">
    Explore Autumn Collection
  </a>
</div>

<h1>Welcome to Equinox Jewelry</h1>
<p>Discover our exquisite jewelry collections.</p>

<section class="featured">
  <div class="card">
    <img src="/images/ring.jpg" alt="Ring" />
    <h3>Diamond Rings</h3>
  </div>
  <div class="card">
    <img src="/images/necklace.jpg" alt="Necklace" />
    <h3>Elegant Necklaces</h3>
  </div>
  <div class="card">
    <img src="/images/bracelet.jpg" alt="Bracelet" />
    <h3>Luxury Bracelets</h3>
  </div>
</section>

<style>
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .featured {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .card {
    flex: 1 1 250px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    transition: transform 0.2s;
  }

  .card img {
    width: 100%;
    border-radius: 10px;
  }

  .card:hover {
    transform: translateY(-5px);
  }

.banner {
  position: relative;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.banner img {
  width: 200%;
  max-width: 2000px;
  height: auto;
  display: block;
}
.banner-btn {
  position: absolute;
  bottom: 100px; 
  left: 50%;
  transform: translateX(-50%);
  padding: 1.5rem 5.5rem; 
  background-color: rgba(255, 255, 255, 0.37);
  color: #111;
  border: 2px solid #111;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: all 0.3s;
}

.banner-btn:hover {
  background-color: #111; 
  color: #fff; 
  border-color: #111;
}

</style>
