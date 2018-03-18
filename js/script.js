function SliderOfMainPage() {

  var sliderData = [
    {
      'text': 'Крем-брюле и пломбир<br>с малиновым джемом',
      'bodyClass': 'body-bg-slide-0',
      'control': document.querySelector('.slider .control-0')
    },
    {
      'text': 'Шоколадный пломбир<br>и лимонный сорбет',
      'bodyClass': 'body-bg-slide-1',
      'control': document.querySelector('.slider .control-1')
    },
    {
      'text': 'Пломбир с помадкой<br>и клубничный щербет',
      'bodyClass': 'body-bg-slide-2',
      'control': document.querySelector('.slider .control-2')
    }
  ];
  var bodyClassList = document.getElementsByTagName('body')[0].classList;
  var textElem = document.querySelector('.slider-text');
  var activeClassName = 'active';
  var currentSlide = sliderData[0]; //исходное состояние => 0-слайд активен

  this.change = function (controlOfNextSlide) {

    if (currentSlide.control === controlOfNextSlide) {
      return; //do nothing, если выбрали активный слайд
    }

    var nextSlide;
    for (i = 0; i < sliderData.length; i++) {
      if (!nextSlide && sliderData[i].control === controlOfNextSlide) {
        nextSlide = sliderData[i];
      }
    }
    bodyClassList.remove(currentSlide.bodyClass); //очищаю фон текущего слайда
    bodyClassList.add(nextSlide.bodyClass); //назначаю фон следующего слайда

    textElem.innerHTML = nextSlide.text; // назначаю текст следующего слайда

    currentSlide.control.classList.remove(activeClassName); //деактивирую контрол текущего слайда
    nextSlide.control.classList.add(activeClassName); //активирую контрол следующего слайда

    currentSlide = nextSlide; // теперь следующий слайд стал текущим
  };
}

function FeedBackModal() {
  var modal = document.querySelector('.modal-feedback');
  var content = document.querySelector('.modal-feedback-content');
  var form = document.querySelector('.modal-feedback-form');

  var openClassName = 'modal-feedback-open';
  var closeClassName = 'modal-feedback-close';
  var forShakeClassName = 'modal-shake-effect';
  var timeToClose = 500; //ms
  var timeToStopShake = 400; //ms

  //http://emailregex.com/
  var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
