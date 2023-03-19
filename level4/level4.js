let whiteNoise = document.getElementById("checkbox1");
let milk = document.getElementById("checkbox2");
let edm = document.getElementById("checkbox3");
let phone = document.getElementById("checkbox4");
let nyquil = document.getElementById("checkbox5");

let confirm = document.getElementById("confirm");
let next = document.getElementById("next")

const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")

var bad = 0
var good = 1
var score

function validate1() {
    if (whiteNoise.checked) {
        good +=1;
    }}

function validate2() {
    if (milk.checked) {
        good +=1;
    }}

function validate3() {
    if (edm.checked) {
        bad +=1;
    }}

function validate4() {
    if (phone.checked) {
        bad +=1;
    }}

function validate5() {
    if (nyquil.checked) {
        bad +=1;
    }}

confirm.addEventListener('click', () => {
    if (confirm.innerHTML=="GO TO BED"){
        next.href="../end/end.html"
    }
    
    validate1();
    validate2();
    validate3();
    validate4();
    validate5();
    confirm.innerHTML="GO TO BED";
    if (bad>0){
      text1.innerHTML = "That might disturb Sheeper’s sleep. But everyday is a new day,"
      text2.innerHTML = "and Sheeper is looking forward to tomorrow!"
    }else{
      text1.innerHTML = "Great idea! This will help Sheeper rest for a great day tomorrow."
    }
});