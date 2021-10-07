const questionsButton = document.querySelectorAll('.questions__button');
const questionsParagraph = document.querySelector('.questions__paragraph');
const formElement = document.querySelector('.form');
const formAdd = document.querySelector('#form-add');
const buttonElement = document.querySelector('.form__submit');

// функция открытия/закрытия ответа
function activeParagraph () {
  questionsParagraph.classList.toggle('questions__paragraph-active');
}
Array.from(document.querySelectorAll(".price__paragraphs")).forEach(e=>{e.addEventListener("click",(function(){
  this.classList.toggle("price__item-active");
  let e=this.querySelector(".price__paragraph");
  e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))});
// функция очистки формы 
function resetFormAdd(formAdd) {
  formElement.reset();
}


// submit
const submitEditProfileForm = evt => {
  evt.preventDefault();
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('.form__submit_inactive');
  resetFormAdd();
}
formElement.addEventListener('submit', submitEditProfileForm);

// количество товара
function quantityGoods(e){
  var numCount = e.querySelector('.num_count');
  var plusBtn = e.querySelector('.button_plus');
  var minusBtn = e.querySelector('.button_minus');
  plusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty + 1;
    numCount.value = qty;
  }
  minusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    if(qty > 0)
    qty = qty - 1;
    numCount.value = qty;
  }};

const priceItem1 = document.querySelector('#price_item1');
quantityGoods(priceItem1);
const priceItem2 = document.querySelector('#price_item2');
quantityGoods(priceItem2);
const priceItem3 = document.querySelector('#price_item3');
quantityGoods(priceItem3);
const priceItem4 = document.querySelector('#price_item4');
quantityGoods(priceItem4);
const priceItem5 = document.querySelector('#price_item5');
quantityGoods(priceItem5);
