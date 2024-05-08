const photosFeedback = ["feedback1", "feedback2", "feedback3", "feedback4","feedback5", "feedback6", "feedback7", "feedback8","feedback9","feedback10","feedback11","feedback12","feedback13","feedback14","feedback15","feedback16","feedback17","feedback18","feedback19","feedback20","feedback21","feedback22","feedback23","feedback24"];
const previousButton2 = document.querySelector('.previous-arrow2');
const nextButton2 = document.querySelector('.next-arrow2');
let indexFeedback = 0;
nextButton2.addEventListener('click',() => {
    indexFeedback++;
    if(indexFeedback === photosFeedback.length){
        indexFeedback = 0;
    }
    feedbackImg.src='img/'+photosFeedback[indexFeedback]+'.jpg';
})
previousButton2.addEventListener('click',() => {
   indexFeedback--;
   if(indexFeedback === -1){
       indexFeedback = photosFeedback.length - 1;
  }
   feedbackImg.src='img/'+photosFeedback[indexFeedback]+'.jpg';
})