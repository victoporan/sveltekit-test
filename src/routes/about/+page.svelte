<script>
  import { Crown, Sparkles, Star } from 'lucide-svelte';
</script>

<section class="about-us">
  <div class="about-text">
    <h2>About Equinox Jewelry</h2>
    <p>
      At Equinox Jewelry, we craft exquisite pieces with the finest materials,
      combining timeless elegance with modern design. Our collections reflect
      passion, precision, and perfection in every detail.
    </p>
  </div>

  <div class="about-icons">
    <div class="icon-card">
      <Crown size="48" />
      <p>Premium Diamonds</p>
      <p>At Equinox Jewelry, we use only the finest ethically sourced diamonds, selected for their clarity, sparkle, and beauty. Each piece is crafted to showcase the diamond’s natural brilliance, creating jewelry that is both elegant and enduring.</p>
    </div>
    <div class="icon-card">
      <Sparkles size="48" />
      <p>Gold & Precious Metals</p>
      <p>Our jewelry is made with the finest gold, platinum, and sterling silver from trusted ethical sources. Each piece highlights the natural beauty of the metal, creating timeless, luxurious designs that celebrate elegance, durability, and the versatility of precious metals.</p>
    </div>
    <div class="icon-card">
      <Star size="48" />
      <p>Unique Materials</p>
      <p>At Equinox Jewelry, we embrace creativity by using gemstones, enamel, and innovative alloys. These materials add color, texture, and individuality, making each piece unique. Our artisans blend tradition and innovation to craft jewelry that shines with character and timeless appeal.</p>
    </div>
  </div>
</section>

<style>
.about-us {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 2rem;
}

.about-text h2 {
  font-size: 36px;
  margin-bottom: 1rem;
  text-align: center;
}

.about-text p {
  font-size: 18px;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.about-icons {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.icon-card {
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.icon-card h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.icon-card p {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
}
</style>
