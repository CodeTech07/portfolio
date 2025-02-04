/*-- Navbar--*/

const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  overlay.style.transform = 'translateX(0)';
});

closeBtn.addEventListener('click', () => {
  overlay.style.transform = 'translateX(-100%)';
});


/* bnt1 */

function downloadPDF() {
  const link = document.createElement("a");
  link.href = "Resume.pdf";  // Path to your PDF file
  link.download = "Jeet Thakur.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


/*Contact info*/


document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Kk0pQjXEDTUOpyg2l"); // Replace with your EmailJS Public Key

  document.getElementById("contacts-form").addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
    

      let message = document.getElementById("message").value;

      let templateParams = {
          from_name: name,
          from_email: email,
        
          message: message
      };

      emailjs.send("service_595miq6", "template_x9izn1l", templateParams)
          .then(function (response) {
              document.getElementById("response-msg").innerText = "Message sent successfully!";
              document.getElementById("contacts-form").reset();
          }, function (error) {
              document.getElementById("response-msg").innerText = "Failed to send message. Try again.";
              document.getElementById("response-msg").style.color = "red";
          });
  });
});


/* style */
const sr = ScrollReveal ({
  distance:'60px',
  duration:2500,  
  delay:400,
  reset:true
})

sr .reveal ( '.portfolio-text',{delay:200, origin:'top'})
sr .reveal ( '.portfolios-image',{delay:400, origin:'top'})

sr .reveal ( '.social,.portfolio-image,.containers,.skills-card,.card,.container,.info',{delay:200, origin:'top'})