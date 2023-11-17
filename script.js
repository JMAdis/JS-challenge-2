// Question 1
function isNumberPositive(number) {
    return number > 0;
}
console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

//Question 2
function convertDaysToAge(days) {
    return Math.floor(days / 365);
}
console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18

//Question 3
function getLargestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(getLargestNumber(2, 1, 4)); // returns 4
console.log(getLargestNumber(6, 2, 3)); // returns 6

//Question 4
function getLastName(names) {
    return names[names.length - 1];
}

console.log(getLastName(["Charlie", "Rob", "Andy"])); // returns "Andy"
console.log(getLastName(["Ash", "Stu"])); // returns "Stu"

//Question 5
function allNumbersPositive(numbers) {
    return numbers.every(function(num) {
        return num > 0;
    });
}

console.log(allNumbersPositive([2, 4, 5])); // returns true
console.log(allNumbersPositive([-5, 4, 6])); // returns false
