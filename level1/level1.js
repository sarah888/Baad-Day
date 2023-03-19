const checkBox = document.getElementById("potato");
const button = document.getElementById("poo");

var decision = "";

checkBox.addEventListener('change', checkCheck);

function checkCheck(){
    if (this.checked) {
        decision = "Gently wake him up";
      } else {
        decision = "Let him sleep in";
      }
};

button.addEventListener('click', () => {
    if (button.innerHTML=="GO PACK LUNCH"){
        next.href="../end/end.html"
    }
    validate1();
    validate2();
    validate3();
    validate4();
    validate5();
    score = good/bad;
    confirm.innerHTML="GO PACK LUNCH";
    alert(score);

});