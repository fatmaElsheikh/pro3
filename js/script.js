// JavaScript Document
// owl
$('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    //script
$('.nav-item').click(function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});

$('.blood .dropdown-item').click(function() {
    $bld = $(this).html();
    $('.inp').val($bld);
});
$('.country .dropdown-item').click(function() {
    $bldd = $(this).html();
    $('.inpp').val($bldd);
});