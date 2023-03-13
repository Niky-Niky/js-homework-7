const javaScript = function(statement){
return statement
}
console.log(javaScript("Привіт JavaScript"));

const hello2 = function(name){
    return name
}
console.log(hello2("Vasyl"));

const mul = function(n, m){
    return n + m
}
console.log(mul(5, 6));

const myNewArrowFunction = (...args) => {
    const arr = [...args]
    return arr
}
console.log(myNewArrowFunction(1, 2, 3));
console.log(myNewArrowFunction(100, 200, 300, 400, 500));
console.log(myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"));

const myAverageScore = function (items) {
   console.log(items)
   let total = 0
   let score = 0
    // let message
for(const item of items){
total += item;
}
score = total / items.length
console.log(score);
console.log(total);
if(score >= 91 && score <= 100){
    message = "Your score is A"
} else if(score >= 81 && score <= 90){
    message = "Your score is B"
} else if(score >= 71 && score <= 80){
    message = "Your score is C"
} else {
    message = "Your score is D"
}
return message
}
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
