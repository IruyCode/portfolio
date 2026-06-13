

document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelectorAll(".slides-container").forEach((container) => {
        const slides = container.querySelectorAll(".slide");
        const prevButton = container.parentElement.querySelector(
            "button:first-of-type",
        );
        const nextButton = container.parentElement.querySelector(
            "button:last-of-type",
        );
        let currentSlide = 0;
        let interval;
        let startX = null;

        // Mostrar o primeiro slide
        slides[0].classList.remove("opacity-0");

        // Função para mostrar um slide específico
        function showSlide(index) {
            slides.forEach((slide) => slide.classList.add("opacity-0"));
            slides[index].classList.remove("opacity-0");
        }

        // Função para iniciar o auto-play
        function startAutoPlay() {
            interval = setInterval(() => {
                // No mobile, sempre roda. No desktop, só se hover
                if (
                    window.innerWidth < 768 ||
                    container.parentElement.parentElement.matches(":hover")
                ) {
                    currentSlide = (currentSlide + 1) % slides.length;
                    showSlide(currentSlide);
                }
            }, 4000); // 4 segundos
        }

        // Event listeners para os botões
        prevButton.addEventListener("click", () => {
            clearInterval(interval);
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
            startAutoPlay();
        });

        nextButton.addEventListener("click", () => {
            clearInterval(interval);
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
            startAutoPlay();
        });

        // Suporte a swipe/touch para mobile
        container.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });
        container.addEventListener("touchend", (e) => {
            if (startX === null) return;
            let endX = e.changedTouches[0].clientX;
            let diff = endX - startX;
            if (Math.abs(diff) > 40) {
                // threshold
                clearInterval(interval);
                if (diff > 0) {
                    currentSlide =
                        (currentSlide - 1 + slides.length) % slides.length;
                } else {
                    currentSlide = (currentSlide + 1) % slides.length;
                }
                showSlide(currentSlide);
                startAutoPlay();
            }
            startX = null;
        });

        // Iniciar o auto-play
        startAutoPlay();

        // Pausar o auto-play quando o mouse sai do container (apenas desktop)
        container.parentElement.parentElement.addEventListener(
            "mouseleave",
            () => {
                if (window.innerWidth >= 768) clearInterval(interval);
            },
        );

        // Retomar o auto-play quando o mouse entra no container (apenas desktop)
        container.parentElement.parentElement.addEventListener(
            "mouseenter",
            () => {
                if (window.innerWidth >= 768) {
                    interval = setInterval(() => {
                        currentSlide = (currentSlide + 1) % slides.length;
                        showSlide(currentSlide);
                    }, 4000);
                }
            },
        );
    });

    // Script para o carrossel de imagens dos trabalhos
    document.querySelectorAll(".work-carousel").forEach((container) => {
        const slides = container.querySelectorAll(".work-slide");
        const dots =
            container.parentElement.querySelectorAll(".work-dots button");
        const prevButton = container.parentElement.querySelector(".work-prev");
        const nextButton = container.parentElement.querySelector(".work-next");
        let currentSlide = 0;
        let interval;

        // Mostrar o primeiro slide e dot
        slides[0].classList.remove("opacity-0");
        dots[0].classList.add("bg-white");

        // Função para mostrar um slide específico
        function showSlide(index) {
            slides.forEach((slide) => slide.classList.add("opacity-0"));
            dots.forEach((dot) => dot.classList.remove("bg-white"));
            slides[index].classList.remove("opacity-0");
            dots[index].classList.add("bg-white");
        }

        // Função para iniciar o auto-play
        function startAutoPlay() {
            interval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 5000); // Muda a cada 5 segundos
        }

        // Event listeners para os botões
        prevButton.addEventListener("click", () => {
            clearInterval(interval);
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
            startAutoPlay();
        });

        nextButton.addEventListener("click", () => {
            clearInterval(interval);
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
            startAutoPlay();
        });

        // Event listeners para os dots
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                clearInterval(interval);
                currentSlide = index;
                showSlide(currentSlide);
                startAutoPlay();
            });
        });

        // Iniciar o auto-play
        startAutoPlay();

        // Pausar o auto-play quando o mouse está sobre o carrossel
        container.parentElement.addEventListener("mouseenter", () => {
            clearInterval(interval);
        });

        // Retomar o auto-play quando o mouse sai do carrossel
        container.parentElement.addEventListener("mouseleave", () => {
            startAutoPlay();
        });
    });

    // Adicionar JS para o carrossel mobile toggle
    document.querySelectorAll(".show-carousel-btn").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const card = btn.closest(".group");
            const overlay = card.querySelector(".carousel-overlay");
            overlay.classList.add("opacity-100", "pointer-events-auto");
            overlay.classList.remove("opacity-0", "pointer-events-none");
        });
    });
    document.querySelectorAll(".close-carousel-btn").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const card = btn.closest(".group");
            const overlay = card.querySelector(".carousel-overlay");
            overlay.classList.remove("opacity-100", "pointer-events-auto");
            overlay.classList.add("opacity-0", "pointer-events-none");
        });
    });

});
