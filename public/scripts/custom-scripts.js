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