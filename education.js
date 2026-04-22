
const toggleBtn = document.getElementById("toggleEducation");
const hiddenCards = document.querySelectorAll("#educationList .hidden-card");

toggleBtn.addEventListener("click", () => {
    hiddenCards.forEach(card => {
        card.style.display = card.style.display === "none" || card.style.display === "" ? "block" : "none";
    });

    toggleBtn.classList.toggle("active");
});

