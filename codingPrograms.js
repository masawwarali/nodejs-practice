
//1.
//shallow copy example

// const user = {
//     name: 'Raj',
//     location: {
//       city: 'NY',
//       state: 'NY'
//     }
//   };
//    const copy = { ...user }; // structuredClone(user)
//    copy.location.city = 'Albany';
//   // console.log('original: ', user.location);// {}
//   // console.log('copy:', copy.location);

//   copy.name='Akash'
//   console.log('original: ', user);// {}
//   console.log('copy:', copy);



//2.
// var number = 10;
// var display = function () {
//   console.log(number);
//   var number = 20;
// };
// display();



//3.
//   const arry = [1, 2, 1, 3, 4, 3,2,4, 5];

//   var tmpArr = [];
//   for (let index = 0; index < array.length; index++) {
//     //const element = array[index];
//     // if(!tmpArr.includes() && (element%2==0)){
//     //     tmpArr.push(element);
//     // }
//   }




//4.
// var array = [1,2,3,5,4,6,4]
// var max = 0
// for (let index = 0; index < array.length; index++) {
//     //const element = array[index];
//    // temp.push(array[index]+array[index+1])
//    let sum =  array[index]+array[index+1]
//    if(sum >= max){
//        max = sum;
//    }
    
// }
// console.log('max===>', max)
//tmpArr  = new Set(...)


//.5

// // question 1
// const phoneFormat = (input) => {
//   if(!input || isNaN(input)) return `input must be a number was sent ${input}`
//   if(typeof(input) !== 'string') input = input.toString()
//   if(input.length === 10){
//       return input.replace(/(\d{0})(\d{1})(\d{2})/, "XXX");
//   } else if(input.length < 10) {
//     return 'was not supplied enough numbers please pass a 10 digit number'
//   } else if(input.length > 10) {
//     return 'was supplied too many numbers please pass a 10 digit number'
//   }
// }
// console.log(phoneFormat(9927808068))



//6.
// //Question 2 VALIDATE IPV4 ADDRESS
//  function isValidIp(ipAddress){
//    return  (/^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/.test(ipAddress));
//   }
// console.log("isValidIp('210.110') ? ", isValidIp('210.110'));



//7.

// // Question 5
// db.products.find({ "$or": [ {"price": {$gt: 100}}, {"quantity": {$lte: 10}} ] })

//8.
// var obj1 = {
//                 x:  43,
//                 y:  "Hello world!",
//                 z: function(){
//                 return this.x;
//                 }
//            }
//  console.log(obj1.z());


//9.
//   function  majorityElement(a, size)
//     {
//         //younnnnr code here
//         var temp = {}

//         for (var index = 0; index < size; index++) {
//             var element = a[index];
//             var inc = 1;

//             for (var i = 0; i < size; i++) {
//                 //const element = array[index];
//                 if(a[index]==a[i]){
//                     inc = inc++;
//                 }
               
//             }
//             //temp.push({element : inc});

//             temp[element][i] = inc;

            
//         }
//          console.log(temp);
//     }

//     console.log(majorityElement([1,2,3], 3));




//10.
// var array = [1, 2, 1, 3, 4, 3,2,4, 5];

// var tmpArr = [];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   if(!tmpArr.includes(element) && (element%2==0)){
//       tmpArr.push(element);
//   }

// }
// console.log(tmpArr)


//11.
// const user = {
//     name: 'Raj',
//     location: {
//       city: 'NY',
//       state: 'NY'
//     }
//   };
//    const copy = { ...user };
//   copy.location.city = 'Albany';
//   console.log('original: ', user.location);// {}
//   console.log('copy:', copy.location);


//12.
// var number = 10;
// var display = function () {
//   console.log(number);
//   var number = 20;
// };
// display();


//13.
//sum of (i+i+1) and get the maximum number from it

// var array = [1,20,3,40,5,40,6,4]

// var max = 0

// for (let index = 0; index < array.length; index++) {
//     //const element = array[index];
//    // temp.push(array[index]+array[index+1])
//    let sum =  array[index]+array[index+1]
//    if(sum >= max){
//        max = sum;
//    }
    
// }

// console.log('max===>', max)


//tmpArr  = new Set(...)


//14.
// function gettingLargestofsum(array){
//     var max = 0;
//     for (let index = 0; index < array.length; index++) {
//         // const element = array[index];
//         let sum = array[index]+array[index+1];
//         if(sum>=max){
//           max = sum;
//         }    
//      }
//      return max;

// }

// var array = [10,2,3,5,4,6,2,3,6]
// console.log(gettingLargestofsum(array));



//15.
// Majority Element

// function majorityElement(array){
//     var major = 0
//     var obj = {}
//     for (let index = 0; index < array.length; index++) {
       
      
//        var count = 0;
//        for (let i = 0; i < array.length; i++) {
//         if(array[index] == array[i]){
//             count = count+1
//         }
        
//        }
//        obj[array[index]] = count;
   
//        if(major<= count){
//         major = array[index]
//        }

//     }

//    // let arr = Object.values(obj);
//    // let max = Math.max(...arr);


//     return major;
    
//    // return  Math.max({...obj});
// }
// var array = [5,3,1,3,3,2]
// console.log(majorityElement(array));



//16.
// function majorityElement(array){
//     var major = 0
//     var obj = {}
//     for (let index = 0; index < array.length; index++) {


//         // console.log('val1' in object);

//        if(array[index] in obj){
//          obj[array[index]] = obj[array[index]]+1
//        }else{
//         obj[array[index]] = 1
//        } 
//        if(obj[array[index]]>major){
//             major = obj[array[index]]
//        }
//     }
//     return major;
// }

// console.log(majorityElement([5,3,1,3,3,2]));


//17.
//  function outerFunction(){
//     let outerVar = 'its working for outer function';

//     function innerFunction(){
//         console.log(outerVar)
//     }

//     return innerFunction;
//  }
//  outerFunction();



//18.
//  function fetchData(){
//    return new Promise((resolve,reject)=>{
//                     const datas = { name: 'John', age: 30 };
//                     resolve(datas);
//                     const error = {error:'occur an error'}
//                     reject(errors)
//                 })
//             }

//     fetchData()
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })




//19.
// async function check(req, res) {
//     try {
//       const a = await someOtherFunction();
//       const b = await somethingElseFunction();
//       //res.send("result")
//       console.log('fffff')
//     } catch (error) {
//       res.send(error.stack);
//     }
//   }


//  function  someOtherFunction(){
//    return 'dddd'
//  }

//  function somethingElseFunction(){
//     return 'ccccc'
//  }


//20.
// what will be the output
// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//     }
//     console.log(foo());     // 1
//     console.log(typeof(a)); // undefined
//     console.log(typeof(b)); // number
    


//21
// // what will be the output
// const numbers = [1,2,3];
// numbers.length = 0;
// console.log(numbers[0]); // undefined


//22
//Q1: Convert String to Camel Case:

function convertCamel(string, delemeter){
    string = string.split(delemeter)
    let tempStr= '';
    
      let i=0;
      while(string[i]){
         tempStr += string[i][0].toUpperCase()+string[i].slice(1);
         i++  
      }
      return tempStr
}

//console.log(convertCamel('this is the capital code', ' '));

//23.
// Q2: Custom Parser:

function parserString(str){
        let i= 0;
        let count = 0;
        let tempArr = []
    
         while(str[i]){
             if(str[i]=='p'){
                count++ 
             }
             if(str[i]=='m'){
                count-- 
             }
             if(str[i]=='s'){
                count = count*count; 
             }
             if(str[i]=='o'){
                tempArr.push(count) // = count*count; 
             }
            i++
         }
    return tempArr;
  }

//console.log(parserString('ppppsmoso'))


//24.
//Q3: Find the missing alphabet:

function countExtrastring(string){
    
      let i = 0;
      let count = 0;
      var aspectedArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n']
      
      while(string[i]){
          if(aspectedArr.includes(string[i])){
            count++  
          }
        i++
      }
     return count;
}

// console.log(countExtrastring('abaxbdbbyyhwawiwjjjwemzx'));



//24.
//sorting an array with ascending order
var arr = [4,9,7,2,3,5,9];
var arrlength = arr.length

  for(let i=0; i<arrlength; i++){
       
       for(let j=i+1; j<arrlength; j++){
           if(arr[i]>arr[j]){
                var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;  
           }
        } 
    }
console.log();


//25.
//sorting an array with ascending order
var arr = [4,9,7,2,3,5,9];
var arrlength = arr.length

  for(let i=0; i<arrlength; i++){
       
       for(let j=i+1; j<arrlength; j++){
           if(arr[i]>arr[j]){
                var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;  
           }
        } 
    }
console.log();
       

//26.
// Input [10,60,40,30,70,90]
// Output [10,90] [60,40] [30,70]

var temarr = []
var arr = [10,60,40,30,70,90];
var arrlength = arr.length

//console.log(arrlength)
for(var i=0; i<arrlength; i++){
     
    //console.log(i)
    for(j=i+1; j < arrlength; j++){
           var total = arr[i]+arr[j];
        if(total==100){
            
            console.log(total);
            temarr[i] = [arr[i], arr[j]]
            break;
        }
        
    }
     
    
}
console.log(temarr)



//27.
// REOMOVE DUPLICATE
// Array of Numbers 
// remove duplicates and return array 

let array = [1,2,2,4,5,6,7,2,2,1,4,5,7,6,8];
var temarr = [];

    let arrlength = array.length;
    
    for(let i=0; i<arrlength; i++){   
          if(!temarr.includes(array[i])){
          temarr.push(array[i]);
          }
        
    }
    
    console.log(temarr)




//28.
//ADD COMMON ELEMENT 

var x = [1, 2, 3, 4,2, 1, 3, 4,5,6,7]
var y = [4,5,6,8,3,2,1,3,5,55,33,22]
//length = 
var temparr = []
  for(let i=0; i< y.length; i++){
      
     if(x.includes(y[i])  && !temparr.includes(y[i])){
         temparr.push(y[i])
         //temp[i] = y[i]
     }
         
  }
  console.log(temparr)





//29.
  // FLAT AN ARRAY 
    var newArray = []
    function FlatArray(arr){
      
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            if(Array.isArray(element)){
                FlatArray(element);
            }else{
                newArray.push(element)
            }
            
        }

        return newArray;

    }

 console.log(FlatArray([5,6, [7,8], [9,10,[11, 2]]]));  

//30.
//FABONACCI SERIES

// let current = 0;
// let prev    = 1;
// let next    = '';
// let result  = '0'; 

// for(let i=0; i<11; i++){
   
//    next    = current+prev;
//    prev    = current
//    current = next
//   // console.log(next);
//   result = result+','+next
// }
// console.log(result);




//31.
//PALINDROME

// let string = '123321';
// let strlen = string.length
// {let result ='';}
// for(let i=strlen-1;  i>=0; i--){
//      result = result+string[i]
// }
// if(string===result){
//   console.log('number is palindrom');  
// }else{
//   console.log('invalid number');
// }


// //PALINDROME
// let number = 0;
// let result = 1;
// for(let i=number; i>1; i--){
//      result    = result*(i);  
// }
// console.log(result);

//32.
// PALINDROME WITH FUNCTION
// function factorial(number){
//      let result = 1;
//    for(let i=number; i>1; i--){
//         result    = result*(i); 
//        }
//        return result
// }

// let answer =  factorial(4);
// console.log(answer)


//33.
// PALINDROME WITH RECURSIVE FUNCTION
// function factorial(n){
//     if(n==1 || n==0){
//      return 1;     
//     }else{
//      return n*factorial(n-1);
//     }
// }
// let answer =  factorial(5);
// console.log(answer)



//34.
//ARMSTRONG NUMBER

// let str = '153'
// let lenStr= str.length
// var finalStr = 0;
//  for(var i=0; i<lenStr; i++){
    
//      var midstr =1;
//      for(let j=0; j<lenStr; j++){
//           midstr =   midstr*str[i]
//      }
//      console.log(i,midstr);
//     finalStr = finalStr+midstr
//  }
 
//  if(finalStr==str){
//       console.log(`${finalStr} is a Palindrome Number`);
//  }else{
//            console.log(`${finalStr} is Not Palindrome Number`);
//  }


// var msg = 'Hey thanks for joining. Please enter this in your Players app. 878777 Welcome to the Players community';
// var otp = msg.replace(/\D/g,'');

// var otp = msg.split('.');
// var otp = otp[2].split(' ');
//var otp = 878777;
// console.log(otp);

//35.
// function findLongestWordLength(str) {

//     let lengthArray= []

//     const myArray = str.split(" ");
    
//        for (let index = 0; index < myArray.length; index++) {
//                 lengthArray.push(Number(myArray[index].length)); 
//         }

//         var largest = Math.max.apply(0, lengthArray);
//         return largest;
    

//     }
    
//     console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


//36.
// function majorityElement(array){
//     var major = 0
//     var obj = {}
//     for (let index = 0; index < array.length; index++) {


//         // console.log('val1' in object);

//        if(array[index] in obj){
//          obj[array[index]] = obj[array[index]]+1
//        }else{
//         obj[array[index]] = 1
//        } 
//        if(obj[array[index]]>major){
//             major = obj[array[index]]
//        }
//     }
//     return major;
// }

// console.log(majorityElement([5,3,1,3,3,2]));


//37.
//  function outerFunction(){
//     let outerVar = 'its working for outer function';

//     function innerFunction(){
//         console.log(outerVar)
//     }

//     return innerFunction;
//  }

//  outerFunction();



//38.
//  function fetchData(){
//    return new Promise((resolve,reject)=>{
//                     const datas = { name: 'John', age: 30 };
//                     resolve(datas);
//                     const error = {error:'occur an error'}
//                     reject(errors)
//                 })
//             }

//     fetchData()
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })



//39.
// async function check(req, res) {
//     try {
//       const a = await someOtherFunction();
//       const b = await somethingElseFunction();
//       //res.send("result")
//       console.log('fffff')
//     } catch (error) {
//       res.send(error.stack);
//     }
//   }


//  function  someOtherFunction(){
//    return 'dddd'
//  }

//  function somethingElseFunction(){
//     return 'ccccc'
//  }










 
 
 
 
 























