// document.addEventListener("DOMContentLoaded", function() {
//     class Modal {
//         constructor(modalName) {
//             this.modalName = modalName;
//             this.modalElement = document.querySelector(`[id="${modalName}"]`);
//             this.closeButton = document.querySelector(`#close-${modalName}`);
//             this.modalElement.classList.add("hidden");
//             this.closeButton.addEventListener("click", () => this.hideModal());
//         }
    
//         showModal() {
//             this.modalElement.classList.remove("hidden");
//         }
    
//         hideModal() {
//             this.modalElement.classList.add("hidden");
//         }
    
//         toggleModal() {
//             if (this.modalElement.classList.contains("hidden")) {
//                 this.showModal();
//             } else {
//                 this.hideModal();
//             }
//         }
//     }
    
//     const modal = new Modal("myModal");
    
//     const openModalButton = document.querySelector(".open-modal");
//     openModalButton.addEventListener("click", () => modal.showModal());
    
//     const closeModalButton = document.querySelector("#closeModal");
//     closeModalButton.addEventListener("click", () => modal.hideModal());
// });

document.addEventListener("DOMContentLoaded", function() {
    class Modal {
        constructor(modalName) {
            this.modalName = modalName;
            this.modalElement = document.querySelector(`#myModal`);
            this.closeButton = document.querySelector(`#closeModal`);
            this.modalElement.classList.add("hidden");
            this.closeButton.addEventListener("click", () => this.hideModal());
        }
    
        showModal() {
            this.modalElement.classList.remove("hidden");
        }
    
        hideModal() {
            this.modalElement.classList.add("hidden");
        }
    }
    
    const modal = new Modal("myModal");
    
    const openModalButton = document.querySelector(".open-modal");
    openModalButton.addEventListener("click", () => modal.showModal());
});
