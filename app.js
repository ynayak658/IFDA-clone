let slideOpn = document.querySelector(".slide-opn-btn");
let slideCls = document.querySelector(".slide-cls-btn i");
let slideMenu = document.querySelector(".slidemenu");


slideOpn.addEventListener("click", () => {
  console.log("clicked")
  slideMenu.classList.add("slidemenu-show");
  slideOpn.classList.add("slide-opn-btn-hide")
})
slideCls.addEventListener("click", () => {
  console.log("clicked")
  slideMenu.classList.remove("slidemenu-show");
  slideOpn.classList.remove("slide-opn-btn-hide")
})













let prevBtn = document.querySelector(".hc-leftbtn");
let nextBtn = document.querySelector(".hc-rightbtn");

let track = document.querySelector('.carousel-main');
let slides = document.querySelectorAll('.hc-img');
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

let autoSlide = setInterval(() => {
  showSlide(index + 1);
}, 4000);

nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
  resetTimer();
});

function resetTimer() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    showSlide(index + 1);
  }, 4000);
}














let aboutDigitalContent = document.querySelector(".about-digi-content");

aboutDigitalContent.addEventListener("mouseenter", () => {
  aboutDigitalContent.style.zIndex = "20";
})


let aboutContent = document.querySelector(".about-content");

aboutContent.addEventListener("mouseenter", () => {
  aboutDigitalContent.style.zIndex = "0";
})











let skillCards = document.querySelectorAll(".skill-card");

for (let skillCard of skillCards) {
  skillCard.addEventListener("mouseenter", () => {
    let skillHover = skillCard.querySelector(".skill-hovercard")

    skillHover.style.top = "-10%";


    setTimeout(() => {
      skillHover.style.top = "10%";

      setTimeout(() => {
        skillHover.style.top = "0%";
      }, 300)

    }, 300)
  })


  skillCard.addEventListener("mouseleave", () => {

    let skillHover = skillCard.querySelector(".skill-hovercard")

    console.log(skillHover)

    skillHover.style.top = "0%"

setTimeout(() => {
      skillHover.style.top = "0%";

      setTimeout(() => {
        skillHover.style.top = "100%";
      }, 300)

    }, 300)


  })
}

let hiddenSection = document.querySelectorAll(".hidden-section");


let observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log("hello");
      entry.target.classList.add("visible")
    }else{
      console.log("byr");
      entry.target.classList.remove("visible");
    }
  });
},{
  threshold : 0.1
});



hiddenSection.forEach(section => {
  observer.observe(section);
})




$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:3 }
      }
    });
  });

