const themeButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const filterButtons = document.querySelectorAll(".project-filters button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        projects.forEach(function (project) {
            const categories = project.dataset.category.split(" ");

            if (selectedFilter === "all" || categories.includes(selectedFilter)) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }
        });
    });
});

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const message = document.getElementById("message").value.trim();

    formFeedback.className = "";

    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please fill in all fields.";
        formFeedback.classList.add("error");
    } else if (!emailInput.validity.valid || email.includes(" ")) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.classList.add("error");
    } else {
        formFeedback.textContent = "Thank you! Your message is ready.";
        formFeedback.classList.add("success");
        contactForm.reset();
    }
});
