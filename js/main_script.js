$(document).ready(function() {

    $('.works').addClass('show');

    $('#btn_works').click(function () {
        $('.works').addClass('show');
        $('.main-screen').removeClass('show');
    });

    $('#btn_home').click(function () {
        $('.main-screen').addClass('show');
        $('.works').removeClass('show');
    });

});
