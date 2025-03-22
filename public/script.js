const mainFunction = (expression) => { 
    return math.evaluate(expression);
    
}












// result

let result = document.getElementById("result");
result.textContent = "0";

// numbers buttons
let numberOne = document.getElementById("num1");
let numberTwo = document.getElementById("num2");
let numberThree = document.getElementById("num3");
let numberFour = document.getElementById("num4");
let numberFive = document.getElementById("num5");
let numberSix = document.getElementById("num6");
let numberSeven = document.getElementById("num7");
let numberEight = document.getElementById("num8");
let numberNine = document.getElementById("num9");
let numberZero = document.getElementById("num0");


//operators buttons
let plus = document.getElementById("add");
let minus = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let percent = document.getElementById("percent");
let plusMinus = document.getElementById("plusMinus"); ///last
let decimal = document.getElementById("decimal");
let sqrt = document.getElementById("sqrt");



//result buttons
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");




// numbers buttons listeners

numberOne.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "1";
});
numberTwo.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "2";
});
numberThree.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "3";
});
numberFour.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "4";
});
numberFive.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "5";
});
numberSix.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "6";
});
numberSeven.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "7";
});
numberEight.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    
    result.textContent += "8";
});
numberNine.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "9";
});
numberZero.addEventListener("click", function () {
    if (result.textContent === "0") {
        result.textContent = "";
        clear.textContent="⬅︎";
    }
    result.textContent += "0";
});

// operators buttons listeners
// changing the AC to backspace

// let erase=function(){
//     clear.textContent="backspace";
// }



result.addEventListener("input", () => {
    console.log("result content changed!");
});

//////////////////

plus.addEventListener("click", function () {
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/" || result.textContent.slice(-1) === "%") {
        return;
    }
    result.textContent += "+";
    clear.textContent="⬅︎";
    
});
minus.addEventListener("click", function () {
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/" || result.textContent.slice(-1) === "%") {
        return;
    }
    result.textContent += "-";
    clear.textContent="⬅︎";
    
});
multiply.addEventListener("click", function () {
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/" || result.textContent.slice(-1) === "%") {
        return;
    }
    result.textContent += "*";
    clear.textContent="⬅︎";
    
});
divide.addEventListener("click", function () {
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/" || result.textContent.slice(-1) === "%") {
        return;
    }
    result.textContent += "/";
    clear.textContent="⬅︎";
    
});
percent.addEventListener("click", function () {
    if (result.textContent.slice(-1) === "+" || result.textContent.slice(-1) === "-" || result.textContent.slice(-1) === "*" || result.textContent.slice(-1) === "/" || result.textContent.slice(-1) === "%") {
        return;
    }
    result.textContent += "%";
    clear.textContent="⬅︎";
    
});
decimal.addEventListener("click", function () {
    if (result.textContent.slice(-1) === ".") {
        return;
    }
    result.textContent += ".";
    clear.textContent="⬅︎";
    
});

// result buttons listeners

let allclear=function () {
    result.textContent = "0";
    clear.textContent="AC";
}

const backspaceFunction=() => {
    if(result.textContent.length === 1){
        result.textContent = "0";
        clear.textContent="AC";
    }
    else{
        result.textContent = result.textContent.slice(0, -1);
        clear.textContent="⬅︎";
    }
}

equals.addEventListener("click", function () {
    result.textContent = mainFunction(result.textContent);
    clear.textContent="AC";


});
clear.addEventListener("click", function () {
    if (clear.textContent === "AC") {
        allclear();
        return;
    }
    backspaceFunction();
});

sqrt.addEventListener("click", function() {
    if (result.textContent !== "0") {
        result.textContent = math.sqrt(parseFloat(result.textContent));
        clear.textContent = "AC";
    }
});

