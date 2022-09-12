
const faqList = document.querySelectorAll(".faqItem");

for(const faqItem of faqList){
    faqItem.addEventListener("click", () => {
   let question = faqItem.querySelector(".question");
   let arrow =   faqItem.querySelector(".arrow");
   let faqAns =  faqItem.querySelector(".faqAns");

   if(question.classList.contains("questionSelected"))
   {
   question.classList.remove("questionSelected");
   arrow.classList.remove("arrowSelected");
   faqAns.classList.remove("faqAnsVisible");}
   else{
    question.classList.add("questionSelected");
    arrow.classList.add("arrowSelected");
    faqAns.classList.add("faqAnsVisible");
   }
      
    })
}
















