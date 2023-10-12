/* ACTIVE LINK */
const navLink = document.querySelectorAll('.nav__link');

function activeLink() {
    navLink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navLink.forEach((a) => a.addEventListener('click', activeLink));



/* BG HEADER */
function scrollHeader(){
    const header = document.getElementById('header');
// when the scroll is greater than 50 vi
if (this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/* MIXITUP */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* ACTIVE WORK */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/* TESTIMONIALS */
var testiSwiper = new Swiper('.testimonial__container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: 'swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});


/* CONTACT */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a val
    if (contactName.value === '' || 
        contactEmail.value === '' || 
        Message.value === '' 
    ) {
        // add and remove color
        contactMessage.classList.remove('color-dark');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Skriv besked';
    } else {
        // serviceID - templateID - #form - publickye
        emailjs.sendForm('service_qyauoio', 'template_tpcpy7o',
         '#contact-form', 'u_4gX1b7dv7WpOGzC')
         .then(() => {
            // show mesage and add color
            contactMessage.classList.add('color-dark');
            contactMessage.textContent = 'Beskeden blev sendt '

            // remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            }, (error) => {
                alert('Hov, noget gik galt!', error)
            }
            );
            // input fiilds clear
            contactName.value = '';
            contactEmail.value = '';
            Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);





const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);






const cookieBox = document.querySelector(".cwrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);



