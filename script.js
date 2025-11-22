// Mobile Menu
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
}

// Scroll Top
const scrollTopBtn = document.getElementById('scrollTop');
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// FAQ Accordion
function toggleFaq(el) {
  el.classList.toggle('active');
  const answer = el.nextElementSibling;
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Testimonial Slider
const testimonials = [
  { stars: 5, text: "Great eco-friendly products! Our branding has never looked better.", name: "Jane Doe" },
  { stars: 4, text: "Fast delivery and high-quality materials. Highly recommend.", name: "John Smith" },
  { stars: 5, text: "Excellent service and very customizable options.", name: "Mary Johnson" }
];

const track = document.getElementById('testimonialTrack');
let currentIndex = 0;

function renderTestimonials() {
  track.innerHTML = '';
  testimonials.forEach(t => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <div class="testimonial-text">${t.text}</div>
      <div class="testimonial-name">${t.name}</div>
    `;
    track.appendChild(card);
  });
}
renderTestimonials();

function showTestimonial(index) {
  const width = track.clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// Contact Form Submission via Formspree
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    } else {
      alert('Oops! There was a problem sending your message.');
    }
  })
  .catch(error => {
    alert('Oops! There was a problem sending your message.');
    console.error(error);
  });
});
