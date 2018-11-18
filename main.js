console.log('HELLO');

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$(function () {
    $(".ul").find("li").click(function () {
        $(".ul li").removeClass('active')
        $(this).addClass('active')
    })
});

