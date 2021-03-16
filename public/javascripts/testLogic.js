console.log(wors)
const buttons = document.querySelectorAll("button");
const correctAnswer = document.querySelector("#correct");
const wrongAnswer = document.querySelector("#wrong");
let correct = 0;
let wrong = 0; 
for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener("click", function() {
        if(buttons[i].innerHTML === words[correctWord].english){
        correct += 1;
        correctAnswer.innerHTML= `Correct Answer: ${correct}` 
    } else{
        wrong +=1;
        wrongAnswer.innerHTML = `Wrong Answer: ${wrong}`
    }
})
}

