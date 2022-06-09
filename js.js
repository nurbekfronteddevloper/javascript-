const arr = [2, 4, 5, 6];
const arr1 = [1, 9, 6, 9];
const result = arr.concat(arr1);
console.log(result);
//find
const findValue = (number) => number === 5;
const foundValue = result.find(findValue);
console.log(foundValue);//5
const filterValues = number => number > 5;
const filteredValues = result.filter(filterValues);
console.log(filteredValues); // 7;



const mapValues = number => 'Son: ' + number;
const mappedValues = result.map(mapValues);
console.log(mappedValues); // ['Son: 1', 'Son: 4', ...]
const sortValues = (number1, number2) => number1 - number2;
result.sort();
console.log(result); // [1, 2, 3, 4, 7];
