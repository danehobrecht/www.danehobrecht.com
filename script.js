if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

$(document).ready(function() {
	// Style active and inactive navigation dots appropriately 
	$('.dots a').click(function(event) { 
		event.preventDefault();
		$(this).attr('id', 'active').siblings().attr('id', 'inactive');
		const targetId = $(this).attr('href').replace('#', '');
		window.location.hash = targetId;
	});
});