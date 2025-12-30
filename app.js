const installBtn = document.getElementById("installBtn");
const webView = document.getElementById("webView");
const appView = document.getElementById("appView");

let deferredPrompt = null;

/* CHECK APP MODE */
if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
) {
    webView.hidden = true;
    appView.hidden = false;
}

/* CAPTURE INSTALL EVENT */
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

/* INSTALL BUTTON */
installBtn.addEventListener("click", async () => {
    if (deferredPrompt) {
        await deferredPrompt.prompt();
        deferredPrompt = null;
    } else {
        alert(
            "Install not ready yet.\n\nUse Chrome menu → Add to Home Screen."
        );
    }
});
