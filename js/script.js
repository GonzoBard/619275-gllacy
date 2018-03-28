function SliderOfMainPage() {

  var sliderData = [
    {
      'textIndex': 0,
      'bodyClass': 'body-bg--0',
      'control': document.getElementById('main-bg-slider__control--0')
    },
    {
      'textIndex': 1,
      'bodyClass': 'body-bg--1',
      'control': document.getElementById('main-bg-slider__control--1')
    },
    {
      'textIndex': 2,
      'bodyClass': 'body-bg--2',
      'control': document.getElementById('main-bg-slider__control--2')
    }
  ];
  var listOfText = document.getElementById('main-bg-slider__list-of-text');
  var activeTextClassName = 'main-bg-slider__text--active';
  var activeControlClassName = 'main-bg-slider__control--active';
  var bodyClassList = document.getElementsByTagName('body')[0].classList;
  var current = sliderData[0]; //исходное состояние => 0-слайд активен

  this.change = function (controlOfNextSlide) {

    if (current.control === controlOfNextSlide) {
      return; //do nothing, если выбрали активный слайд
    }

    var next;
    for (i = 0; i < sliderData.length; i++) {
      if (!next && sliderData[i].control === controlOfNextSlide) {
        next = sliderData[i];
      }
    }
    bodyClassList.remove(current.bodyClass); //очищаю фон текущего слайда
    bodyClassList.add(next.bodyClass); //назначаю фон следующего слайда

    current.control.classList.remove(activeControlClassName); //деактивирую контрол текущего слайда
    next.control.classList.add(activeControlClassName); //активирую контрол следующего слайда

    listOfText.children[current.textIndex].classList.remove(activeTextClassName); // скрываю текст текущего слайда
    listOfText.children[next.textIndex].classList.add(activeTextClassName); // отображаю текст следующего слайда

    current = next; // теперь следующий слайд стал текущим
  };
}

function FeedBackModal() {
  var modal = document.getElementById('modal-feedback');
  var content = document.getElementById('feedback__content');
  var form = document.getElementById('feedback-form');

  var openClassName = 'feedback--open';
  var closeClassName = 'feedback--close';
  var forShakeClassName = 'shake-effect';
  var timeToClose = 500; //ms
  var timeToStopShake = 400; //ms

  //http://emailregex.com/
  var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  this.open = function (event) {
    event.preventDefault(); //отменить стандартное действие
    modal.classList.remove(closeClassName);
    modal.classList.add(openClassName);
  };

  this.close = function () {
    modal.classList.add(closeClassName);
    setTimeout(function () {
      modal.classList.remove(openClassName);
    }, timeToClose);
  };

  this.check = function () {
    var result = form['name'].value !== ''
      && emailregex.test(form['email'].value)
      && form['message'].value !== '';

    if (!result) {
      content.classList.add(forShakeClassName);
      setTimeout(function () {
        content.classList.remove(forShakeClassName);
      }, timeToStopShake)
    }
    return result;
  };
}

var sliderOfMainPage = new SliderOfMainPage();
var feedBackModal = new FeedBackModal();
