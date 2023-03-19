let affirmation = document.getElementById("checkbox1");
let hospital = document.getElementById("checkbox2");

const confirm = document.getElementById("confirm");

confirm.addEventListener('click', buttonActivate);
function buttonActivate(){
  if (confirm.innerHTML=="GO TO BED"){
    next.href="../level4/level4.html";
  }
  
  confirm.innerHTML="GO TO BED";
}



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
  alert("word")
})


confirm.addEventListener('click', () => {
  if (confirm.innerHTML=="GO TO LUNCH"){
      next.href="../level2/level2.html"
  }
  confirm.innerHTML="GO TO LUNCH";
  position.innerHTML=""
  
  if (checkBox.checked){
    text1.innerHTML = "Although this is an intriguing option, it is important to "
    text2.innerHTML = "understand that sleeping in is a short-term pleasure and "
    text3.innerHTML = "will not benefit Sheeper in the long-term, especially if "
    text4.innerHTML = "they are truly passionate about being an active member "
    text5.innerHTML = "on student council."
  }else{
    text1.innerHTML = "Right on the money! Sleeping in can decrease productivity and"
    text2.innerHTML = "increase the risk of developing depression or other mood"
    text3.innerHTML = "disorders. Now, Sheeper can successfully prepare and "
    text4.innerHTML = "ace his interview!"
  }
});