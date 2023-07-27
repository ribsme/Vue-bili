// 语法糖
// var name = "H";
// var age = 19;
// var person = {
//     age,
// };

// console.log(person);

// var person = {
//     name:"H",
//     age:18,
//     sayHello:function(){
//         console.log("你好");
//     },
// };

// person.sayHello();

var person = {
    name : "H",
    age : 18,
};
var str1 = "my name is " + person.name + "\n my age is" + person.age;

var str2 = `my name is ${person.name}
my age is ${person.age}`;

console.log(str2);