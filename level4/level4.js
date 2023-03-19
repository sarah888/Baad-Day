let whiteNoise = document.getElementById("checkbox1");
let milk = document.getElementById("checkbox2");
let edm = document.getElementById("checkbox3");
let phone = document.getElementById("checkbox4");
let nyquil = document.getElementById("checkbox5");

let confirm = document.getElementById("confirm");
let next = document.getElementById("next")

var bad = 1
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
    score = good/bad;
    confirm.innerHTML="GO TO BED";
    alert(score);

});