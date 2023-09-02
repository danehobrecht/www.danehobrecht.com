$(window).on('load', function() {
	// Auto-scroll handling
	$('#resume').scrollLeft(0);
	history.scrollRestoration = "manual";

	// Navigation dots
	const resumeContainer = $('#resume');
	const dots = $('.dots a');
	let moduleWidth = calculateModuleWidth();

	resumeContainer.on('scroll touchmove', function() {
		const scrollPosition = resumeContainer.scrollLeft();
		const containerWidth = resumeContainer.innerWidth();
		const snappedModuleIndex = Math.floor(scrollPosition / moduleWidth);
		const middleModuleIndex = Math.floor(snappedModuleIndex + containerWidth / (2 * moduleWidth));
		updateActiveDot(middleModuleIndex);
	});

	let isDragging = false;
	let startX, scrollLeft;

	resumeContainer.on('mousedown', function(e) {
		isDragging = true;
		startX = e.clientX - resumeContainer.offset().left;
		scrollLeft = resumeContainer.scrollLeft();
	});

	$(document).on('mousemove', function(e) {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.clientX - resumeContainer.offset().left;
		const walk = (x - startX) * 8;
		resumeContainer.scrollLeft(scrollLeft - walk);
	});

	$(document).on('mouseup', function() {
		isDragging = false;
	}).on('mouseleave', function() {
		isDragging = false;
	});

	function calculateModuleWidth() {
		const width = $('.module').eq(0).width();
		return width;
	}

	function updateActiveDot(activeIndex) {
		dots.removeAttr('id');
		dots.eq(activeIndex).attr('id', 'active');
	}

	dots.on('click', function(e) {
		dots.removeAttr('id');
		$(this).attr('id', 'active');
    });
});