// Tapşırıq-01
// const user = {
//     name: "Medine",
//     gender: "Famale",
//     birthday: "26.01.2010"
// }
// document.write(user.birthday);


// Tapşırıq-03
// User = {
//   name: "Ali",
//   age: 27,
// };

// User.setAge = function (newAge) {
//   this.age = newAge;
// };

// User.getYearsBeforeRetirement = function () {
//   const retirementAge = 65;
//   return retirementAge - this.age > 0 ? retirementAge - this.age : 0;
// };

// console.log(`İstifadəçinin yaşı: ${User.age}`);

// User.setAge(47);
// console.log(`Yeni yaş: ${User.age}`);

// const yearsLeft = User.getYearsBeforeRetirement();
// console.log(`Pensiyaya qədər qalan illər: ${yearsLeft}`);

// Tapşırıq-04
// const Calculator = {
//   memory: 0,

//   toplama: function (value) {
//     this.memory += value;
//     return this.memory;
//   },

//   cixma: function (value) {
//     this.memory -= value;
//     return this.memory;
//   },

//   vurma: function (value) {
//     this.memory *= value;
//     return this.memory;
//   },

//   bolme: function (value) {
//     if (value === 0) {
//       console.error("Error: Division by zero is not allowed.");
//       return this.memory;
//     }
//     this.memory /= value;
//     return this.memory;
//   },

//   reset: function () {
//     this.memory = 0;
//     return this.memory;
//   },

//   getMemory: function () {
//     return this.memory;
//   }
// };

// console.log(Calculator.toplama(10));
// console.log(Calculator.cixma(2));
// console.log(Calculator.vurma(3));
// console.log(Calculator.bolme(4));
// console.log(Calculator.getMemory());
// Calculator.reset();
// console.log(Calculator.getMemory()); 