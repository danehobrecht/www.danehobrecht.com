if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}

$(document).ready(function(){
	// Style active and inactive navigation dots appropriately 
	$('.dots a').click(function(event) { 
		$(this).attr('id', 'active').siblings().attr('id', 'inactive');
	});

	document.addEventListener("DOMContentLoaded", function() {
		const navLinks = document.querySelectorAll('.dots a[href^="#"]'); // Select all navigation links

		// Loop through each navigation link and add a click event listener
		navLinks.forEach(link => {
			link.addEventListener('click', function(event) {
				event.preventDefault(); // Prevent the default link behavior

				const targetId = link.getAttribute('href').replace('#', ''); // Get the target ID
				window.location.href = targetId; // Update the URL without the "#" symbol
			});
		});
	});
});