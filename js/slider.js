import noUiSlider from 'nouislider';

var sliders = document.querySelectorAll('input[type="range"]');

sliders.forEach(slider => {
  noUiSlider.create(slider, {
    start: slider.getAttribute('data-start'),
    range: {
      'min': 0,
      'max': 100
    },
    direction: 'ltr',
    orientation: 'horizontal',
  });
})
