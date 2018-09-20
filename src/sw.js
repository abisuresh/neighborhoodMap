//Based on tutorials in https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
//https://developers.google.com/web/fundamentals/primers/service-workers/
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers and
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network

//Cache-ing images and pages
var cacheName = "MapProject";
var pagesToCache = [
    '/',
    '/App.css',
    '/App.js',
    '/index.css',
    '/index.js',
    '/LocationsAPI.js',
    '/Markers.js',
    '/Map.js',
    '/Navigation.js',
    '/Search.js',
    '/index.html'
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