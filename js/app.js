// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: 
// avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

//creare un array con le img al interno 
const imagesArray = [
'./img/01.webp', 
'./img/02.webp',  
'./img/03.webp', 
'./img/04.webp', 
'./img/05.webp'
]

const itemsContainerDOMElement = document.querySelector('.items-container');
let itemsHtml = ''

//creo un ciclo for che contenga un tamplete literal
for(let i = 0; i < imagesArray.length; i++){

    //stampo il valore per verifica

    const imagePath = imagesArray[i];

    const sliderItemHtml =`
    <div class="items mySlide">
        <img src="${imagePath}" alt="">
    </div>
    `
    itemsHtml += sliderItemHtml;

};

itemsContainerDOMElement.innerHTML = itemsHtml;

const divItemList = document.getElementsByClassName('items')

//aggiungo la classe "active" al primo itesms
let itemElementArray = 0;

divItemList[itemElementArray].classList.add('active');
  //creo l' ascolto del bottone 

//creo la variabbile per richiamarmi il pulsante next
const next = document.querySelector('.next');

//creo la variabbile per richiamarmi il pulsante prev

const prev = document.querySelector('.prev');

//collego l' ascolto del bottone 

next.addEventListener('click', function(){

    //rimuovo l'active dal' primo div interessato 

    divItemList[itemElementArray].classList.remove('active');

    //incremento itemElementArray di 1
    itemElementArray++;

    divItemList[itemElementArray].classList.add('active');


});

prev.addEventListener('click', function(){

    //rimuovo l'active dal' primo div interessato 

    divItemList[itemElementArray].classList.remove('active');

    //incremento itemElementArray di 1
    itemElementArray--;

    divItemList[itemElementArray].classList.add('active');


});

