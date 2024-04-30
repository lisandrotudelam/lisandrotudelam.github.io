window.addEventListener("scroll", function() {
    var head1 = document.getElementById("head1");
    if (window.scrollY > 150) {
      head1.style.backgroundColor = "#000", head1.style.borderbottom ="2px solid white";
    } else {
      head1.style.backgroundColor = "transparent",head1.style.borderbottom ="none";
    }
  });


  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
