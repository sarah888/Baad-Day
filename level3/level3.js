let affirmation = document.getElementById("checkbox1");
let hospital = document.getElementById("checkbox2");
let affirmation1 = document.getElementById("affirmation1");

const confirm = document.getElementById("confirm");

confirm.addEventListener('click', buttonActivate);
function buttonActivate(){
  alert(pog);
  if (confirm.innerHTML=="GO TO BED"){
    next.href="../level4/level4.html";
  }

  confirm.innerHTML="GO TO BED";
}

affirmation.addEventListener("click", ()=>{
  hospital.checked = false
});

hospital.addEventListener("click", ()=>{
  affirmation.checked = false
  alert("word")
});


// confirm.addEventListener('click', () => {
//   if (confirm.innerHTML=="GO TO BED"){
//       next.href="../level4/level4.html"
//   }
//   confirm.innerHTML="GO TO BED";
//   position.innerHTML=""
  
//   if (affirmation.checked){
//     if(o.localeCompare("Uplifting") == 0){
//       // cohere return is good
//       text1.innerHTML = "You hit the nail on the head! You recognized the severity of"
//       text2.innerHTML = "Sheeper's condition and acted accordingly."
//     }else{
//       //cohere return is bad
//       text1.innerHTML = "Good thinking, you recognized the severity of Sheeper's"
//       text2.innerHTML = "condition. Try a gentler delivery next time."
//     }


//   }else{
//     text1.innerHTML = "Unfortunately, hospitals are at 100% capacity and there is "
//     text2.innerHTML = "no one to tend to Sheeper. They had to go home."

//   }
// });