if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}

$(document).ready(function(){
	// Style active and inactive navigation dots appropriately 
	$('.dots a').click(function(event) { 
		$(this).attr('id', 'active').siblings().attr('id', 'inactive');
	});
	
    document.addEventListener("DOMContentLoaded", function() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = link.getAttribute('href').replace('#', '');
                window.location.hash = targetId; // Update the URL hash without reloading the page
            });
        });
    });
});