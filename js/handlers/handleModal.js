export function handleModal() {
  const modal = document.querySelector("#imageModal");

  const span = document.querySelector(".close");

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
