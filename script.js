$(document).ready(() => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('service-worker.js');
	}

	const scrollContainer = $('#resume');
	const dots = $('.dots a');
	let moduleWidth = calculateModuleWidth();
	let isDragging = false, startX, scrollLeft;

	$(window).on('load', () => {
		scrollContainer.on('scroll', () => {
			const scrollPosition = scrollContainer.scrollLeft();
			const containerWidth = scrollContainer.width();
			const snappedModuleIndex = Math.floor(scrollPosition / moduleWidth);
			const middleModuleIndex = Math.floor(snappedModuleIndex + containerWidth / (2 * moduleWidth));
			updateActiveDot(middleModuleIndex);
		});

		scrollContainer.on('mousedown touchstart', (e) => {
			isDragging = true;
			startX = e.clientX - scrollContainer.offset().left;
			scrollLeft = scrollContainer.scrollLeft();
		});

		$(document).on('mousemove touchmove', (e) => {
			if (!isDragging) return;
			e.preventDefault();
			const x = e.clientX - scrollContainer.offset().left;
			const walk = (x - startX) * 8;
			scrollContainer.scrollLeft(scrollLeft - walk);
		});

		$(document).on('mouseup mouseleave touchend', () => { isDragging = false; });
	});

	function calculateModuleWidth() {
		return $('.module').eq(0).width();
	}

	function updateActiveDot(activeIndex) {
		dots.removeAttr('id');
		dots.eq(activeIndex).attr('id', 'active');
	}
});