self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("ryvn-cache").then((cache) => {
            return cache.addAll([
                "index.html",
                "style.css",
                "app.js",
                "logo.jpg",
                "icon.jpg"
            ]);
        })
    );
});
