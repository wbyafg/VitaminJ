$(document).ready(function () {
    $("li").click(function () {
        var listItems = $("#navbar li");
        listItems.each(function () {
            $(this).removeClass("active");
        });

        $("li").click(function () {
            $(this).addClass("active");
        });
    });
});