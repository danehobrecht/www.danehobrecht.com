/* Unregister service worker and clear all caches for existing users */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function (names) {
			return Promise.all(names.map(function (name) { return caches.delete(name); }));
		}).then(function () { return self.clients.claim(); })
	);
});
