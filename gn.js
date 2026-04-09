/* General */

/* Disable browser scroll position restoration */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

var resume = document.getElementById('resume');
if (resume) {
	/* Reset carousel to first module on load */
	resume.scrollLeft = 0;
	window.addEventListener('pageshow', function () { resume.scrollLeft = 0; });
	resume.setAttribute('tabindex', '0');

	/* Hide outline when focused via click or page load, restore on tab */
	resume.style.outline = 'none';
	document.addEventListener('mousedown', function () {
		resume.style.outline = 'none';
	});
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab') resume.style.outline = '';
	});

	/* Scroll indicator focuses resume for arrow key scrolling */
	var scrollIcon = document.getElementById('h-scroll-icon');
	if (scrollIcon) {
		scrollIcon.addEventListener('click', function () {
			resume.focus();
		});
	}
}
