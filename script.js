// existing code
let question1 = {
    title: 'gato',
    alternatives: [
    'dog', 
    'cat', 
    'bird', 
    'fish'
],
    correctAnswer: 1
};

let question2 = {
    title: 'perro',
    alternatives: [
    'dog', 
    'cat', 
    'bird', 
    'fish'
],
    correctAnswer: 0
};

let question3 = {
    title: 'pajaro',
    alternatives: [
    'dog', 
    'cat', 
    'bird', 
    'fish'
],
    correctAnswer: 2
};

let question4 = {
    title: 'pez',
    alternatives: [
    'dog', 
    'cat', 
    'bird', 
    'fish'
],
    correctAnswer: 3
};
const questions = [question1, question2, question3, question4];

let count = 0;
// existing code
function showQuestion() {
    // existing code
    let q = questions[count];
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    let answerDiv = document.getElementById("answer");

    // existing code
    let alts = document.querySelectorAll('.alternative');

    function right() {
        console.log('Correct Answer!');
        answerDiv.textContent = "Correct Answer!";
        var r = document.getElementById('answer');
        r.style.color = 'green';
    }

    function wrong() {
        console.log('Wrong Answer!');
        answerDiv.textContent = "Wrong Answer!";
        var w = document.getElementById('answer');
        w.style.color = 'red';
    }
    // modified code
    alts.forEach(function(element, index) {
        // existing code
        element.textContent = q.alternatives[index];
        // new code
        element.addEventListener('click', function() {
            if (q.correctAnswer == index) {
                right()
            } else {
                wrong()
            }
        }, {once: true});
    });
    count = count + 1
if (count == 4) {
    count = 0;
}
console.log(count)
}

showQuestion();