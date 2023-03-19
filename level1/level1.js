const checkBox = document.getElementById("potato");

checkBox.addEventListener('change', checkCheck);

function checkCheck(){
    if (this.checked) {
        alert("Checkbox is checked..");
      } else {
        alert("Checkbox is not checked..");
      }
};