// Load header and footer
$(function() {
    $("div[data-include]").each(function() {
        $(this).load($(this).attr("data-include"));
    });
});

// Slideshow functionality
$(document).ready(function() {
    const slides = $('.slide');
    let currentSlide = 0;

    // Update thumbnail highlighting
    function updateThumbnails() {
        $('.thumbnail').removeClass('thumbnail-active');
        $('.thumbnail').eq(currentSlide).addClass('thumbnail-active');
    }

    // Initialize slideshow
    function showSlide(index) {
        slides.removeClass('slide-active');
        $(slides[index]).addClass('slide-active');
        updateThumbnails();
    }

    // Create thumbnails
    slides.each(function(index) {
        const img = $(this).find('img');
        const originalSrc = img.attr('src');
        
        // Create a div-based thumbnail instead of an img element
        const thumbnail = $('<div>')
            .addClass('thumbnail')
            .css({
                'background-image': 'url(' + originalSrc + ')',
                'background-size': 'cover',
                'background-position': 'center'
            })
            .click(() => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        
        $('.thumbnails').append(thumbnail);
    });

    // Navigation handlers
    $('.prev').click(() => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    $('.next').click(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Show first slide
    showSlide(0);
});
