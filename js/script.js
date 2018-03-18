function changeSlide(slide_num, control) {

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

function ModalFeedBack() {
  var modal = document.querySelector('.modal-feedback');
  var openClassName = 'modal-feedback-open';
  var closeClassName = 'modal-feedback-close';
  var timeToClose = 500; //millisec.

  this.open = function () {
    modal.classList.remove(closeClassName);
    modal.classList.add(openClassName);
  };

  this.close = function () {
    modal.classList.add(closeClassName);
    setTimeout(function () {
      modal.classList.remove(openClassName);
    }, timeToClose);
  };

  //http://emailregex.com/
  var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var modalFeedbackContent = document.querySelector('.modal-feedback-content');
  var forShakeClassName = 'modal-shake-effect';
  var timeToStopShake = 400; //millisec.

  this.check = function (form) {

    var result = form['name'].value !== ''
      && emailregex.test(form['email'].value)
      && form['message'].value !== '';

    if (!result) {
      modalFeedbackContent.classList.add(forShakeClassName);
      setTimeout(function () {
        modalFeedbackContent.classList.remove(forShakeClassName);
      }, timeToStopShake)
    }
    return result;
  };
}

var modalFeedBack = new ModalFeedBack();
