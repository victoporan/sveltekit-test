<script>
  import { Phone, Mail, MapPin, Send } from 'lucide-svelte';
</script>

<div class="contact-page">
  <h1>Contact Us</h1>
  <p>We’d love to hear from you! Reach out to us via phone, email or visit our store.</p>

  <div class="contact-info">
    <div class="info-item">
      <Phone size={24} />
      <span>(0787) 654 321</span>
    </div>
    <div class="info-item">
      <Mail size={24} />
      <span>support@equinoxjewelry.com</span>
    </div>
    <div class="info-item">
      <MapPin size={24} />
      <span>str. Arhitecților, Bucharest</span>
    </div>
  </div>

  <div class="contact-form">
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <textarea placeholder="Your Message"></textarea>
    <button>
      <Send size={18} />
      Send Message
    </button>
  </div>
</div>

<style>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  text-align: center;
}

.contact-page h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.contact-page p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: #111;
  text-align: left;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Imperial URW', serif;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: rgb(96, 85, 92);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Imperial URW', serif;
  transition: background-color 0.3s;
}

.contact-form button:hover {
  background-color: rgb(80, 70, 80);
}

/* Responsive */
/* Tablet */
@media (max-width: 900px) {
  .contact-page {
    padding: 2.5rem 1.5rem;
  }
  .contact-info {
    gap: 0.8rem;
  }
  .contact-form input,
  .contact-form textarea {
    font-size: 0.95rem;
  }
  .contact-form button {
    font-size: 0.95rem;
    padding: 0.7rem 1.1rem;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .contact-page {
    padding: 2rem 1rem;
  }
  .contact-page h1 {
    font-size: 2rem;
  }
  .contact-page p {
    font-size: 1rem;
  }
  .contact-info {
    gap: 0.5rem;
  }
  .info-item span {
    font-size: 0.95rem;
  }
  .contact-form input,
  .contact-form textarea {
    font-size: 0.9rem;
  }
  .contact-form textarea {
    min-height: 100px;
  }
  .contact-form button {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }
}
</style>
