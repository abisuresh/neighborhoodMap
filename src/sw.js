//Based on tutorials in https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
//https://developers.google.com/web/fundamentals/primers/service-workers/
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers and
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network

//Cache-ing images and pages
var cacheName = "Map";
var pagesToCache = [
    '/',
    '/src/App.css',
    '/src/App.js',
    '/src/index.css',
    '/src/LocationsAPI.js',
    '/src/Markers.js',
    '/src/Map.js',
    '/src/Navigation.js',
    '/public/index.html'
];

//Installing service worker
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(pagesToCache)
        })
    );
});

//Opening cached files
//When offline

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true})
            .then(function(response){
                    if(response) {
                        return response;
                    }

                    return fetch(event.request);
                }
            )
    );
});