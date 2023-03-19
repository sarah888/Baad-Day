var button = document.getElementById("next");
button.addEventListener('click',nextImage);

var message = document.getElementById("endMessage");

var background = document.getElementById("bg");

var buttonCounter = 0;

function nextImage(){
    buttonCounter += 1;
    if(buttonCounter==1){
        background.style.backgroundImage = "url('endScene1.png')";
    }
    else if(buttonCounter==2){
        background.style.backgroundImage = "url('endScene2.png')";
    }
    else if(buttonCounter==3){
        background.style.backgroundImage = "url('endScene3.png')";
    }
    else if(buttonCounter==4){
        message.innerHTML = "Thank you for making Sheeper Happy!"
    }
}