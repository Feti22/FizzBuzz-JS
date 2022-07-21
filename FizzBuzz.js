// FizzBuzz with a function
function fizzbuzz() {
  for (i = 1; i < 101; i++) {
      if (i % 15 == 0) {
          console.log("FizzBuzz");
      } else if (i % 3 == 0) {
          console.log("Fizz");
      } else if (i % 5 == 0) {
          console.log("Buzz");
      } else {
          console.log(i);
      }
  }
}

fizzbuzz();

// FizzBuzz with a switch statement
function fizzBuzzSwitchStatement() {
    const limitValue = 100;

    for (let i = 0; i <= limitValue; i++) {
        switch (true) {
            case (i % 3 == 0 && i % 5 == 0):
                console.log('FizzBuzz');
                break;
            case (i % 3 == 0):
                console.log('Fizz');
                break;
            case (i % 5 == 0):
                console.log('Buzz');
                break;
            default:
                console.log(i);
                break;
        }
    }
}

fizzBuzzSwitchStatement();

