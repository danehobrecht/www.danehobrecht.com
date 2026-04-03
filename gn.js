/* General */

/* Disable browser scroll position restoration */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

var resume = document.getElementById('resume');
if (resume) {
	/* Reset carousel to first module on load */
	resume.scrollLeft = 0;

	/* Only make resume focusable via tab key */
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab') resume.setAttribute('tabindex', '0');
	});
	document.addEventListener('mousedown', function () {
		resume.removeAttribute('tabindex');
	});

	/* Scroll indicator focuses resume for arrow key scrolling */
	var scrollIcon = document.getElementById('h-scroll-icon');
	if (scrollIcon) {
		scrollIcon.addEventListener('click', function () {
			resume.setAttribute('tabindex', '0');
			resume.focus({ preventScroll: true });
			resume.removeAttribute('tabindex');
		});
	}
}
