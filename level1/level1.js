const checkBox = document.getElementById("potato");

var decision = "";

checkBox.addEventListener('change', checkCheck);

function checkCheck(){
    if (this.checked) {
        decision = "Gently wake him up";
      } else {
        decision = "Let him sleep in";
      }
};