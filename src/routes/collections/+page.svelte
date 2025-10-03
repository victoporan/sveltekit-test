<h2>All Season Collections</h2>

<div class="collections-grid">
  <a href="/collections/autumn" class="collection-card">
    <h4>AUTUMN COLLECTION</h4>
    <img src="/images/autumn-1.jpg" alt="Autumn Collection" />
  </a>

  <a href="/collections/winter" class="collection-card">
    <h4>WINTER COLLECTION</h4>
    <img src="/images/winter-2.jpg" alt="Winter Collection" />
  </a>

  <a href="/collections/spring" class="collection-card">
    <h4>SPRING COLLECTION</h4>
    <img src="/images/spring-2.jpg" alt="Spring Collection" />
  </a>

  <a href="/collections/summer" class="collection-card">
    <h4>SUMMER COLLECTION</h4>
    <img src="/images/summer-2.jpg" alt="Summer Collection" />
  </a>
</div>

<style>
  h2 {
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
  }

  .collections-grid {
    display: grid;
    gap: 20px;
    padding: 0 40px;
    margin: 0 auto;
    max-width: 1800px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1023px) {
    .collections-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    .collections-grid {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
  }

  .collection-card {
    text-align: center;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 15px;
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
    background: #fff;
    box-shadow: 0 0 0 1px #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .collection-card h4 {
    margin: 12px 0;
    font-size: 18px;
    font-weight: 600;
  }

  .collection-card img {
    width: 100%;
    border-radius: 10px;
    margin-top: 5px;
    transition: transform 0.3s ease;
  }

  .collection-card:hover {
    transform: translateY(-6px);
    border-color: transparent;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  .collection-card:hover img {
    transform: scale(1.03);
    outline: 3px solid rgb(96, 85, 92);
    outline-offset: -2px;
  }
</style>
