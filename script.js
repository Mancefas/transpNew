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
    "afterbegin",
    '<div class="alert alert-success" role="alert">Email nukopijuotas.</div>'
  );

  emailBtn.innerText = "transpeda@transpeda.lt";
  emailBtn.classList.remove("btn-lg");
  emailBtn.classList.remove("px-4");

  setTimeout(() => {
    copiedDiv.remove(0);
  }, 3000);
};

// ENG version copied email
const copiedDivEng = document.getElementById("copied-eng");
const emailBtnEng = document.getElementById("email-contact-eng");

const copyEmailToClipboardEng = () => {
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
  copiedDivEng.insertAdjacentHTML(
    "afterbegin",
    '<div class="alert alert-success" role="alert">Email copied</div>'
  );

  emailBtnEng.innerText = "transpeda@transpeda.lt";
  emailBtnEng.classList.remove("btn-lg");
  emailBtnEng.classList.remove("px-4");

  setTimeout(() => {
    copiedDivEng.remove(0);
  }, 3000);
};

const todaysYear = new Date().getFullYear();

document.getElementById("year").innerHTML = todaysYear;
