$(document).ready(function() {
    // Install service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js');
    }

    // Navigation dots
    const scrollContainer = $('#resume');
    const dots = $('.dots a');
    let moduleWidth = calculateModuleWidth();

    scrollContainer.on('scroll', function() {
        const scrollPosition = scrollContainer.scrollLeft();
        const containerWidth = scrollContainer.width();
        const snappedModuleIndex = Math.floor(scrollPosition / moduleWidth);
        const middleModuleIndex = Math.floor(snappedModuleIndex + containerWidth / (2 * moduleWidth));
        
        console.log('Scroll Position:', scrollPosition); // Added console log
        console.log('Snapped Module Index:', snappedModuleIndex); // Added console log
        console.log('Middle Module Index:', middleModuleIndex); // Added console log
        
        updateActiveDot(middleModuleIndex);
    });

    let isDragging = false;
    let startX, scrollLeft;

    scrollContainer.on('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX - scrollContainer.offset().left;
        scrollLeft = scrollContainer.scrollLeft();
    });

    $(document).on('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX - scrollContainer.offset().left;
        const walk = (x - startX) * 4;
        scrollContainer.scrollLeft(scrollLeft - walk);
    });

    $(document).on('mouseup', function() {
        isDragging = false;
    }).on('mouseleave', function() {
        isDragging = false;
    });

    function calculateModuleWidth() {
        return $('.module').eq(0).width();
    }

    function updateActiveDot(activeIndex) {
        dots.removeAttr('id');
        dots.eq(activeIndex).attr('id', 'active');
    }
});