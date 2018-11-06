$('body').scrollspy({ target: '#main-navbar' });

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

$(window).on('activate.bs.scrollspy', function (e) {
    history.replaceState({}, "", $('.nav-item .active').attr("href"));
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready( function() {
    $(".navbar li.nav-item").hasClass("active") ? $(".navbar li.nav-item").removeClass("active") : {};
    console.log(window.location.pathname);
    $locationUrl = window.location.pathname;
    $locationUrl.includes("/profile") ? $("li#profilenav").addClass("active") : {} ;
});