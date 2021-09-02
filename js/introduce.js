(() => {
  const balloonEl = document.querySelectorAll('.balloon');
  const graphicEl = document.querySelectorAll('.item');
  const section = document.querySelector('section')
  let currentItem = graphicEl[0];

  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);
  });

  for (let i = 0; i < balloonEl.length; i++) {
    balloonEl[i].dataset.index = i;
    graphicEl[i].dataset.index = i;
  };

  function activate() {
    currentItem.classList.add('visible')
  }

  function inactivate() {
    currentItem.classList.remove('visible');
  }

  section.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = 0; i < balloonEl.length; i++) {
      step = balloonEl[i];
      boundingRect = step.getBoundingClientRect();
      
      if (boundingRect.top > section.clientHeight * 0.1 &&
          boundingRect.top < section.clientHeight * 0.8) {
            inactivate();
            currentItem = graphicEl[step.dataset.index];
            activate();
          }
    }
  });
  activate();
})();