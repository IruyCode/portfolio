document.addEventListener("DOMContentLoaded", () => {

    // Modal Skills
    document.querySelectorAll(".open-skills-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("skills-modal");
            modal.classList.remove("opacity-0", "pointer-events-none");
            modal.classList.add("opacity-100");
        });
    });
    document.querySelectorAll(".close-skills-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("skills-modal");
            modal.classList.add("opacity-0", "pointer-events-none");
            modal.classList.remove("opacity-100");
        });
    });


    // Modal Health Meal
    document.querySelectorAll(".open-healthmeal-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("healthmeal-modal");
            modal.classList.remove("opacity-0", "pointer-events-none");
            modal.classList.add("opacity-100");
        });
    });
    document.querySelectorAll(".close-healthmeal-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("healthmeal-modal");
            modal.classList.add("opacity-0", "pointer-events-none");
            modal.classList.remove("opacity-100");
        });
    });

    // Modal Bank Manager
    document.querySelectorAll(".open-bankmanager-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("bankmanager-modal");
            modal.classList.remove("opacity-0", "pointer-events-none");
            modal.classList.add("opacity-100");
        });
    });
    document.querySelectorAll(".close-bankmanager-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("bankmanager-modal");
            modal.classList.add("opacity-0", "pointer-events-none");
            modal.classList.remove("opacity-100");
        });
    });

    // Modal Pomodoro
    document.querySelectorAll(".open-pomodoro-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("pomodoro-modal");
            modal.classList.remove("opacity-0", "pointer-events-none");
            modal.classList.add("opacity-100");
        });
    });
    document.querySelectorAll(".close-pomodoro-modal").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const modal = document.getElementById("pomodoro-modal");
            modal.classList.add("opacity-0", "pointer-events-none");
            modal.classList.remove("opacity-100");
        });
    });

    // Fechar modais ao clicar fora do conteúdo
    document.querySelectorAll('[id$="-modal"]').forEach((modal) => {
        modal.addEventListener("click", function (e) {
            if (e.target === this) {
                this.classList.add("opacity-0", "pointer-events-none");
                this.classList.remove("opacity-100");
            }
        });
    });
});
