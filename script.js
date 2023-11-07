
class Modal {
    constructor(modalId, openButtonClass, closeModalId) {
      this.modal = document.getElementById(modalId);
      this.openButton = document.querySelector(openButtonClass);
      this.closeModalButton = document.getElementById(closeModalId);
  
      this.openButton.addEventListener("click", this.openModal.bind(this));
      this.closeModalButton.addEventListener("click", this.closeModal.bind(this));
  
      window.addEventListener("click", (event) => {
        if (event.target === this.modal) {
          this.closeModal();
        }
      });
  
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          this.closeModal();
        }
      });
    }
  
    openModal() {
      this.modal.style.display = "block";
    }
  
    closeModal() {
      this.modal.style.display = "none";
    }
  }
  
  const myModal = new Modal("myModal", ".open-modal", "closeModal");
  
