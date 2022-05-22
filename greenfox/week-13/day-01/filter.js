function filter(numbers, callback) {
    let result = [];
  
    for(let number of numbers) {
      if(callback(number)) {
        result.push(number);
      }
    }
  
    return result;
  }

  filter([2,3,4,6,9], n => n > 2)

  console.log(filter([2,3,4,6,9], n => n > 2));
 console.log(filter([-2,3,4,6,9], n => n < 0)); 
console.log(filter([2,3,4,6,9], n => n % 2 === 0)); 