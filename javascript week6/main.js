// function foo(func) {
//         return bar()
// }
// function bar() {
//     console.log('Hello, I am bar!');
// }
// foo(bar);

function threeFive(start, end, three, five) {
        let arr = [];
        
        for (let i = start; i <= end; i++) {
          arr.push(i);
        }
          console.log(arr);
        arr.forEach(value => {
            if (value % 3 === 0) {
                let arr = [];
                for (let i = 10; i < value.lenght; i++){
                arr.push(value[0].item);
                  console.log(arr);
                                                       }
            
            three(value);
            
          // }
        
          if (value % 5 === 0) {
            five(value);
            // console.log(value);
          }
        })
      }
      function div(divide) {
        return function(value) {
          console.log(`${value} is divisible by ${divide}`);
        }
      }
      
      threeFive(10, 30, div(3), div(5));

// itemIds = [];
// let data = [20,78, 45, 58];
// for (var i = 0; i < data.length; i++) {
//   itemIds.push(data[0].item);
// }
// console.log(itemIds);


function repeatStringNumTimes(str, num) {
  let answerStr = "";
  while( num >0){
    answerStr += str
    num--;
  }
  return answerStr;
}
console.log(repeatStringNumTimes("abc", -1));

    function threeFive(start, end, callThree, callFive) {
        let arr = [];
        for (let i = start; i <= end; i++) {
          arr.push(i);
        }
        arr.forEach(value => {
          if (value % 3 === 0) {
            callThree(value);
            
          }
          else if (value % 5 === 0) {
            callFive(value);
          }
          else if (value % 3=== 0 && value % 5 ===0){
            callFive(value);
            callThree(value);
          }
        })
      }
      function div(divised) {
        return function(value) {
          console.log(`${value} is divisible by ${divised}`);
        }
      }
      
      threeFive(10, 30, div(3), div(5));

function repeatStringNumTimes(str, num) {
  let answerStr = "";
  while( num >0){
    answerStr += str
    num--;
  }
  return answerStr;
}
repeatStringNumTimes("abc", 8);

let addSix = createBase(6);
function createBase(num){
    return function addSix(added){
      return num + added
    }
}
addSix(10); // returns 16
addSix(21); // returns 27

WHILE loop
function repeatStringNumTimes(str, num) {
  let myLittleSrting = '';
    while (num > 0) {
      myLittleSrting += str;
      num--;
    }   
  return console.log(myLittleSrting);
}
repeatStringNumTimes("abc", 3);

// FOR loop
function repeatStringNumTimes(str, num) {
  let myLittleSrting = '';
    for (let i = 0; i < num; i++) {
      myLittleSrting += str;
    }   
  return console.log(myLittleSrting);
}
repeatStringNumTimes("abc", 2);

// DO + WHILE loop
function repeatStringNumTimes(str, num) {
  let myLittleSrting = '';
    do {
      myLittleSrting += str;
      num--;
    }
    while (num > 0);
  return console.log(myLittleSrting);
}
repeatStringNumTimes("abc", 1);


let arr3d = [[1, 'a'], [2, 'b'], [3, 'c']];
function show3dArr(arg) {
  if(Array.isArray(arg)) {
    arg.forEach(element => show3dArr(element));
  } else {
    console.log(arg);
  }
}
show3dArr(arr3d);



let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);
//x is passed by value.

let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
// Y is passed by reference

