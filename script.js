if ('serviceWorker' in navigator) { navigator.serviceWorker.register('service-worker.js'); }

$(document).ready(function(){ 
	$('.dots a').click(function(event) { 
		$(this).attr('id', 'active').siblings().attr('id', 'inactive');
		$(event.currentTarget).attr('id', 'active').siblings().attr('id', 'inactive');
	});
});