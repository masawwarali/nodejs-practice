//Q1. convert first alphabet into capital letter without js in-built function
 
const arr =  ["hello","masawwar","ali"] 
 function pascalNotation(arr){
        for (let index = 0; index < arr.length; index++) {

            let element = arr[index]

          let   asciiValue = arr[index][0].charCodeAt()

          if(asciiValue >= 97 && asciiValue <= 122){
            let newStr =  String.fromCharCode(asciiValue-32)
           //#first solution
           // newStr+= element.substring(1);
           //    #first solution
             for (let i = 0; i < element.length; i++) {
                // const substr = element[i];
                if(i>0){
                    newStr += element[i];
                } 
             }
            arr[index] = newStr;
          }
           
            
        }

        return arr;
    }
console.log(pascalNotation(arr))