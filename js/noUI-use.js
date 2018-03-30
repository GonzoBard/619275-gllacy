var dualBandRange = document.getElementById('dual-band-range');
dualBandRange.innerHTML = ''; // очищаю содержимое, которое там на случай отключения javascript
noUiSlider.create(dualBandRange, {
  start: [100, 500],
  step: 5,
  connect: true,
  range: {
    'min': 0,
    'max': 1200
  }
});

var priceRangeLowInput = document.getElementById('filters-form__price-range-low');
var priceRangeHighInput = document.getElementById('filters-form__price-range-high');
var nodes = [
    {
      'text': document.getElementById('filters-form__price-range-text-lower-value'),
      'input': priceRangeLowInput
    },
    {
      'text': document.getElementById('filters-form__price-range-text-upper-value'),
      'input': priceRangeHighInput
    }
  ]
;
dualBandRange.noUiSlider.on('update', function (values, handle) {
  var value = +values[handle];
  nodes[handle].text.innerHTML = value;
  nodes[handle].input.value = value;
});
priceRangeLowInput.addEventListener('change', function () {
  dualBandRange.noUiSlider.set([null, this.value]);
});
priceRangeHighInput.addEventListener('change', function () {
  dualBandRange.noUiSlider.set([null, this.value]);
});
