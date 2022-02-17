const burger = document.querySelector('.burger'),
      reference = document.querySelectorAll('.header__link'),
      menu = document.querySelector('.nav'),
      overlay = document.querySelector('.header-overlay'),
      popapClose = document.querySelector('.popap__close'),
      popapArea = document.querySelector('.popap__area'),
      btnPopup = document.querySelector('.btnPopap'),
      popup = document.querySelector('.popap'),
      body = document.querySelector('body');
function toggle() {
    menu.classList.toggle('show');
    burger.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.toggle('stop-scroll');
}
function toggleSecond() {
    popapClose.classList.toggle('showIt');
    popup.classList.toggle('showIt');
    popapArea.classList.toggle('showIt');
    body.classList.toggle('stop-scroll');
}
function toggleRemove () {
    overlay.classList.remove('show');
    burger.classList.toggle('show');
    menu.classList.toggle('show');
    body.classList.remove('stop-scroll');
}
function listener(list, event = 'click', callback) {
    list.addEventListener( event, callback);
}
listener(burger, 'click', toggle);
listener(btnPopup, 'click', toggleSecond);
listener(popapArea,'click', toggleSecond);
listener(popapClose,'click', toggleSecond);
listener(body, 'click', function (e) {
    if(e.target.classList.contains('header-overlay')) toggle();
});
reference.forEach(item => {
   item.addEventListener('click', toggleRemove);
});




