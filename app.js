const landing = document.getElementById("landing");
const app = document.getElementById("app");
const installBtn = document.getElementById("installBtn");

let deferredPrompt;

// detect if opened as installed app
function isInstalledApp() {
    return window.matchMedia("(display-mode: standalone)").matches;
}

// switch view
if (isInstalledApp()) {
    landing.style.display = "none";
    app.style.display = "flex";
}

// install prompt
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

installBtn.addEventListener("click", () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
            deferredPrompt = null;
        });
    }
});

// service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
