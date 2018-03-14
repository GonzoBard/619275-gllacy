function changeBackground(slide_num, control) {

  var totalNum = 3;
  var slideTemplateClassName = 'body-bg-slide-';
  var activeClassName = 'active';

  var bodyElem = document.getElementsByTagName('body')[0];
  var bodyClassList = bodyElem.classList;
  var slideTextElem = document.querySelector('.slider-text');

  if (bodyClassList) {
    for (i = 1; i <= totalNum; i++) {
      bodyClassList.remove(slideTemplateClassName + i);
    }
  }
  bodyClassList.add(slideTemplateClassName + slide_num);

  var slideText = 'Крем-брюле и пломбир<br>с малиновым джемом';
  if (slide_num === 2) {
    slideText = 'Шоколадный пломбир<br>и лимонный сорбет';
  } else if (slide_num === 3) {
    slideText = 'Пломбир с помадкой<br>и клубничный щербет';
  }
  slideTextElem.innerHTML = slideText;

  var actives = document.querySelectorAll('.slider-main-controls .active');
  for (i = 0; i < actives.length; i++) {
    actives[i].classList.remove(activeClassName);
  }
  control.classList.add(activeClassName);
}
