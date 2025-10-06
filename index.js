const slides = [
  {
    image: 'url("1.avif")',
    text: 'Whether it’s a check-up or ongoing care, our clinic is here to support your health journey with personalized attention and trust'
  },
  {
    image: 'url("2.avif")',
    text: 'From newborns to teens, our pediatric specialists provide compassionate, expert care that grows with your child.'
  },
  {
    image: 'url("3.avif")',
    text: 'Your wellness is our mission — visit us for thorough, caring medical support you can count on for every stage of life'
  },
    {
    image: 'url("15.jpg")',
    text: 'Rediscover your smile with our gentle, expert dental care — because you deserve confidence that shines every day.'
  },
  {
    image: 'url("16.jpeg")',
    text: 'From routine cleanings to advanced treatments, our dental team is here to make every visit comfortable, effective, and stress-free'
  },
    {
    image: 'url("18.webp")',
    text: 'Your child’s health and happiness are our top priority — we create a warm, welcoming space where little ones feel safe and cared for.'
  }
];

let currentSlide = 0;

function showSlide(index) {
  const slideshow = document.getElementById('slideshow');
  const slideText = document.getElementById('slideText');

  slideshow.style.backgroundImage = slides[index].image;
  slideText.textContent = slides[index].text;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start the slideshow
showSlide(currentSlide);
setInterval(nextSlide, 6000); // Change every 3 seconds

  const links = document.querySelectorAll('nav ul li a');
  const currentURL = window.location.href;

  links.forEach(link => {
    // Remove active class from all links
    link.classList.remove('active');

    // Add active class to the matching link
    if (link.href === currentURL) {
      link.classList.add('active');
    }
  });

      function switchLanguage(lang) {
      // Redirect to the right HTML page
      if (lang === "en") window.location.href = "index.html";
      if (lang === "ar") window.location.href = "index_ar.html";
      if (lang === "fr") window.location.href = "index_fr.html";
    }