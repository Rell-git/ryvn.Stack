const installBtn = document.getElementById("installBtn");
const webView = document.getElementById("webView");
const appView = document.getElementById("appView");

let deferredPrompt = null;

/* CHECK IF RUNNING AS APP */
if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
) {
    webView.hidden = true;
    appView.hidden = false;
} else {
    webView.hidden = false;
    appView.hidden = true;
}

/* LISTEN FOR INSTALL EVENT */
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // SHOW BUTTON ONLY WHEN READY
    installBtn.hidden = false;
});

/* CLICK INSTALL */
installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) {
        alert("Install not available yet. Scroll or tap first.");
        return;
    }

    await deferredPrompt.prompt();
    deferredPrompt = null;
});
