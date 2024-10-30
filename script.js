window.addEventListener("load", () => {
  emailjs.init("Tl2KTjL7aQRx-Tp73");
});

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("service_52js486", "template_bplr9xi", {
      to_name: "Saurav",
      from_name: name,
      message: message,
      reply_to: email,
    })
    .then(function (response) {
      alert("Message sent successfully! You will receive a reply shortly.");
      document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    });
}

document.getElementById("contact-form").addEventListener("submit", sendEmail);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = anchor.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
