<script>
  import { onMount } from "svelte";

  let showModal = false;
  let modalImg = "";
  let modalTitle = "";

  function openModal(img, title) {
    modalImg = img;
    modalTitle = title;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  let featuredCards = [];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    featuredCards.forEach((card) => observer.observe(card));
  });
</script>

<div class="banner">
  <img src="/images/banner-1.png" alt="Equinox Banner" />
  <a href="/collection/autumn" class="banner-btn">Explore Autumn Collection</a>
</div>

<section class="intro">
  <h1>Welcome to Equinox Jewelry</h1>
  <p>Discover our exquisite jewelry collections.</p>
</section>

<section class="intro-him-her">
  <h2>Jewelry for Her</h2>
</section>

<section class="featured">
  <button class="card" on:click={() => openModal("/images/home-1.jpg", "Splendor")}>
    <img src="/images/home-1.jpg" alt="Ring" />
    <h3>Splendor</h3>
  </button>
  <button class="card" on:click={() => openModal("/images/home-2.jpg", "Elegance")}>
    <img src="/images/home-2.jpg" alt="Necklace" />
    <h3>Elegance</h3>
  </button>
  <button class="card" on:click={() => openModal("/images/home-3.jpg", "Luxury")}>
    <img src="/images/home-3.jpg" alt="Bracelet" />
    <h3>Luxury</h3>
  </button>
  <button class="card" on:click={() => openModal("/images/home-4.jpg", "Brilliance")}>
    <img src="/images/home-4.jpg" alt="Bracelet" />
    <h3>Brilliance</h3>
  </button>
</section>

<section class="intro-him-her">
  <h2>Jewelry for Him</h2>
</section>

<section class="featured">
  <button class="card" on:click={() => openModal("/images/home2-1.jpg", "Valor")}>
    <img src="/images/home2-1.jpg" alt="Ring" />
    <h3>Valor</h3>
  </button>
  <button class="card" on:click={() => openModal("/images/home2-2.jpg", "Prestige")}>
    <img src="/images/home2-2.jpg" alt="Necklace" />
    <h3>Prestige</h3>
  </button>
  <button class="card" on:click={() => openModal("/images/home2-3.jpg", "Edge")}>
    <img src="/images/home2-3.jpg" alt="Bracelet" />
    <h3>Edge</h3>
  </button>
  <button class="card" on:click={() => openModal("/images/home2-4.jpg", "Rafinement")}>
    <img src="/images/home2-4.jpg" alt="Bracelet" />
    <h3>Rafinement</h3>
  </button>
</section>

<section class="text-box">
  <div class="container">
    <h2>Our Promise</h2>
    <p>
      At Equinox Jewelry, we create pieces that capture timeless elegance.
      Every ring, necklace, and bracelet is crafted with precision and care, using only the finest materials.
      Our collections are designed to reflect your unique style and to make every moment unforgettable.
      Explore our range to find the perfect accessory that resonates with your personality and taste.
    </p>
  </div>
</section>

<div class="banner bottom-banner">
  <img src="/images/footer-1.png" alt="Spring Collection" />
  <a href="/collection/spring" class="banner-btn">Explore Spring Collection</a>
</div>

{#if showModal}
  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    tabindex="0"
    on:click={closeModal}
    on:keydown={(e) => e.key === "Escape" && closeModal()}
  >
    <div class="modal-content" role="presentation" on:click|stopPropagation>
      <button class="close" on:click={closeModal} aria-label="Close modal">&times;</button>
      <img src={modalImg} alt={modalTitle} />
      <h2>{modalTitle}</h2>
    </div>
  </div>
{/if}

<style>
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  .banner {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .banner img {
    width: 100%;
    height: auto;
    display: block;
  }

  .banner-btn {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 3rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid #111;
    color: #111;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
    z-index: 2;
  }

  .banner-btn:hover {
    background-color: #111;
    color: #fff;
  }

  .intro {
    width: 100%;
    padding: 60px 10%;
    text-align: center;
    box-sizing: border-box;
  }

  .intro h1 {
    font-size: clamp(28px, 5vw, 42px);
    margin-bottom: 15px;
  }

  .intro p {
    font-size: clamp(16px, 2.5vw, 20px);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .intro-him-her {
    padding: 0 10%;
    text-align: center;
  }

  .featured {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px 10%;
  }

  button.card {
    flex: 1 1 250px;
    max-width: 300px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 15px;
    cursor: pointer;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    -webkit-appearance: none;
    appearance: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }

  button.card img {
    width: 100%;
    display: block;
    margin: 0 auto 15px;
    border-radius: 10px;
  }

  button.card h3 {
    font-size: 1.2rem;
    margin: 0;
  }

  .text-box {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background: #f4f4f4;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .text-box h2 {
    font-size: clamp(22px, 3vw, 32px);
    margin-bottom: 15px;
  }

  .text-box p {
    font-size: clamp(14px, 2vw, 18px);
    line-height: 1.6;
  }

  .modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: auto;
    padding: 20px;
  }

  .modal-content {
    position: relative;
    width: min(520px, 100%);
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-content img {
    width: 100%;
    height: auto;
    max-height: 80vh;
    border-radius: 12px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }

  .modal-content h2 {
    color: #fff;
    margin-top: 15px;
    font-size: clamp(18px, 2vw, 24px);
  }

  button.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 28px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .banner {
      min-height: 320px;
    }

    .banner img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right center;
    }

    .banner-btn {
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.8rem 1.2rem;
      font-size: 1rem;
      max-width: calc(100% - 32px);
      text-align: center;
      background-color: rgba(255, 255, 255, 0.75);
    }
  }

  @media (max-width: 600px) {
    .featured {
      gap: 15px;
    }

    button.card {
      flex: 1 1 90%;
      max-width: 90%;
    }

    .text-box {
      margin: 20px auto;
      padding: 20px;
    }

    .banner {
      min-height: 260px;
    }

    .banner-btn {
      padding: 0.7rem 1rem;
      font-size: 0.95rem;
    }

    .modal {
      padding: 14px;
    }

    .modal-content {
      width: 100%;
    }
  }
</style>
