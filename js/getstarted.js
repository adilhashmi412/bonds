document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("formContainer");
    const getStartedBtn = document.getElementById("getStartedBtn");
    const closeBtn = document.querySelector(".close-btn");
    const steps = document.querySelectorAll(".step");
    const nextBtns = document.querySelectorAll(".nextBtn");
    const prevBtns = document.querySelectorAll(".prevBtn");
    const form = document.getElementById("multiStepForm");
    let currentStep = 0;

    // Open form on the same page
    getStartedBtn.addEventListener("click", function () {
        formContainer.classList.add("show");
    });

    // Close form when clicking the close button
    closeBtn.addEventListener("click", function () {
        formContainer.classList.remove("show");
    });

    // Close form when clicking outside the form box
    window.addEventListener("click", function (e) {
        if (e.target === formContainer) {
            formContainer.classList.remove("show");
        }
    });

    // Show current step
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === stepIndex);
        });
    }

    // Next Button Click
    nextBtns.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            if (validateForm(steps[currentStep])) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // Previous Button Click
    prevBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            currentStep--;
            showStep(currentStep);
        });
    });

    // Form Validation
    function validateForm(step) {
        let inputs = step.querySelectorAll("input");
        for (let input of inputs) {
            if (!input.value.trim()) {
                alert("Please fill out all required fields.");
                return false;
            }
        }
        return true;
    }

    // Submit Form
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm(steps[currentStep])) {
            alert("Form submitted successfully!");
            formContainer.classList.remove("show");
            form.reset();
            currentStep = 0;
            showStep(currentStep);
        }
    });

    // Show first step initially
    showStep(currentStep);
});
