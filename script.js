// Install service worker
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('service-worker.js'); }

// Navigation dots
$(document).ready(function() {
	const scrollContainer = $('#resume');
	const dots = $('.dots a');
	let moduleWidth = calculateModuleWidth();

	scrollContainer.on('scroll', function() {
		const scrollPosition = scrollContainer.scrollLeft();
		const containerWidth = scrollContainer.width();
		const snappedModuleIndex = Math.floor(scrollPosition / moduleWidth);
		const middleModuleIndex = Math.floor(snappedModuleIndex + containerWidth / (2 * moduleWidth));
		updateActiveDot(middleModuleIndex);
	});

	let isDragging = false;
	let startX, scrollLeft;

	scrollContainer.mousedown(function(e) {
		isDragging = true;
		startX = e.pageX - scrollContainer.offset().left;
		scrollLeft = scrollContainer.scrollLeft();
	});

	$(document).mousemove(function(e) {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - scrollContainer.offset().left;
		const walk = (x - startX) * 4;
		scrollContainer.scrollLeft(scrollLeft - walk);
	});

	$(document).mouseup(function() {
		isDragging = false;
	}).mouseleave(function() {
		isDragging = false;
	});

	function calculateModuleWidth() { return $('.module').eq(0).width(); }

	function updateActiveDot(activeIndex) {
		dots.removeAttr('id');
		dots.eq(activeIndex).attr('id', 'active');
	}
});