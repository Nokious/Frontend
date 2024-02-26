function openModal() {
  document.getElementById("open-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("open-modal").style.display = "none";
}

function agree() {
  console.log("User agreed to terms");
  closeModal();
}

function disagree() {
  console.log("User disagreed to terms");
  closeModal();
}

function agreeAction() {
  window.history.back();
}

function disagreeAction() {
  window.history.back();
}
