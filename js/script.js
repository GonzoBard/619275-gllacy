function changeBackground(slide_num, control) {

  var totalNum = 3;
  var slideTemplateClassName = 'body-bg-slide-';
  var activeClassName = 'active';

  var body = document.getElementsByTagName('body')[0];
  var bodyClassList = body.classList;

  if (bodyClassList) {
    for (i = 1; i <= totalNum; i++) {
      bodyClassList.remove(slideTemplateClassName + i);
    }
  }
  bodyClassList.add(slideTemplateClassName + slide_num);

  document.querySelectorAll('.slider-main-controls .active')
    .forEach(function (elem) {
      elem.classList.remove(activeClassName);
    });
  control.classList.add(activeClassName);
}
