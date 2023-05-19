
// #2 enter your API public Key
(function () {
  emailjs.init("pTcReyc3M_O8uT4Tx");
})();


// #3 enter your IDs

emailjs.sendForm("service_xykuslm", "template_rrg8wbp", "#myForm")

// #4 listen to the form submission
document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_xykuslm";
    const templateID = "template_rrg8wbp";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("SUCCESS!");
        },
        (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
        }
);
});
  