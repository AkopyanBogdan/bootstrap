$(function() {
    $('#all-products article').hover(
        function() { $(this).addClass('pulse animated')},
        function(){ $(this).removeClass('pulse animated')}
    )
});
