
//how to make random number odd or even

//how to add array 
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
//

// Variables and Arrays
var jewel1 = 1 + Math.floor(Math.random() * 10);
var jewel2 = 1 + Math.floor(Math.random() * 5);
var jewel3 = 1 + Math.floor(Math.random() * 7);
var jewel4 = 1 + Math.floor(Math.random() * 1);
var randomGameNum = 1 + Math.floor(Math.random() * 70);
var sum = 0;
var playerNum = [];



// Counters
var winCount = 0;
var lossCount = 0;

$(document).on('click', function () {
    $("#numberBoard").text(randomGameNum);
})

function win() {
    if (randomGameNum === sum) {
        winCount += 1;
        $("#wins").text(winCount);
        alert("you WIN!!!")
        reset();
    }

}

function lose() {
    if (randomGameNum < sum) {
        lossCount += 1;
        $("#losses").text(lossCount);
        alert("You Lost!!!")
        reset();

    }
}



function addArray() {
    sum = 0
    for (i = 0; i < playerNum.length; i++) {
        sum += playerNum[i];

    }
    $("#guessBoard").text(sum);
    win();
    lose();
}

function reset() {
    jewel1 = 1 + Math.floor(Math.random() * 10);
    jewel2 = 1 + Math.floor(Math.random() * 5);
    jewel3 = 1 + Math.floor(Math.random() * 7);
    jewel4 = 1 + Math.floor(Math.random() * 1);
    randomGameNum = 1 + Math.floor(Math.random() * 70);
    sum = 0;
    playerNum.length = 0;
    alert("this is running")
    $("#guessBoard").text(sum);
    $("#numberBoard").text(randomGameNum);

}

// event listner for element button

$(document).on('click', '.button1', function () {
    // push to array
    console.log(randomGameNum);
    playerNum.push(jewel1);
    addArray();



});

$(document).on('click', '.button2', function () {
    console.log(jewel2);
    // push to array
    playerNum.push(jewel2);
    addArray();



});

$(document).on('click', '.button3', function () {
    console.log(jewel3);
    // push to array
    playerNum.push(jewel3);
    addArray();



});

$(document).on('click', '.button4', function () {
    console.log(jewel4);
    // push to array
    playerNum.push(jewel4);
    addArray();



});
