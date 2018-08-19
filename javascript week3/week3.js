// let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

console.log(myString.length);

myString = myString.replace(/,/g," ");
console.log(myString);
// ============================
  let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];             
console.log(favoriteAnimals);

favoriteAnimals.push('tutle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1,0, "meerkat");
console.log(favoriteAnimals);
// 2.7
console.log(favoriteAnimals.length);
// 2.8
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);

// 2.9
let index = favoriteAnimals.indexOf('meerkat');

console.log(index);

// 2.10
console.log('The item you are looking for is at index: '+ index);
-----------------------------------------------
function result(x,y) {
  if (typeof x === typeof y ){
    console.log(x + y);
  }  else if(typeof(x) !== typeof(y)) {
    console.log("this is wrong, i can\'t do this");
  } 
}

result (4,5);
result('5',5);
result(10,true);

// 1 argument
let marc = {
  "name":  'Marc',
  "age": 18,
  "note": 15,
  "level": 'uper6',
}
console.log(marc.name);
console.log(marc.age);
console.log(marc.note);
console.log(marc.level);
console.log(marc);

 function control(){
   if (marc.age < 8 ){
     console.log('You are kids');
   } else if (marc.age <=9 && marc.age <=17 ){
     console.log('You are minor');
   }
   else if (marc.age >=18 ){
     console.log('You are Adult')
   }
 }

// 2 argument
let marc = {
  "name":  'Marc',
  "age": 7,
  "note": 15,
  "level": 'uper6',
}
console.log(marc.name);
console.log(marc.age);
console.log(marc.note);
console.log(marc.level);
console.log(marc);

 function control(){
   if (marc.age < 8 ){
     console.log('You are kids');
   } else if (marc.age <=9 && marc.age <=17 ){
     console.log('You are minor');
   }
   else if (marc.age >=18 ){
     console.log('You are Adult')
   }
 }

control(marc);

 // 3 argument
let marc = {
  "name":  'Marc',
  "age": 31,
  "note": 15,
  "level": 'uper6',
}
console.log(marc.name);
console.log(marc.age);
console.log(marc.note);
console.log(marc.level);
console.log(marc);

 function control(){
   if (marc.age < 8 ){
     console.log('You are kids');
   } else if (marc.age <=9 && marc.age <=17 ){
     console.log('You are minor');
   }
   else if (marc.age >=18 ){
     console.log('You are Adult')
   }
 }

control(marc);
// ------------------
// More JavaScript 🎉
// 1.


  function somme(x,y,z) {
   console.log(x + y + z);
   }

somme (5,89,15);

// 2
// function colorCar(){
//   console.log('a red car')
// }
// colorCar();
function colorCar(x,y,t){
  console.log(x+y+t);
}
colorCar('a ', 'red ', 'car' );

// 3.
let marc = {
  "name":  'Marc',
  "age": 22,
  "note": 15,
  "level": 'uper6',
}
console.log(marc);

// 4.

function vehicleType(color,code){
    
    if (code === 1){
      console.log('a ' + color + " car");
    }
    else if (code=== 2){
      console.log('a ' + color + " motobike");
    } else {
      console.log('ERROR');
    }
  }
  vehicleType('blue', 2);
  vehicleType('red',1);


// 5.
console.log(3 === 3);

// 6.

function vehicleType(color,age,code){
  
    if ((code === 5) && (age === 1)){
      console.log('a ' + color + " used"+ " car");
    }
    else if (age === 1 && code === 2){
      console.log('a ' + color + " used" + " motobike");
    } else {
      console.log('it\'s may use for transport')
    }
  }
  vehicleType('blue', 1,5);
  vehicleType('red',1,2);

//   7.
let list = ["motorbike", "caravan", "bike"];
console.log(list);
console.log(list.length);
//8
console.log(list[2]);  //bike

//9