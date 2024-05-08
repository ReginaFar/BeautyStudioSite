const photos = ["tatoo1", "tatoo2", "tatoo4", "tatoo5","tatoo6", "tatoo7", "tatoo8", "tatoo9", "tatoo10", "tatoo11"];
const previousButton = document.querySelector('.previous-arrow');
const nextButton = document.querySelector('.next-arrow');
let index = 0;
nextButton.addEventListener('click',() => {
    index++;
    if(index === photos.length){
        index = 0;
    }
    itemImg.src='img/'+photos[index]+'.jpg';
})
previousButton.addEventListener('click',() => {
   index--;
   if(index === -1){
       index = photos.length - 1;
  }
   itemImg.src='img/'+photos[index]+'.jpg';
})