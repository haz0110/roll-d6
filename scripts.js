function refreshPage() {
    document.getElementById("left-container").className = "col-md-6 col-lg-6 a0110-background-reset";
    document.getElementById("right-container").className = "col-md-6 col-lg-6 a0110-background-reset";
    window.location.reload();
}

function hardRefreshPage() {
    document.getElementById("left-container").className = "col-md-6 col-lg-6 a0110-background-reset";
    document.getElementById("right-container").className = "col-md-6 col-lg-6 a0110-background-reset";
    window.location.href=window.location.href;
}

function integerToLiteral(integer) {
    if (integer === 1) {
        return "one";
    } else if (integer === 2) {
        return "two";
    } else if (integer === 3) {
        return "three";
    } else if (integer === 4) {
        return "four";
    } else if (integer === 5) {
        return "five";
    } else if (integer === 6) {
        return "six";
    }
}

function rollDice() {
    var rightDice = document.querySelectorAll("#dice-right");
    var leftDice = document.querySelectorAll("#dice-left");

    var rightDiceRandomizer = Math.floor(Math.random() * 6 + 1);
    var leftDiceRandomizer = Math.floor(Math.random() * 6 + 1);

    document.getElementById("dice-right").className = "fa-solid fa-dice-" + integerToLiteral(rightDiceRandomizer) + " fa-10x";
    document.getElementById("dice-left").className = "fa-solid fa-dice-" + integerToLiteral(leftDiceRandomizer) + " fa-10x";

    document.getElementById("left-container").className = "col-md-6 col-lg-6 a0110-background-reset";
    document.getElementById("right-container").className = "col-md-6 col-lg-6 a0110-background-reset";

    if (rightDiceRandomizer === leftDiceRandomizer) {
        document.getElementById("left-container").className = "col-md-6 col-lg-6 a0110-background-reset";
        document.getElementById("right-container").className = "col-md-6 col-lg-6 a0110-background-reset";
    } else if (rightDiceRandomizer > leftDiceRandomizer){
        document.getElementById("left-container").className = "col-md-6 col-lg-6 a0110-background-reset";
        document.getElementById("right-container").className = "col-md-6 col-lg-6 a0110-background-green";
    } else if (rightDiceRandomizer < leftDiceRandomizer) {
        document.getElementById("left-container").className = "col-md-6 col-lg-6 a0110-background-green";
        document.getElementById("right-container").className = "col-md-6 col-lg-6 a0110-background-reset";
    }
}