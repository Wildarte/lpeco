const cards_img = document.querySelectorAll('.card_img_box'); //cards imgs
const total_cards = cards_img.length; //total of cards imgs
const frameModal = document.querySelector('.section_imgs_box');

const btn_prev_card = document.querySelector('.btn_prev');
const btn_next_card = document.querySelector('.btn_next');

console.log("total de cards: "+total_cards);

let card_actived = 0; //store actived card

function openModal(item_current){

    let next_item = 0;
    let prev_item = 0;

    if(item_current == total_cards){
        next_item = 1;
        prev_item = item_current - 1;
    }else{
        next_item = item_current + 1;
        prev_item = item_current - 1;
    }

    frameModal.classList.add('frame_modal');

    cards_img.forEach((item) => {
        item.classList.remove('card_active');
        item.style.display = "block";
        item.style.display = "none";
    });

    cards_img[item_current-1].classList.add('card_active');
    document.querySelector('.control_modal_one').style.display = "flex";
    document.querySelector('.close_modal').style.display = "flex";

    btn_next_card.setAttribute('data-next-card', next_item);
    btn_prev_card.setAttribute('data-prev-card', prev_item);

    card_actived = item_current;


}


//close modal cards
function closeModal(){

    frameModal.classList.remove('frame_modal');

    cards_img.forEach((item) => {
        item.style.display = "flex";
        item.classList.remove('card_active');
    });
    document.querySelector('.control_modal_one').style.display = "none";
    document.querySelector('.close_modal').style.display = "none";

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