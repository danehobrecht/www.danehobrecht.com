// Install service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}

$(document).ready(function(){
	// Style active and inactive navigation dots accordingly 
	$('.dots a').click(function(event) { 
		$(this).attr('id', 'active').siblings().attr('id', 'inactive');
	});
});