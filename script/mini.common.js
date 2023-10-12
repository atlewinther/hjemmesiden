




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
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Skriv alle input i felterne';
    } else {
        // serviceID - templateID - #form - publickye
        emailjs.sendForm('service_qyauoio', 'template_tpcpy7o',
         '#contact-form', 'u_4gX1b7dv7WpOGzC')
         .then(() => {
            // show mesage and add color
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Beskeden blev send '

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





const contactForm=document.getElementById("contact-form"),contactName=document.getElementById("contact-name"),contactEmail=document.getElementById("contact-email"),Message=document.getElementById("message"),contactMessage=document.getElementById("contact-message"),sendEmail=e=>{e.preventDefault(),""===contactName.value||""===contactEmail.value||""===Message.value?(contactMessage.classList.remove("color-light"),contactMessage.classList.add("color-dark"),contactMessage.textContent="Skriv alle input i felterne"):(emailjs.sendForm("service_qyauoio","template_tpcpy7o","#contact-form","u_4gX1b7dv7WpOGzC").then((()=>{contactMessage.classList.add("color-light"),contactMessage.textContent="Beskeden blev send ",setTimeout((()=>{contactMessage.textContent=""}),5e3)}),(e=>{alert("Hov, noget gik galt!",e)})),contactName.value="",contactEmail.value="",Message.value="")};contactForm.addEventListener("submit",sendEmail);