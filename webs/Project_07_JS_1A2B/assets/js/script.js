function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandom(1, 100));

// for (let i = 0; i < 100; i++) {
//     process.stdout.write(getRandom(0, 9) + ', ');
// }
let user_guess_input = document.querySelector('.user-guess'); //這就是使用者輸入的框框
var A = 0;
var B = 0;

console.log(document.querySelector('.btn-start'));
document.querySelector('.btn-start').addEventListener('click', gameStart); //我將requestJSON交給click處理（指派這個function）（委派
document.querySelector('.btn-reset').addEventListener('click', gameReset);
document.querySelector('.btn-ans').addEventListener('click', lookAns);
document.querySelector('.btn-user-guess').addEventListener('click', userGuess);

// window.onload()

var guessAns = '';
function gameStart() {
    gameReset();
    let set = new Set(); //Set()是一個物件，因為有()

    while (set.size < 4) {
        var random_num = getRandom(0, 9);
        set.add(random_num);
    }

    guessAns = ''; //清空原有答案
    for (let item of set) {
        //舉例：set像玩具箱，item是裡面的玩具
        guessAns = guessAns + item; //寫法一
        // guessAns += item;  //寫法二

        // console.log(item);
    }

    // document.querySelector('.guessAns').innerText = '<b>123</b>';
    // document.querySelector('.guessAns').innerHTML = '<b>123</b> 123';
}

function gameReset() {
    document.querySelector('.guessAns').innerText = '';
    var A = 0;
    var B = 0;
}

function lookAns() {
    document.querySelector('.guessAns').innerText = guessAns; //guessAns遊戲的答案
}
function userGuess() {
    var user_guess = user_guess_input.value; //使用者猜的四個數字

    for (let i = 0; i < guessAns.length; i++) {
        for (let j = 0; j < user_guess.length; j++) {
            if (guessAns[i] == user_guess[j] && i == j) {
                //這是判斷A

                A++; //計算幾A
            } else if (guessAns[i] == user_guess[j]) {
                //這是判斷B

                B++; //計算幾B
            }
        }
    }
    var guess_history = document.createElement('span');
    guess_history.innerText = user_guess;
    var guess_check = document.createElement('span');
    guess_check.innerHTML = `  ${A}A${B}B<br>`;
    document.querySelector('.user-guess-history').appendChild(guess_history);
    document.querySelector('.user-guess-history').appendChild(guess_check);
    if (A == 4) {
        alert('恭喜過關');
    }
}

// .user-guess是html裡的class，html裡命名通常是用dash(中線)，而不是用underline(底線)。
// 底線通常是用在js
user_guess_input.addEventListener('input', (e) => {
    var user_guess = user_guess_input.value;
    var previous_input_content = user_guess.substring(0, user_guess.length - 1);

    if (previous_input_content.includes(e.data) == true) {
        user_guess_input.value = previous_input_content;
    }

    // logMessage(`Key "${e.data}" input  [event: input]`);
    // alert(e.data)  //這是做一個測試
});
