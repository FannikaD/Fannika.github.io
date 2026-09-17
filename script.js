

const helpName = document.getElementById("help-name");
const helpBtn = document.querySelector(".help-btn");
const message = "Congratulations! Your form has been submitted. We will get back to you as soon as possible.";
const helpEmail = document.getElementById("help-email");
const helpNumber = document.getElementById("help-number");
const helpText = document.getElementById("help");

helpBtn.addEventListener("click", () => {
    if (helpName.value === null || helpName.value === "") {
        alert("Please enter your name.");
        return;
    }else if (helpEmail.value === null || helpEmail.value === "") {
        alert("Please enter your email.");
        return;
    }else if (helpNumber.value === null || helpNumber.value === "") {
        alert("Please enter your phone number.");
        return;
    }else if (helpText.value === null || helpText.value === "") {
        alert("Please enter your query.");
        return;
    }else {
        alert("Thank you for your submission, " + helpName.value + ". We will get back to you as soon as possible.");
    }
});