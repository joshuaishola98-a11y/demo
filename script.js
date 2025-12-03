const contactForm = document.querySelector(".contact-form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");

const btn = contactForm.querySelector("button[type='submit']");

function saveToLocalStorage() {
  let nameInput = nameField.value.trim();
  let emailInput = emailField.value.trim();
  let subjectInput = subjectField.value.trim();
  let messageInput = messageField.value.trim();

  if (nameInput === "") {
    alert("Please enter your name");
    nameField.focus();
    return;
  }

  if (emailInput === "") {
    alert("Please enter your email");
    emailField.focus();
    return;
  }

  if (subjectInput === "") {
    alert("Please enter the subject");
    subjectField.focus();
    return;
  }

  if (messageInput === "") {
    alert("Please enter your message");
    messageField.focus();
    return;
  }

  let formData = {
    name: nameInput,
    email: emailInput,
    subject: subjectInput,
    message: messageInput,
  };

  localStorage.setItem("formData", JSON.stringify(formData));

  alert("Thank you for reaching out! Your message has been received.");

  nameField.value = "";
  emailField.value = "";
  subjectField.value = "";
  messageField.value = "";

  return true;
}

btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form from refreshing
  saveToLocalStorage();

  let getData = JSON.parse(localStorage.getItem("formData"));
  console.log(getData);

  console.log("Button clicked");
});
