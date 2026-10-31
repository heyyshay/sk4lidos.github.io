const splash = document.getElementById("splash");
const loop = document.getElementById("loop");
const silentButton = document.getElementById("enter-silent");
const musicButton = document.getElementById("enter-music");

function enterSite(playMusic) {
    if (playMusic) {
        loop.volume = 0.5;
        loop.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }
    splash.classList.add("hidden");
    setTimeout(() => {
        splash.remove();
    }, 600);
}

silentButton.addEventListener("click", () => enterSite(false));
musicButton.addEventListener("click", () => enterSite(true));
