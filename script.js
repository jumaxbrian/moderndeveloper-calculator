
function getScreenInputNode() {
    var input = document.getElementById("screen-input");
    input = input.childNodes[1]
    return input
}

function updateScreenInput(strInput) {
    var input = getScreenInputNode();
    input.value = strInput;
}

function getScreenInput() {
    var input = getScreenInputNode();
    return input.value
}

function resetScreenInput() {
    var input = getScreenInputNode();
    input.value = 0;
}

function clearScreenInput() {
    var input = getScreenInputNode();
    input.value = "";
}

function removeLastCharOnScreenInput() {
    var input = getScreenInputNode(),
        inputLen = input.value.length;
    if (inputLen > 1) {
        input.value = input.value.substr(0, --inputLen);
    } else {
        resetScreenInput();
    }

}

function evaluateInput() {
    var strInputNode = getScreenInputNode(),
        output = eval(strInputNode.value);

    strInputNode.value = output;

}

function keyPress(buttonPressed) {
    var strInput = getScreenInput();

    //clear the 0 before input
    if (strInput === '0') {
        strInput = "";
    }

    switch (buttonPressed) {
        case '0':
            strInput += '0';
            break;
        case '1':
            strInput += '1';
            break;
        case '2':
            strInput += '2';
            break;
        case '3':
            strInput += '3';
            break;
        case '4':
            strInput += '4';
            break;
        case '5':
            strInput += '5';
            break;
        case '6':
            strInput += '6';
            break;
        case '7':
            strInput += '7';
            break;
        case '8':
            strInput += '8';
            break;
        case '9':
            strInput += '9';
            break;
        case '+':
            strInput += '+';
            break;
        case '-':
            strInput += '-';
            break;
        case '*':
            strInput += '*';
            break;
        case '/':
            strInput += '/';
            break;
        case '.':
            strInput += '.';
            break;
        case 'DEL':
            strInput += 'DEL';
            break;
    }

    updateScreenInput(strInput);

}