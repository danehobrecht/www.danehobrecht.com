if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}

$(document).ready(function(){
	// Style active and inactive navigation dots appropriately 
	$('.dots a').click(function(event) { 
		$(this).attr('id', 'active').siblings().attr('id', 'inactive');
	});
	
	// Fetch anchor links
	const anchorLinks = document.querySelectorAll('a[href^="#"]');

	// Loop through each anchor link and modify its href attribute
	anchorLinks.forEach(link => {
		link.href = link.getAttribute('href').replace('#', '');
	});
});