document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    function revealOnScroll() {
        projectCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add("reveal");
                }, index * 200); // Adds staggered animation effect
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once in case elements are already in view
});
