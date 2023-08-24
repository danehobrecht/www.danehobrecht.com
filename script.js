if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}

$(document).ready(function(){ 
	$('.dots a').click(function(event) { 
		$(this).attr('id', 'active').siblings().attr('id', 'inactive');
	});
});

window.onload = function() {
	// Check if the URL has a fragment identifier ('#')
	if (window.location.hash) {
		// Remove the fragment identifier and update the URL
		history.replaceState({}, document.title, window.location.pathname);
	}
};