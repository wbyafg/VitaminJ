$(document).ready(function () {

    //switch navigation side-bar
    $('.nav-sidebar > li').click(function () {
        $('.nav-sidebar li').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        console.log(this);
    });
});

$(document).ready(function () {
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
});