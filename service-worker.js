// =====【追加：オフライン対応（キャッシュ設定）】=====

const CACHE_NAME = "puty-rengeki-v2";

const CACHE_FILES = [
  "/wos-calc/",
  "/wos-calc/index.html",
  "/wos-calc/manifest.json",
  "/wos-calc/PutyKenMini.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// =====【ここまで追加】=====
