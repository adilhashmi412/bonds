document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("freeQuoteModal");
    const openModalBtn = document.getElementById("openQuoteModal");
    const closeModalBtn = document.querySelector(".close-btn");
    const applicationStatus = document.getElementById("application-status");
    const uploadContainer = document.getElementById("upload-container");
    const vinContainer = document.getElementById("vin-container");

    // Show modal
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close modal
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Show/hide fields based on application status
    applicationStatus.addEventListener("change", function () {
        if (applicationStatus.value === "yes") {
            uploadContainer.style.display = "block";
            vinContainer.style.display = "none";
        } else if (applicationStatus.value === "no") {
            vinContainer.style.display = "block";
            uploadContainer.style.display = "none";
        } else {
            uploadContainer.style.display = "none";
            vinContainer.style.display = "none";
        }
    });
});
