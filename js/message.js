
// #2 enter your API public Key
(function () {
  emailjs.init("pTcReyc3M_O8uT4Tx");
})();

// #3 listen to the form submission
document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    const Name = document.querySelector('#name');
    const Email = document.querySelector('#email');
    const Subject = document.querySelector('#subject');
    const Message = document.querySelector('#message');
    const ContactErrorMessage = document.querySelector('.contact-error-message');
    const MyForm = document.querySelector('#myForm');
    const ContactSuccessMessage = document.querySelector('.contact-success-message');

    //check if fields are empty with !!!
    if (!!!Name.value || !!!Email.value || !!!Subject.value || !!!Message.value){
      ContactErrorMessage.style.display = 'block';
      return console.log('User tried to message Ram, but some fields are empty')
    }

    ContactErrorMessage.style.display = 'none';

    const serviceID = "service_xykuslm";
    const templateID = "template_rrg8wbp";
    // send the email here if all fields are filled
    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
      console.log("SUCCESS!", response.status, response.text);
      MyForm.style.display='none';
      ContactSuccessMessage.style.display='block';
      },
      (error) => {
      console.log("FAILED...", error);
      alert("FAILED...Server is Down, Please try again later.", error);
      }
);
});
  