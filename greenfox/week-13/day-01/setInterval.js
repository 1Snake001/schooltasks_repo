function greeting() {
  return  'hello';
  }
  

i = 1;
const timer = setInterval(() => {
    if (i === 10) {
      clearInterval(timer);
    }
    console.log(greeting()+' '+ i);;
    i++;
  }, 1000);
  