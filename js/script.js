$(document).ready(function() {
  $('div.acco2__trigger').click(function() {
    if (!$(this).hasClass('active')) {	//если "кликнутый" пункт неактивный:
      $('div.acco2__trigger').removeClass('active').next('ul').slideUp();
      //делаем неактивными все пункты и скрываем все блоки
      $(this).addClass('active');	//активируем "кликнутый" пункт
      $(this).next('ul').slideDown(200);	//раскрываем следующий за ним блок с описанием
    } else {	//иначе:
      $(this).removeClass('active').next('ul').slideUp();	//скрываем данный пункт
    }
  });

  // Gallery
  lightGallery(document.getElementById('lightgallery'));

});
  // Slider
  // import Siema from 'siema';
  const mySiema = new Siema({
    loop: true,
  });
  document.querySelector('.slider__left').addEventListener('click', () => mySiema.prev());
  document.querySelector('.slider__right').addEventListener('click', () => mySiema.next());
 /* new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  });*/



