const slides = [
  {
    image: 'url("1.avif")',
    text: 'سواء كان فحصًا دوريًا أو رعاية مستمرة، فإن عيادتنا هنا لدعم رحلتك الصحية من خلال اهتمام شخصي وثقة عالية.'
  },
  {
    image: 'url("2.avif")',
    text: 'من المواليد الجدد وحتى المراهقين، يقدم أخصائيو الأطفال لدينا رعاية متخصصة ومتعاطفة تتطور مع نمو طفلك.'
  },
  {
    image: 'url("3.avif")',
    text: 'رفاهيتك هي مهمتنا — زورنا للحصول على دعم طبي شامل ومعتني يمكنك الاعتماد عليه في كل مرحلة من حياتك.'
  },
    {
    image: 'url("15.jpg")',
    text: 'استعد ابتسامتك مع رعاية أسنان لطيفة ومتخصصة — لأنك تستحق الثقة التي تتألق كل يوم.'
  },
  {
    image: 'url("16.jpeg")',
    text: 'من التنظيفات الروتينية إلى العلاجات المتقدمة، فريق الأسنان لدينا هنا لجعل كل زيارة مريحة وفعّالة وخالية من التوتر.'
  },
    {
    image: 'url("18.webp")',
    text: 'صحة وسعادة طفلك هي أولويتنا القصوى — نحن نوفر بيئة دافئة ومرحبة يشعر فيها الصغار بالأمان والاهتمام.'
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