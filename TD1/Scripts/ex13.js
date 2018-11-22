$('a').hover(function () {
    $(this).css('font-weight', 'bold');
},
function () {
    $(this).css('font-weight', 'normal');
});

$(window).resize(function () {
    console.log("w: " + $(window).width() + ", h: " + $(window).height());
});

$('html').keydown(function (event) {
    console.log("key pressed = " + String.fromCharCode(event.which));
});