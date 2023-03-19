let affirmation = document.getElementById("checkbox1");
let hospital = document.getElementById("checkbox2");

const confirm = document.getElementById("confirm");
const next = document.getElementById("next");

const cohere = require('cohere-ai'); // This is your trial API key
cohere.init('yhlIG1WYyeUVrAJ2NzhQwYKnghq6sbs8DfWCPulm');

var o = (async () => {
  const response = await cohere.classify({
    model: 'large',
    inputs: ["You got this, keep pushing through and reach out to me if you ever need help", "You\'re young, so much room to grow, don\'t stress too much about it.", "I\'m not really sure what to do for you, I think you should find help elsewhere", "I don\'t really know anything about mental health but I know that if you don\'t address them then that\'s probably okay"],
    examples: [{"text": "You have so much life to live, keep going and pushing through.", "label": "Uplifting"}, {"text": "You are strong enough to overcome any challenge life throws your way", "label": "Uplifting"}, {"text": "Your past does not define your future; you have the power to create a new and better reality for yourself", "label": "Uplifting"}, {"text": "You are not alone, and it\'s okay to reach out for help when you need it", "label": "Uplifting"}, {"text": "Believe in yourself and your ability to get through this difficult time.", "label": "Uplifting"}, {"text": "Remember that setbacks are just temporary, and you have the strength to bounce back even stronger.", "label": "Uplifting"}, {"text": "Your mental health matters, and taking care of yourself is a sign of strength, not weakness", "label": "Uplifting"}, {"text": "Your struggles do not define your worth; you are valuable and deserving of love and respect", "label": "Uplifting"}, {"text": "Every small step you take towards healing and recovery is a step in the right direction", "label": "Uplifting"}, {"text": "You are capable of achieving your goals and living the life you desire.", "label": "Uplifting"}, {"text": "You are deserving of happiness and joy, and you have the power to create a fulfilling and meaningful life", "label": "Uplifting"}, {"text": "You need to stop being lazy and get yourself up and do something with your life", "label": "Degrading"}, {"text": "Fix yourself and just try harder next time since you are obviously not doing enough with yourself", "label": "Degrading"}, {"text": "You don\'t know what you\'re doing and need to just start doing better, no excuses", "label": "Degrading"}, {"text": "This is the reality of life, either deal with it and avoid it or get depressed and end up being stuck", "label": "Degrading"}, {"text": "I don\'t want to help you, you are not my problem", "label": "Degrading"}, {"text": "I have other issues to deal with and you are not worth my time, handle your own problems yourself", "label": "Degrading"}, {"text": "I don\'t care about you and you should go figure this out on your own. Mental health doesn\'t matter and it never did.", "label": "Degrading"}, {"text": "I really hate advocating for mental health, I think it\'s useless and does not solve personal issues \n\n", "label": "Degrading"}, {"text": "You need to suppress your feelings if you are going through a bad and rough mental patch, you need to move on. Dwelling on things doesn\'t solve anything and you need to man up and be stronger.", "label": "Degrading"}, {"text": "I don\'t know, I don\'t know how to help you so you should move on", "label": "Neutral"}, {"text": "I don\'t know, you should find help somewhere else and I don\'t know how to support you", "label": "Neutral"}, {"text": "You can do some research on the internet", "label": "Neutral"}, {"text": "You should go to the doctor to get more help", "label": "Neutral"}]
  });
  console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);
})();

confirm.addEventListener('click', () => {
  if (confirm.innerHTML=="GO TO BED"){
      next.href="../level4/level4.html";
  }
  confirm.innerHTML="GO TO BED";
  alert(o);
});


affirmation.addEventListener("click", ()=>{
  hospital.checked = false
})

hospital.addEventListener("click", ()=>{
  affirmation.checked = false
  alert("word")
})


confirm.addEventListener('click', () => {
  if (confirm.innerHTML=="GO TO BED"){
      next.href="../level4/level4.html"
  }
  confirm.innerHTML="GO TO BED";
  position.innerHTML=""
  
  if (affirmation.checked){
    if(o.localeCompare("Uplifting") == 0){
      // cohere return is good
      text1.innerHTML = "You hit the nail on the head! You recognized the severity of"
      text2.innerHTML = "Sheeper's condition and acted accordingly."
    }else{
      //cohere return is bad
      text1.innerHTML = "Good thinking, you recognized the severity of Sheeper's"
      text2.innerHTML = "condition. Try a gentler delivery next time."
    }


  }else{
    text1.innerHTML = "Unfortunately, hospitals are at 100% capacity and there is "
    text2.innerHTML = "no one to tend to Sheeper. They had to go home."

  }
});