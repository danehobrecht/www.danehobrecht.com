$(window).on('load', function() {
	const resumeContainer = $('#resume');
	let startX, scrollLeft, isDragging = false;

  	// Reset position (Chrome)
	resumeContainer.scrollLeft(0);

	resumeContainer.on('mousedown', (e) => {
		isDragging = true;
		startX = e.clientX - resumeContainer.offset().left;
		scrollLeft = resumeContainer.scrollLeft();
	});

	$(document).on('mousemove', (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.clientX - resumeContainer.offset().left;
		resumeContainer.scrollLeft(scrollLeft - (x - startX) * 8);
	});

	$(document).on('mouseup mouseleave', () => {
		isDragging = false;
	});
});