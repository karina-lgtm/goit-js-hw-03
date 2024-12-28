function getElementWidth(content, padding, border) {
    
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    
   
    const totalWidth = contentWidth + (2 * paddingWidth) + (2 * borderWidth);
    
   
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200



function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Amazing Sale, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of SPAM emails. Our book is on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


function filterArray(numbers, value) {
    
    const result = [];
  
  
    for (let i = 0; i < numbers.length; i++) {
     
      if (numbers[i] > value) {
        result.push(numbers[i]); 
      }
    }
  
   
    return result;
  }
  
  // Перевірка роботи функції
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]