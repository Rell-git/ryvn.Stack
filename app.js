const installBtn = document.getElementById("installBtn");
const webView = document.getElementById("webView");
const appView = document.getElementById("appView");

let deferredPrompt;

/* CHECK IF INSTALLED */
if (window.matchMedia("(display-mode: standalone)").matches) {
    webView.hidden = true;
    appView.hidden = false;
} else {
    webView.hidden = false;
    appView.hidden = true;
}

/* INSTALL PROMPT */
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
});

/* INSTALL BUTTON CLICK */
installBtn.addEventListener("click", async () => {
    installBtn.hidden = true;
    await deferredPrompt.prompt();
    deferredPrompt = null;
});
