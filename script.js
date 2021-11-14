const copiedDiv = document.getElementById("copied");
const copiedElm = document.getElementById("copd");
console.log(copiedElm);

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
  setTimeout(() => {
    copiedDiv.remove(0);
  }, 700);
};

const todaysYear = new Date().getFullYear();

document.getElementById("year").innerHTML = todaysYear;
