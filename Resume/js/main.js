//  TypeWrite Effect
let myText = document.querySelector('#subtitle');
let words = ['web designer', 'developer', 'freelancer'];
let i = 0;
let timer = 0;

function typingEffect(){
    let word = words[i].split("");
    var loopTyping = function(){
        if(word.length > 0){
            myText.innerHTML += word.shift();
        }else{
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 600);
    }
    loopTyping();
}

function deletingEffect(){
    let word = words[i].split("");
    var loopDeleting = function(){
        if(word.length > 0){
            word.pop();
            myText.innerHTML = word.join("");
        }else{
            if(words.length > (i+1)){
                i++;
            }else{
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 200);
    }
    loopDeleting();
}

typingEffect();

//  Progress bar
const spans = document.querySelector('.skill-box .progress span');
spans.forEach((span) => {
    span.style.width = span.dataset.progress;
});

// Circular Progress bar
let numbers = document.querySelectorAll('.progress .num'),
    progressBar = document.querySelectorAll('.progress .progress-bar'),
    startValue = Array(numbers.length),
    intervals = Array(numbers.length),
    speed = 75;
    startValue.fill(0);

numbers.forEach((num, i) => {
    intervals[i] = setInterval(() =>{
        if(startValue[i] === parseInt(num.dataset.num)){
            clearInterval(intervals[i])
        }else{
            startValue[i] += 1;
            num.innerHTML = `${startValue[i]}%`;
            progressBar[i].style.background = `conic-gradient(
                #78cc6d ${startValue[i] * 3.6}deg,
                #eeeeee ${startValue[i] * 3.6}deg
            )`;
        }
    }, speed);
});