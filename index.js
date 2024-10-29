const select = document.querySelector(".selector");
const selectTxt = document.getElementById("selectText");
const options = document.getElementsByClassName("option");
const hide = document.querySelector(".hide");
const rotate = document.getElementById("r-180deg");

/* ---Custom selector--- */
for(option of options){
   option.onclick = function(){
      selectTxt.innerHTML = this.textContent;
      hide.classList.toggle("hide");
      rotate.classList.toggle("rotate");
   }
}

select.onclick = function(){
   hide.classList.toggle("hide");
   rotate.classList.toggle("rotate");
}


const Email = document.querySelector(".email");
const input_value = document.querySelector("input");
const email = document.querySelector(".input");
/* ---Input box--- */
input_value.addEventListener("focus",()=>{
   email.classList.add("focus");
   Email.classList.remove("email");
   Email.classList.add("Textemail");
})

input_value.addEventListener("blur",(e)=>{
   if(e.target.value.length !== 0){
      email.classList.add("focus");
      Email.classList.remove("email");
      Email.classList.add("Textemail");
   }
   else{
      Email.classList.add("email");
      Email.classList.remove("Textemail");
      email.classList.remove("focus");
   }
})


const names = document.querySelectorAll(".name");
const answers = document.querySelectorAll(".answer");
const cross = document.querySelectorAll(".cross");
/* ---Answers display---  */
for(let i=0; i<answers.length; i++){
   names[i].addEventListener("click",()=>{
         if(answers[i].classList[1] === "display-block"){
            answers[i].classList.remove("display-block");
            cross[i].classList.remove("rotate-plus");
         }
         else{
            for(answer of answers){
               answer.classList.remove("display-block");
               for(cros of cross){
                  cros.classList.remove("rotate-plus");
               }
            }
            answers[i].classList.add("display-block");
            cross[i].classList.add("rotate-plus");
         }
   })
}


