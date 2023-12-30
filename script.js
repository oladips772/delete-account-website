/** @format */

const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.onclick = () => {
  deleteBtn.innerText = "Sending request...";

  setTimeout(() => {
    alert("Request sent");
    deleteBtn.innerText = "Send deletion request";
    window.location.reload();
  }, 2300);
};
