const cards_img = document.querySelectorAll('.card_img_box'); //cards imgs
const total_cards = cards_img.length; //total of cards imgs
const frameModal = document.querySelector('.section_imgs_box2');
const carousel_img = document.querySelector('.content_imgs_box2')

const btn_prev_card = document.querySelector('.btn_prev');
const btn_next_card = document.querySelector('.btn_next');


console.log("total de cards: "+total_cards);

let card_actived = 0; //store actived card

cards_img.forEach((item) => {

    item.addEventListener('click', function(){

        frameModal.classList.add('frame_modal');
        carousel_img.classList.add('owl-carousel');

        document.querySelector('.close_modal2').style.display = "block";

    });
    
});


//close modal cards
function closeModal(){

    frameModal.classList.remove('frame_modal');
    carousel_img.classList.remove('owl-carousel');
    document.querySelector('.close_modal2').style.display = "none";

}


//control cards
function moveCard(item){

    card_actived += item;

    if(card_actived > total_cards){
        card_actived = 1;
    }else if(card_actived < 1){
        card_actived = total_cards;
    }

    cards_img.forEach((item) => {
        item.classList.remove('card_active');
        item.style.display = "block";
        item.style.display = "none";
    });

    cards_img[card_actived-1].classList.add('card_active');


}




