function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const imagens = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    imagens.forEach(img => {

        // half way through the image
        const slideInAT = (window.scrollY + window.innerHeight) - img.height / 2;
        
        // bottom of the image
        const imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAT > img.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrollPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));

