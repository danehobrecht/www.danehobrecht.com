/* Unregister service worker for existing users, then remove registration */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.getRegistrations().then(function (registrations) {
		registrations.forEach(function (r) { r.unregister(); });
	});
}
