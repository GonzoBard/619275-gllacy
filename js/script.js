function changeBackground(slide_num, control) {

  var totalNum = 3;
  var slideTemplateClassName = 'body-bg-slide-';
  var activeClassName = 'active';

  var bodyElem = document.getElementsByTagName('body')[0];
  var bodyClassList = bodyElem.classList;
  var promoTextElem = document.querySelector('.slider-promo-text');

  if (bodyClassList) {
    for (i = 1; i <= totalNum; i++) {
      bodyClassList.remove(slideTemplateClassName + i);
    }
  }
  bodyClassList.add(slideTemplateClassName + slide_num);

  var promoText = 'Крем-брюле и пломбир<br>с малиновым джемом';
  if (slide_num === 2) {
    promoText = 'Шоколадный пломбир<br>и лимонный сорбет';
  } else if (slide_num === 3) {
    promoText = 'Пломбир с помадкой<br>и клубничный щербет';
  }
  promoTextElem.innerHTML = promoText;

  document.querySelectorAll('.slider-main-controls .active')
    .forEach(function (elem) {
      elem.classList.remove(activeClassName);
    });
  control.classList.add(activeClassName);
}
