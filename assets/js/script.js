/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('celular').onkeyup = function(){
		mascara( this, mtel );
	}
}


if(window.matchMedia('(max-width: 600px)').matches){
   
}

document.addEventListener('screen', function(){

});

const clickItemStep = document.querySelectorAll('.viagem_steps ul.list_steps_viagem li');
const itemStep = document.querySelectorAll('.content_steps');

clickItemStep.forEach((item, index) => {

    item.addEventListener('click', function(){

        itemStep.forEach((item) => {
            item.classList.remove('content_steps_actived');
        })
        itemStep[index].classList.add('content_steps_actived');

        clickItemStep.forEach((item) => {

            item.classList.remove('list_steps_viagem_actived');
    
        });
    
        clickItemStep[index].classList.add('list_steps_viagem_actived');

    });

});


//===================== scroll suave ===========================================

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

//===================== scroll suave ===========================================



//open menu mobile
const  btn_menu = document.querySelector('.btn_menu');
btn_menu.addEventListener('click', function(){

    if(document.querySelector('.menu').classList.contains('open_menu_mobile')){
      console.log('contem');
      document.querySelector('.menu').classList.remove('open_menu_mobile');
      document.querySelector('.menu').classList.add('close_menu_mobile');

      setTimeout(function(){
        document.querySelector('.menu').classList.remove('close_menu_mobile');

      }, 1000);

    }else{
      console.log('nao contem');
      document.querySelector('.menu').classList.add('open_menu_mobile');
      document.querySelector('.menu').classList.remove('close_menu_mobile');

    }


});