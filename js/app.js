//  ========
//  Typed.js
//  ========

// Greetings
// ---------
const typedGreetingsOpt = {
  // stringsElement: '#typed-strings',
  strings: [`Hola<span class="text-warning fw-bold">!</span>`,
            `Hi<span class="text-warning fw-bold">!</span>`],
  typeSpeed: 100,
  backSpeed: 200,
  backDelay: 5000,
  showCursor: false,
};
const typedGreetings = new Typed('#typedGreeting', typedGreetingsOpt);

//  Name
//  ----
const typedNameOpt = {
  strings: ["I'm^250 Diego,"],
  typeSpeed: 100,
  startDelay: 1000,
  showCursor: false,
};

const typedName = new Typed('#typedName', typedNameOpt);


//  Occupation
//  ----------
const typedFrontEndOpt = {
  strings: ['a Front End Developer'],
  startDelay: 3500,
  typeSpeed: 100,
  showCursor: false,
}

const typedFrontEnd = new Typed('#typedFrontEnd', typedFrontEndOpt);


/*   Typed test
var typed = new Typed("#typed", {
  strings: ["awesome", "interesting"],
  stringsElement: null,
  typeSpeed: 20,
  startDelay: 1500,
  backSpeed: 20,

  // callback on complete
  onComplete: (self) => {
    // console.log(self);
    console.log(typed)
    typed.style.backgroundColor = 'red'
  },
});
*/

