const buttonOpenModal = document.getElementById("openModal");
const modalWrapper = document.querySelector(".modal-wrapper");

//Ao clicar em abrir a janela deve retirar o invisible da div
buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove("invisible");
};
//com apertar esc deve voltar com o invisible da div

document.addEventListener("keydown", function (event) {
  const isEscKey = event.key === "Escape";

  if (isEscKey) {
    modalWrapper.classList.add("invisible");
  }
});
