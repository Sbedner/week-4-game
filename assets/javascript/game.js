
//JS for crystal challenge game

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

// Generate random game number onclick and update html
$(document).on('click', function () {
    $("#numberBoard").text(randomGameNum);
})

// Win game function
function win() {
    if (randomGameNum === sum) {
        winCount += 1;
        $("#wins").text(winCount);
        alert("you WIN!!!")
        reset();
    }

}

// Lose game function
function lose() {
    if (randomGameNum < sum) {
        lossCount += 1;
        $("#losses").text(lossCount);
        alert("You Lost!!!")
        reset();

    }
}



// function to sum total of player numbers
function addArray() {
    sum = 0
    for (i = 0; i < playerNum.length; i++) {
        sum += playerNum[i];

    }
    // update html with player number
    $("#guessBoard").text(sum);
    win();
    lose();
}

// Resets game for next round
function reset() {
    jewel1 = 1 + Math.floor(Math.random() * 12);
    jewel2 = 1 + Math.floor(Math.random() * 12);
    jewel3 = 1 + Math.floor(Math.random() * 12);
    jewel4 = 1 + Math.floor(Math.random() * 12);
    randomGameNum = 1 + Math.floor(Math.random() * 120);
    sum = 0;
    playerNum.length = 0;
    alert("GET READY TO PLAY AGAIN!!!")
    $("#guessBoard").text(sum);
    $("#numberBoard").text(randomGameNum);

}

// event listner for element buttons. 
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
