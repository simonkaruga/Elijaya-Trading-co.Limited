// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");
}

function closeMenu() {
    document.getElementById("nav").classList.remove("show");
}

// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTop");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Contact Form Submission (dummy)
function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    document.getElementById("contactForm").reset();
}

// Testimonials Data
const testimonials = [
    { name: "Alice K.", company: "GreenTech Ltd.", rating: 5, text: "Eljaya provided excellent sustainable branding solutions. Highly recommended!" },
    { name: "Brian M.", company: "EcoHome Kenya", rating: 4, text: "Great quality products and very responsive team. Loved the custom packaging." },
    { name: "Catherine W.", company: "Nairobi Events", rating: 5, text: "Professional service and eco-friendly materials that impressed our clients." }
];

let currentTestimonial = 0;

function showTestimonial(index) {
    const testimonialContainer = document.getElementById("testimonialTrack");
    testimonialContainer.innerHTML = `
        <div class="testimonial-card">
            <div class="testimonial-stars">${'★'.repeat(testimonials[index].rating)}</div>
            <p class="testimonial-text">"${testimonials[index].text}"</p>
            <div>
                <p class="testimonial-name">${testimonials[index].name}</p>
                <p class="testimonial-company">${testimonials[index].company}</p>
            </div>
        </div>
    `;
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
    showTestimonial(currentTestimonial);
});

// Next / Previous controls
function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Optional: Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// FAQ toggle
function toggleFaq(el) {
    const answer = el.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
}
