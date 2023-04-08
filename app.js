//truthy and falsy - выражения
//falsy -> false, 0, "",'', undefined, null, NaN, -0, 0n
var element = ""
console.log(element === true ? 'true' : 'false')


//join - метод массива
var arr = [1,2,3,4,5]
var newArr = arr.join('-')
console.log(typeof newArr);

for(var i = 0; i < 10; i++){
    console.log(Array(i).fill("*").join(''));
}

//filter
var users = [
    {name: 'Adam', age:34},
    {name: 'John', age:12},
    {name: 'OptimusPrime', age:23},
    {name: 'Putin', age:17},
    {name: 'Rasputin', age:18},
    {name: 'Hasbik', age:26}
]
var result =users.filter(user => user.name.includes('p'))
console.log(result);
var result2 = users.filter(user => user.age > 20)
console.log(result2);


//map
var soms = [3000, 50000, 78000, 678000]
var dollars =soms.map(som => som / 86)
console.log(dollars);
var result3 = dollars.map(i => i.toFixed(1))
console.log(result3);

//forEach
var names =  ['John', 'Jack', 'Tim']
for(var i=0; i< names.length; i++){
    console.log(names[i]);
}

names.forEach((i) => {
    console.log(i);
})

var numbers = [1,2,3,4,5,6,7,8,9876,5]
numbers.forEach(function(i) {
    var result = i ** 2
    console.log(`${i} - ${result}`);
})


//for..of
var array = [2,2,22,2,2,3,3,3,3,6,6,6,6,6,7,8,8,9,87,9,5,55,9999,555555,]


var fruits = ["apple", "cherry", 'banana']
for(var fruit of fruits){
    console.log(fruit.toUpperCase()); 
}

































