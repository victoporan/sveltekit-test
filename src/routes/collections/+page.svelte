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
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1800px;
}

.collection-card h4 {
  margin: 10px 0;
  font-size: 18px;
}


.collection-card {
  flex: 1 1 250px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;
  transition: transform 0.2s;
  text-decoration: none; 
  color: inherit;
  margin-top: -10px;
  display: block;
}

.collection-card img {
  width: 100%;
  border-radius: 10px;
  margin-top: -10px;
}

.collection-card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

</style>
