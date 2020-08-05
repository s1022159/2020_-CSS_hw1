function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandom(1, 100));

// for (let i = 0; i < 100; i++) {
//     process.stdout.write(getRandom(0, 9) + ', ');
// }
console.log(document.querySelector(".btn-start"))
document.querySelector(".btn-start").addEventListener('click', gameStart); //我將requestJSON交給click處理（指派這個function）（委派

// window.onload()

function gameStart() {
    let set = new Set(); //Set()是一個物件，因為有()

    while (set.size < 4) {

        var random_num = getRandom(0, 9);
        set.add(random_num);

    }
    //目標: set.size = 4

    // for (let i = 0; i < 4; i++) {
    //     var random_num = getRandom(0, 9);
    //     set.add(random_num);
    // }

    // for (let item of mySet) console.log(item);
    // console.log(set.size);
    var FourNum = '';
    for (let item of set) { //舉例：set像玩具箱，item是裡面的玩具
        FourNum = FourNum + item; //寫法一
        // FourNum += item;  //寫法二

        // console.log(item);  
    }
    document.querySelector('.guessAns').innerText = FourNum;



    // document.querySelector('.guessAns').innerText = '<b>123</b>';
    // document.querySelector('.guessAns').innerHTML = '<b>123</b> 123';

}