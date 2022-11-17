
/*  ============
 *   variables
 *  ============  */
const solidStripe = document.getElementById('solid-stripe');

/*  ===========
 *   Typed.js
 *  ===========  */

// Greetings
// ---------
const typedGreetingsOpt = {
  strings: [
    `Hola<span class="text-warning fw-bold">!</span>`,
    `^1000 Hi<span class="text-dark fw-bold">!</span>`,
  ],
  typeSpeed: 100,
  backSpeed: 200,
  backDelay: 5000,

  preStringTyped: (arrayPos, self) => {
    if (arrayPos === 1) {
      solidStripe.classList.remove('bg-dark')
      solidStripe.classList.add('bg-warning')
    }
  },
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
};
const typedFrontEnd = new Typed('#typedFrontEnd', typedFrontEndOpt);


/*  ===================
*     Event listeners
*   ===================  */

