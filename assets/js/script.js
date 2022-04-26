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
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
    });
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