const makeChange = (c) => {
  // your name here
	  const change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0, // pennies
  }

  // Calculate quarters
  change.q = Math.floor(c / 25)
  c %= 25

  // Calculate dimes
  change.d = Math.floor(c / 10)
  c %= 10

  // Calculate nickels
  change.n = Math.floor(c / 5)
  c %= 5

  // Remaining c is pennies
  change.p = c

  return change
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
