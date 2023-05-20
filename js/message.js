
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
    const ReturnLink = document.querySelector('#return-link');
    const ContactFailMessage =document.querySelector('.contact-fail-message');
    const ContactSendingMessage = document.querySelector('.contact-sending-message');
    const VideoFrameContainer = document.querySelector('.video-frame-container');
    const ContactSampleVideoMessage =document.querySelector('.contact-sample-video-message');

    ContactSendingMessage.style.display = 'block';
    //check if fields are empty with !!!
    if (!!!Name.value || !!!Email.value || !!!Subject.value || !!!Message.value){
      ContactSendingMessage.style.display='none';
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
      ContactSendingMessage.style.display='none';
      ContactSuccessMessage.style.display='block';
      ReturnLink.style.display='block';
      VideoFrameContainer.style.display='flex';
      ContactSampleVideoMessage.style.display='block';
      },
      (error) => {
      console.log("FAILED...", error);
      ContactSendingMessage.style.display='none';
      ContactFailMessage.style.display ='block';
      }
);
});
  