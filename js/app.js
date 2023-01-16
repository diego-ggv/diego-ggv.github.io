/*  ============
 *   variables
 *  ============  */
const solidStripe = document.getElementById('solid-stripe');
const gallery = document.getElementById('gallery');

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
      solidStripe.classList.remove('bg-dark');
      solidStripe.classList.add('bg-warning');
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
 *     Cards
 *   ===================  */

const imgArray = [
  {
    fileName: 'Employee Directory',
    code: 'https://github.com/diego-ggv/techdegree-project-8',
    pag: 'https://diego-ggv.github.io/techdegree-project-8/',
    text: `An Employee Directory that communicates with a third-party API. Using Js to dynamically add employee's cards`,
  },
  {
    fileName: 'WebApp',
    code: 'https://github.com/diego-ggv/techdegree-project-7',
    pag: 'https://diego-ggv.github.io/techdegree-project-7/',
    text: `An interactive dashboard for a web application that uses SVG graphics and Chart.js JavaScript library, and localStorage().`,
  },
  {
    fileName: 'Word-guess Game',
    code: 'https://github.com/diego-ggv/techdegree-project-6',
    pag: 'https://diego-ggv.github.io/techdegree-project-6/',
    text: `A fun web-based phrase guessing game. where players click letters from an onscreen keyboard to try to guess a random phrase`,
  },
  {
    fileName: 'Image Gallery',
    code: 'https://github.com/diego-ggv/techdegree-project-5',
    pag: 'https://diego-ggv.github.io/techdegree-project-5/',
    text: `An interactive, searchable gallery of photos using Javascript libraries and CSS preprocessor Sass .`,
  },
  {
    fileName: 'Buttons Grid',
    code: 'https://github.com/diego-ggv/techdegree-project-4',
    pag: 'https://diego-ggv.github.io/techdegree-project-4/',
    text: `A Sass and CSS style guide document that helps create consistent designs for web and mobile design, which defines the accepted styles and design principles for a company.`,
  },
  {
    fileName: 'Newsletter Form',
    code: 'https://github.com/diego-ggv/techdegree-project-4',
    pag: 'https://diego-ggv.github.io/techdegree-project-4/',
    text: `A newsletter signup form for an online magazine that uses mobile-first-approach`,
  },
];

//  create cards
//  ------------
const cards = (array) => {
  let html = ' ';

  for (let i = 0; i < array.length; i++) {
    html +=
      ` <!-- Project Card -->
        <div class="hidden card m-5 border-warning d-flex px-0" style="width: 18rem;">
          <img src="media/images/thumbnails/${array[i].fileName}.png"
               class="card-img-top"
               alt="${array[i].fileName}">
          <div class="card-body">
            <h5 class="card-title bg-dark text-white text-center">${array[i].fileName}</h5>
            <p class="card-text">
              ${array[i].text}
            </p>
    
            <div class="d-flex justify-around">  
              <!--   github code --> 
              <a href="${array[i].code}"
                 target="_blank"
                 class="icon tn-outline-warning p-0 ms-auto me-3">
                <svg width="30px"
                     height="30px"
                     data-name="Code"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 28.96 25.4">
                  <path
                      d="M25.15 2.03H3.8c-.98 0-1.78.8-1.78 1.78v17.78c0 .98.8 1.78 1.78 1.78h21.35c.98 0 1.78-.8 1.78-1.78V3.81c0-.98-.8-1.78-1.78-1.78ZM7.1 14.22a.89.89 0 0 1-1.26 0 .89.89 0 0 1 0-1.26l2.93-2.93L5.84 7.1a.89.89 0 0 1 0-1.26.89.89 0 0 1 1.26 0l3.55 3.56c.35.35.35.91 0 1.26L7.1 14.22Zm10.04 1.15h-5.33a.9.9 0 0 1 0-1.78h5.33a.9.9 0 0 1 0 1.78Z"
                      style="fill:#666"/>
                  <path
                      d="M18.03 14.48a.9.9 0 0 1-.89.89h-5.33a.9.9 0 0 1 0-1.78h5.33c.49 0 .89.4.89.89ZM10.66 10.66l-3.55 3.56a.89.89 0 0 1-1.26 0 .89.89 0 0 1 0-1.26l2.93-2.93L5.85 7.1a.89.89 0 0 1 0-1.26.89.89 0 0 1 1.26 0l3.55 3.56c.35.35.35.91 0 1.26Z"
                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:.5px"/>
                  <path
                      d="M25.15.25H3.8A3.55 3.55 0 0 0 .25 3.81v17.78a3.56 3.56 0 0 0 3.55 3.56h21.35a3.56 3.56 0 0 0 3.56-3.56V3.81A3.56 3.56 0 0 0 25.15.25Zm1.78 21.34c0 .98-.8 1.78-1.78 1.78H3.8c-.98 0-1.78-.8-1.78-1.78V3.81c0-.98.8-1.78 1.78-1.78h21.35c.98 0 1.78.8 1.78 1.78v17.78Z"
                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:.5px"/>
                </svg>
              </a>
              
              <!--  github pages-->
              <a href="${array[i].pag}"
                 target="_blank"
                 class=" icon btn-outline-warning p-0 ms-3 me-auto">
                <svg width="30px"
                     height="30px" data-name="Window" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 28.96 25.4">
                  <path
                      d="M23.37 3.81C2.99 4.86 3.43-1.68 3.81 19.82c-.98 0-1.78-.8-1.78-1.78V3.81c0-.98.8-1.78 1.78-1.78h17.78c.98 0 1.78.8 1.78 1.78Z"
                      style="fill:#666"/>
                  <path
                      d="M25.15 5.59H7.36c-2.56-.07-1.61 3.84-1.78 5.34h21.35c-.17-1.51.78-5.4-1.78-5.34ZM8.25 9.15c-1.15.02-1.15-1.8 0-1.78 1.15-.02 1.15 1.8 0 1.78Zm2.67 0c-1.15.02-1.15-1.8 0-1.78 1.15-.02 1.16 1.8 0 1.78Zm2.67 0c-1.16.02-1.15-1.8 0-1.78 1.15-.02 1.15 1.8 0 1.78ZM26.93 12.7v8.89c0 .98-.8 1.78-1.78 1.78C3.39 22.43 5.52 27.79 5.59 12.7h21.34Z"
                      style="fill:#666"/>
                  <path
                      d="M9.14 8.26c.02 1.15-1.79 1.15-1.78 0-.02-1.16 1.79-1.16 1.78 0ZM11.81 8.26c.02 1.15-1.8 1.15-1.78 0-.02-1.16 1.8-1.15 1.78 0ZM14.48 8.26c.02 1.15-1.8 1.15-1.78 0-.02-1.15 1.8-1.16 1.78 0Z"
                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:.5px"/>
                  <path
                      d="M25.15 3.81A3.56 3.56 0 0 0 21.59.25H3.81A3.56 3.56 0 0 0 .25 3.81v14.23a3.56 3.56 0 0 0 3.56 3.56 3.56 3.56 0 0 0 3.56 3.56h17.78a3.56 3.56 0 0 0 3.56-3.56V7.36a3.56 3.56 0 0 0-3.56-3.56ZM3.81 7.36v12.45c-.98 0-1.78-.8-1.78-1.78V3.81c0-.98.8-1.78 1.78-1.78h17.78c.98 0 1.78.8 1.78 1.78H7.36A3.56 3.56 0 0 0 3.8 7.37Zm23.12 14.23c0 .98-.8 1.78-1.78 1.78H7.36c-.99 0-1.78-.8-1.78-1.78V12.7h21.35v8.89Zm0-10.67H5.59c.19-1.51-.8-5.4 1.78-5.34h17.78c2.55-.06 1.61 3.84 1.78 5.34Z"
                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:.5px"/>
                </svg>
              </a>
              </div>
          </div>
        </div>`;
  }
  return html;
};
gallery.insertAdjacentHTML('afterbegin', cards(imgArray));


/*   ============
 *     Observer
 *   ============  */

// const carousel = new bootstrap.Carousel('#myCarousel');
let observerOptions = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: .25,
};

const observer = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
  },observerOptions,
);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(
  (e) => observer.observe(e),
);