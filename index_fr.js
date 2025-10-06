const slides = [
  {
    image: 'url("1.avif")',
    text: 'Que ce soit pour un bilan de santé ou un suivi médical, notre clinique est là pour accompagner votre parcours de santé avec une attention personnalisée et en toute confiance.'
  },
  {
    image: 'url("2.avif")',
    text: 'Des nouveau-nés aux adolescents, nos spécialistes en pédiatrie offrent des soins experts et bienveillants, adaptés à chaque étape de la croissance de votre enfant.'
  },
  {
    image: 'url("3.avif")',
    text: 'Votre bien-être est notre mission — venez nous voir pour un accompagnement médical complet et attentif, sur lequel vous pouvez compter à chaque étape de la vie.'
  },
    {
    image: 'url("15.jpg")',
    text: 'Redécouvrez votre sourire grâce à nos soins dentaires experts et tout en douceur — car vous méritez une confiance éclatante chaque jour.'
  },
  {
    image: 'url("16.jpeg")',
    text: 'Des nettoyages de routine aux traitements avancés, notre équipe dentaire est là pour rendre chaque visite confortable, efficace et sans stress.'
  },
    {
    image: 'url("18.webp")',
    text: 'La santé et le bonheur de votre enfant sont notre priorité absolue — nous créons un espace chaleureux et accueillant où les plus petits se sentent en sécurité et bien pris en charge.'
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