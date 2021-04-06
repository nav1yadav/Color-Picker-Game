var totalSquares = 9;
var colors = generateRandomColor(totalSquares);
var boxes = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var comment = document.querySelector("#comment");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");

var pickedColor = randomPickedColor();
displayColor.textContent = pickedColor;

for(var i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = colors[i];

    boxes[i].addEventListener("click", function(){
        var clickedBox = this.style.backgroundColor;
        if(pickedColor === clickedBox){
            win();
            resetButton.textContent = "Play Again ?"
            h1.style.backgroundColor = pickedColor;
            comment.textContent = "YOU WIN!!"
        }
        else{
            this.style.backgroundColor = "#232323";
            comment.textContent = "TRY AGAIN!!"
        }
    });
};

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    medium.classList.remove("selected");
    hard.classList.remove("selected");
    totalSquares = 3
    reset();
});

medium.addEventListener("click", function(){
    easy.classList.remove("selected");
    medium.classList.add("selected");
    hard.classList.remove("selected");
    totalSquares = 6;
    reset();
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    medium.classList.remove("selected");
    hard.classList.add("selected");
    totalSquares = 9;
   reset();
});

resetButton.addEventListener("click", function(){
   reset();
});

function reset(){
    colors = generateRandomColor(totalSquares);
    pickedColor = randomPickedColor();
    displayColor.textContent = pickedColor ;
    h1.style.backgroundColor = "steelblue" ; 
    resetButton.textContent = "New Colors";
    comment.textContent = "";
    for(i=0; i< boxes.length; i++){
        if(colors[i]){
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].style.display = "block";
        }
        else{
            boxes[i].style.display = "none";
        }
    }
}

function win(){
    for(i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = pickedColor;
    }
}

function randomPickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];
    for(i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}