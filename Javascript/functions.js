function greet(name) {
  return `hello ${name}`;
}

function sum(num1,num2) {
  return `sum of numbers: ${num1+num2} `;
}
const squareNum = (num) =>{
    return num * num;
}
const average = (arr) =>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return `average of an array ${sum/arr.length}`;
}
const vowles = (name) =>{
    for(let i = 0;i<name.length;i++){
        if(name.charAt(i) == 'a' || name.charAt(i) == 'e'||name.charAt(i) == 'i'||name.charAt(i) == 'o'||name.charAt(i) == 'u'){
            return true;
        }
    }
    return false;
}
console.log(greet("Raviteja sir"));
console.log(sum(12,2));
console.log(squareNum(12));
console.log(average([2,5,2]));
console.log(vowles("Lkshmn"))