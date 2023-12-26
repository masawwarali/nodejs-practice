//Technology Stack: Using Java Script

//Question 1. custom Camel Case

  function customCamelCase(input, delimiter) {
    let result = "";
    let capitalizeNext = false;
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
  
      if (char === delimiter) {
        capitalizeNext = true;
        continue;
      }
  
      if (capitalizeNext || i === 0) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char.toLowerCase();
      }
    }
  
    return result;
  }
  
  const inputString = "hello_esecForte_How_are_you";
  const delimiter = "_";
  const camelCasedString = customCamelCase(inputString, delimiter);
  console.log(camelCasedString);






  //Question 2. Custom Parser

  function customParse(input) {
    let   value    = 0;
    const valueArr = [];
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      switch (char) {
                case 'p':
                value++;
                break;
                case 'm':
                value--;
                break;
                case 's':
                value *= value;
                break;
                case 'o':
                valueArr.push(value);
                break;
            }
    }
  
    return valueArr;
  }
  
  const inputStr = "ppppsmoso";
  const result = customParse(inputStr);
  console.log(result);





  //Question 3. Count Extra Characters

  function countExtraCharacters(input) {
    const legalCharacters = 'abcdefghijklmnoABCDEFGHIJKLMNO';
    let extraCount = 0;
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      let isLegal = false;
  
      for (let j = 0; j < legalCharacters.length; j++) {
        if (char === legalCharacters[j]) {
          isLegal = true;
          break;
        }
      }
  
      if (!isLegal) {
        extraCount++;
      }
    }
  
    return extraCount;
  }
  
  const input = "aaabdbnhaikjjm";  
  const result1 = countExtraCharacters(input);
  console.log('Legal Charactor is==>>  ',result1);
