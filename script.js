

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Handle recommendation form submission
    const form = document.querySelector(".recommendation-form");
    const recommendationList = document.querySelector(".recommendations");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const recommendationText = document.getElementById("recommendation").value.trim();

        if (recommendationText === "") {
            alert("Please enter a recommendation before submitting.");
            return;
        }

        // Create a new recommendation element
        const recommendationBox = document.createElement("div");
        recommendationBox.classList.add("recommendation-box");

        if (name) {
            recommendationBox.innerHTML = `<p><strong>${name}:</strong> ${recommendationText}</p>`;
        } else {
            recommendationBox.innerHTML = `<p>${recommendationText}</p>`;
        }

        // Append new recommendation to the list
        recommendationList.appendChild(recommendationBox);

        // Show popup message
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
            <div class="popup-content">
                <p>Thank you for your recommendation!</p>
                <button class="popup-btn">OK</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Handle popup close button
        document.querySelector(".popup-btn").addEventListener("click", function () {
            document.body.removeChild(popup);
        });

        // Clear form fields after submission
        form.reset();
    });
});
