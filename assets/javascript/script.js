// 'use strict';


// Add event listener to navbar toggler

const navbar = document.querySelector('.navbar');
const navTogglers = document.querySelectorAll('.nav-toggler');
const overlay = document.querySelector('.overlay');

navTogglers.forEach((navToggler) => {
  navToggler.addEventListener('click', () => {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
})
})

// Add event listener to header scroll system & back to top button

const header = document.querySelector('.header');
const backToTopBtn = document.querySelector('.back-to-top-btn');

let lastScrollPosition = 0;

// const hideHeader = () => {
//   const isScrollBottom = lastScrollPosition < window.scrollY;
//   if (isScrollBottom) {
//     header.classList.add('hide');
//   } else {
//     header.classList.remove('hide');
//   }

//   lastScrollPosition = window.scrollY;
// }

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    header.classList.add('smaller');
    backToTopBtn.classList.add('active');
    // hideHeader();
  } else {
    header.classList.remove('smaller');
    backToTopBtn.classList.remove('active');
  }
})



// Make wide screen navbar system

// document.querySelectorAll('.navbar-link').forEach((link) => {
//     link.addEventListener('click', e => {
//       document.querySelectorAll('.navbar-link').forEach((navlink) => {
//         navlink.classList.remove('active');
//       })
//       e.target.classList.add('active');
//       navbar.classList.remove('active');
//       overlay.classList.remove('active');
//       document.body.classList.remove('nav-active');
//     })
//   })


// window.addEventListener('DOMContentLoaded', () => {
//   const navbarLinks = document.querySelectorAll('.navbar-link');
//   const windowPathname = window.location.pathname;
  
//   navbarLinks.forEach(navbarLink => {
//     navbarLink.classList.remove('active');
//   })
  
//   if (windowPathname == '/Cafe-Template-2-Web/' || windowPathname == '/') {
//     navbarLinks[0].classList.add('active');
//   } else {
//     navbarLinks.forEach(navbarLink => {
//       if (navbarLink.href.includes(windowPathname)) {
//         navbarLink.classList.add('active');
//       }
//     })
//   }
// })




// Make carousel slide system

// const heroCarousel = document.querySelector('.hero-carousel');
// const heroCarouselItems = document.querySelectorAll('.carousel-item');

// const prevBtn = document.querySelector('.prev-carousel-btn');
// const nextBtn = document.querySelector('.next-carousel-btn');

// let currentCarouselPosition = 0;
// let lastActiveCarouselItem = heroCarouselItems[0];

// const updateCarouselItem = () => {
//   lastActiveCarouselItem.classList.remove('active');
//   heroCarouselItems[currentCarouselPosition].classList.add('active');
//   lastActiveCarouselItem = heroCarouselItems[currentCarouselPosition];
// }

// const slideNext = () => {
//   if (currentCarouselPosition >= heroCarouselItems.length - 1) {
//     currentCarouselPosition = 0;
//   } else {
//     currentCarouselPosition++;
//   }

//   updateCarouselItem();
// }

// const slidePrev = () => {
//   if (currentCarouselPosition <= 0) {
//     currentCarouselPosition = heroCarouselItems.length - 1;
//   } else {
//     currentCarouselPosition--;
//   }

//   updateCarouselItem();
// }

// nextBtn.addEventListener('click', slideNext);
// prevBtn.addEventListener('click', slidePrev);

// let autoSlideInterval;

// const autoSlide = () => {
//   autoSlideInterval = setInterval(() => {
//     slideNext();
//   }, 7000)
// }

// window.addEventListener('load', autoSlide);






// if (document.querySelector('.hero-carousel')) {
//   const carouselItems = document.querySelectorAll('.carousel-item');

//   const prevBtn = document.querySelector('.prev-carousel-btn');
//   const nextBtn = document.querySelector('.next-carousel-btn');
//   const dots = document.querySelectorAll('.dot');

//   let currentPos = 0;
//   // let lastActiveCarouselItem = carouselItems[currentPos];

//   const fadeNext = () => {
//     carouselItems[currentPos].style.animation = 'fadeOut 1.25s ease forwards';
    
//     if (currentPos >= carouselItems.length - 1) {
//       currentPos = 0;
//     } else {
//       currentPos++;
//     }

//     carouselItems[currentPos].style.animation = 'fadeIn 1.25s ease forwards';

//     updateDots();
//   }

//   const fadePrev = () => {
//     carouselItems[currentPos].style.animation = 'fadeOut 1.25s ease forwards';
    
//     if (currentPos == 0) {
//       currentPos = carouselItems.length - 1;
//     } else {
//       currentPos--;
//     }

//     carouselItems[currentPos].style.animation = 'fadeIn 1.25s ease forwards';

//     updateDots();
//   }

//   nextBtn.addEventListener('click', fadeNext);
//   prevBtn.addEventListener('click', fadePrev);

//   const autoFade = () => {
//     autoSlideInterval = setInterval(() => {
//       fadeNext();
//     }, 5000)
//   }

//   window.addEventListener('load', autoFade);

//   const updateDots = () => {
//     dots.forEach(dot => {
//       dot.classList.remove('active');
//     })

//     dots[currentPos].classList.add('active');
//   }

//   const switchImage = currentImg => {
//     carouselItems[currentPos].classList.remove('active');
//     currentImg.classList.add('active');
//     let imgId = currentImg.getAttribute('attr');

//     if (imgId > currentPos) {
//       carouselItems[currentPos].style.animation = 'nextOut 0.5s ease-in forwards';
//       currentPos = imgId;
//       carouselItems[currentPos].style.animation = 'nextIn 0.5s ease-in forwards';
//     } else if (imgId == currentPos) {
//       return;
//     } else {
//       carouselItems[currentPos].style.animation = 'prevOut 0.5s ease-in forwards';
//       currentPos = imgId;
//       carouselItems[currentPos].style.animation = 'prevIn 0.5s ease-in forwards';
//     }

//     updateDots();
//   }
// }









if (document.querySelector('.hero-carousel')) {
  const carouselItems = document.querySelectorAll('.carousel-item');

  const prevBtn = document.querySelector('.prev-carousel-btn');
  const nextBtn = document.querySelector('.next-carousel-btn');
  const dots = document.querySelectorAll('.dot');

  let currentPos = 0;
  let lastActiveCarouselItem = carouselItems[currentPos];

  const updateCarouselItem = () => {
    lastActiveCarouselItem.classList.remove('active');
    carouselItems[currentPos].classList.add('active');
    lastActiveCarouselItem = carouselItems[currentPos];
  }

  const fadeNext = () => {
    if (currentPos >= carouselItems.length - 1) {
      currentPos = 0;
    } else {
      currentPos++;
    }

    updateCarouselItem();
    updateDots();
  }

  const fadePrev = () => {
    if (currentPos == 0) {
      currentPos = carouselItems.length - 1;
    } else {
      currentPos--;
    }

    updateCarouselItem();
    updateDots();
  }

  nextBtn.addEventListener('click', fadeNext);
  prevBtn.addEventListener('click', fadePrev);

  const autoFade = () => {
    autoSlideInterval = setInterval(() => {
      fadeNext();
    }, 7000)
  }

  window.addEventListener('load', autoFade);

  const updateDots = () => {
    dots.forEach(dot => {
      dot.classList.remove('active');
    })

    dots[currentPos].classList.add('active');
  }

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      let imgId = e.target.dataset.dotId;

      if (imgId != currentPos) {
        currentPos = imgId;
        updateCarouselItem();
      } else {
        return;
      } 

      updateDots();
    })
  })
}






// if (document.querySelector('.hero-carousel')) {
//   const carouselItems = document.querySelectorAll('.carousel-item');

//   const prevBtn = document.querySelector('.prev-carousel-btn');
//   const nextBtn = document.querySelector('.next-carousel-btn');
//   const dots = document.querySelectorAll('.dot');

//   let currentPos = 0;
//   let lastActiveCarouselItem = carouselItems[currentPos];

//   const slideNext = () => {
//     carouselItems[currentPos].style.animation = 'nextOut 0.5s ease-in forwards';
    
//     if (currentPos >= carouselItems.length - 1) {
//       currentPos = 0;
//     } else {
//       currentPos++;
//     }

//     carouselItems[currentPos].style.animation = 'nextIn 0.5s ease-in forwards';

//     updateDots();
//   }

//   const slidePrev = () => {
//     carouselItems[currentPos].style.animation = 'prevOut 0.5s ease-in forwards';
    
//     if (currentPos == 0) {
//       currentPos = carouselItems.length - 1;
//     } else {
//       currentPos--;
//     }

//     carouselItems[currentPos].style.animation = 'prevIn 0.5s ease-in forwards';

//     updateDots();
//   }

//   nextBtn.addEventListener('click', slideNext);
//   prevBtn.addEventListener('click', slidePrev);

//   const autoSlide = () => {
//     autoSlideInterval = setInterval(() => {
//       slideNext();
//     }, 5000)
//   }

//   window.addEventListener('load', autoSlide);

//   const updateDots = () => {
//     dots.forEach(dot => {
//       dot.classList.remove('active');
//     })

//     dots[currentPos].classList.add('active');
//   }

//   const switchImage = currentImg => {
//     carouselItems[currentPos].classList.remove('active');
//     currentImg.classList.add('active');
//     let imgId = currentImg.getAttribute('attr');

//     if (imgId > currentPos) {
//       carouselItems[currentPos].style.animation = 'nextOut 0.5s ease-in forwards';
//       currentPos = imgId;
//       carouselItems[currentPos].style.animation = 'nextIn 0.5s ease-in forwards';
//     } else if (imgId == currentPos) {
//       return;
//     } else {
//       carouselItems[currentPos].style.animation = 'prevOut 0.5s ease-in forwards';
//       currentPos = imgId;
//       carouselItems[currentPos].style.animation = 'prevIn 0.5s ease-in forwards';
//     }

//     updateDots();
//   }
// }




// Add observer to animate elements while entering the viewport for the first time


const texts = document.querySelectorAll('.containing-text');

const textsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting);
    if (entry.isIntersecting) {
      textsObserver.unobserve(entry.target);
    }
  })
}, {
  threshold: 0.1,
})

texts.forEach(text => {
  textsObserver.observe(text);
})

const imgs = document.querySelectorAll('.containing-img');

const imgsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting);
    if (entry.isIntersecting) {
      imgsObserver.unobserve(entry.target);
    }
  })
}, {
  threshold: 0.1,
})

imgs.forEach(img => {
  imgsObserver.observe(img);
})

