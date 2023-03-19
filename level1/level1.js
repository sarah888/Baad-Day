const checkBox = document.getElementById("switch");
const next = document.getElementById("next");
const confirm = document.getElementById("confirm");
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const text4 = document.getElementById("text4")
const text5 = document.getElementById("text5")
const position = document.getElementById("position1")

var decision = "";

checkBox.addEventListener('change', checkCheck);

function checkCheck(){
    if (this.checked) {
        decision = "Gently wake him up";
      } else {
        decision = "Let him sleep in";
      }
};

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