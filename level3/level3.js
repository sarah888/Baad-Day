let affirmation = document.getElementById("checkbox1");
let hospital = document.getElementById("checkbox2");

const confirm = document.getElementById("confirm");
const next = document.getElementById("next");


// var o = "";

// confirm.addEventListener('click', buttonActivate);
// function buttonActivate(){
//   if (confirm.innerHTML=="GO TO BED"){
//     next.href="../level4/level4.html";
//   }
  
//   confirm.innerHTML="GO TO BED";
// }



// const settings = {
//   async: true,
//   crossDomain: true,
//   url: 'https://api.cohere.ai/v1/classify',
//   method: 'POST',
//   headers: {
//     accept: 'application/json',
//     'content-type': 'application/json',
//     authorization: 'Bearer yhlIG1WYyeUVrAJ2NzhQwYKnghq6sbs8DfWCPulm'
//   },
//   processData: false,
//   data: '{"inputs":["Confirm your email address","hey i need u to send some $"],"examples":[{"text":"Dermatologists don\'t like her!","label":"Spam"},{"text":"Hello, open to this?","label":"Spam"},{"text":"I need help please wire me $1000 right now","label":"Spam"},{"text":"Nice to know you ;)","label":"Spam"},{"text":"Please help me?","label":"Spam"},{"text":"Your parcel will be delivered today","label":"Not spam"},{"text":"Review changes to our Terms and Conditions","label":"Not spam"},{"text":"Weekly sync notes","label":"Not spam"},{"text":"Re: Follow up from today’s meeting","label":"Not spam"},{"text":"Pre-read for tomorrow","label":"Not spam"}],"truncate":"END"}'
// };

// $.ajax(settings).done(function (response) {
//   alert(response);
// });


affirmation.addEventListener("click", ()=>{
  hospital.checked = false
})

hospital.addEventListener("click", ()=>{
  affirmation.checked = false
})


confirm.addEventListener('click', () => {
  if (confirm.innerHTML=="GO TO BED"){
      next.href="../level4/level4.html"
  }
  confirm.innerHTML="GO TO BED";
  
  if (affirmation.checked){
    // if(o.localeCompare("Uplifting") != 0){
    //   alert("1")
    //   // cohere return is good
    //   text1.innerHTML = "You hit the nail on the head! You recognized the severity of"
    //   text2.innerHTML = "Sheeper's condition and acted accordingly."
    // }else{
      //cohere return is bad
      text1.innerHTML = "Good thinking, you recognized the severity of Sheeper's condition."
      text2.innerHTML = "Try a gentler delivery next time."
    // }
  }else{
    text1.innerHTML = "Unfortunately, hospitals are at 100% capacity and there is "
    text2.innerHTML = "no one to tend to Sheeper. They had to go home."

  }
});