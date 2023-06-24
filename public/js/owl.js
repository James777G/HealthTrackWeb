$(function () {
    $('#password').focus(function () {
        $('#owl').addClass('password');
    }).blur(function () {
        $('#owl').removeClass('password');
    })
})