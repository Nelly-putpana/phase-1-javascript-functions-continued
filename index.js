// code your solution here
//function declaration
function saturdayFun(activity = "roller-skate") {
    const firstParameter = "dance";
    if (firstParameter === "dance")
    return `This Saturday, I want to ${activity}!`;
}

//function expression

const mondayWork = function (activity = "go to the office"){
    const myFirstParameter = "work from home.";
    if (myFirstParameter === "work from home.")
    return `This Monday, I will ${activity}.`;

}

// function 
function  wrapAdjective (mydefault = "*") {
    return function (message = "special") {
        return `You are ${mydefault}${message}${mydefault}!`
    };
}
wrapAdjective("||")("a dedicated programmer");