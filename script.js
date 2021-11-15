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
    '<div class="alert alert-success" role="alert">Nukopijuota į iškarpinę</div>'
  );

  emailBtn.innerText = "transpeda@transpeda.lt";

  setTimeout(() => {
    copiedDiv.remove(0);
  }, 3000);
};

const todaysYear = new Date().getFullYear();

document.getElementById("year").innerHTML = todaysYear;
