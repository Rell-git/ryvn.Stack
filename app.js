let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
    installBtn.hidden = true;
    await deferredPrompt.prompt();
    deferredPrompt = null;
});
