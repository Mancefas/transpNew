const copiedDiv = document.getElementById("copied");
const emailBtn = document.getElementById("email-contact");

const copyEmailToClipboard = () => {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return;
  }
  const emailAdress = document.getElementById("email").innerHTML;

  navigator.clipboard
    .writeText(emailAdress)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  copiedDiv.insertAdjacentHTML(
    "beforeend",
    '<i class="fas fa-check-square text-success"></i>'
  );
};

// ENG version copied email
const copiedDivEng = document.getElementById("copied-eng");
const emailBtnEng = document.getElementById("email-contact-eng");

const copyEmailToClipboardEng = () => {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return;
  }
  const emailAdress = document.getElementById("email-eng").innerHTML;

  navigator.clipboard
    .writeText(emailAdress)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
    
  copiedDivEng.insertAdjacentHTML(
    "beforeend",
    '<i class="fas fa-check-square text-success"></i>'
  );

};

const todaysYear = new Date().getFullYear();

document.getElementById("year").innerHTML = todaysYear;
