const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const service =
    document.getElementById("service").value;

  const date =
    document.getElementById("date").value;

  const time =
    document.getElementById("time").value;


  if (!name || !service || !date || !time) {

    alert("Please complete all booking details.");

    return;
  }


  const message =
`Hi FreshCut 👋

I'd like to book an appointment.

Name: ${name}
Service: ${service}
Preferred date: ${date}
Preferred time: ${time}

Please let me know if this time is available. Thank you!`;


  const phoneNumber = "260970000000";


  const whatsappURL =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);


  window.open(
    whatsappURL,
    "_blank"
  );

});
