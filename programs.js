// #PROGRAM 1
// const arr = [10,90,70,60,40,30]; //input 
// //[10,90] [70,30] [60,40] // output

// var tempArr = {};
// for (let index = 0; index < arr.length; index++) {
//     const fistElement = arr[index];
//     for (let i = index; i < arr.length; i++) {
//         const secondElement = arr[i];
//         if(fistElement+secondElement==100){
//             tempArr.push([fistElement, secondElement])
//         }
//      }    
// }
// console.log(tempArr)


// #PROGRAM 2
//## FABONACCI SERIES
//011235813
// let prev=0
// let next=''
// let current=1
// result =''
// for (let index = 0; index < 10; index++) {
//     console.log(prev)
//     next = prev+current
//     prev = current
//     current = next;
// }
// console.log(result)
 

// #PROGRAM 3
//## REMOVE DUPLICATE ITEM FROM AN ARRAY
// var arr = [10,90,70,60,40,30,40,70,10,90]; //input 
// console.log(arr)
//  for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(arr.indexOf(element))
//     for (let i = index+1; i < arr.length; i++) {
//         const elem= arr[i];
//         if(element==elem){
//              arr.splice(i,1); 
//         }    
//     }  
//  }

//## Second SOLUTION
//arr = arr.filter((value, index, self) => self.indexOf(value) === index);
//console.log(arr)


// #PROGRAM 4
// const arrs = [2,4,5,1,2,3,6,3,4,3,2,1]
// expected output [[1,2], [2,3], [3,3], [4,2], [5,1], [6,1]]

// temp=[]
// for (let index = 0; index < arrs.length; index++) {
//     const element = arrs[index];
//     let count = 1
//     for (let i = index+1; i < arrs.length; i++) {
//         const ele = arrs[i];
//         if(ele===element){
//             count++;
//             arrs.splice(i,1)
//         }
//     }
//     temp.push([element, count])
// }
// console.log(temp)


// #PROGRAM 5
//COUNT EVERY ELEMENT OF AN ARRAY

// const arrs = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]
// const counts = {};
// arrs.forEach((x) => {
//   counts[x] = (counts[x] || 0)+1;
// });
// console.log(counts)


// #PROGRAM 6
//FACTORIAL OF A NUMBER
// function factorial(num){
//     if(num<=1){
//         return 1
//     }
//    return num*factorial(num-1)
    
// }
// console.log(factorial(5));


