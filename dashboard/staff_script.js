$(document).ready(function () {

    //switch navigation side-bar
    $('.nav-sidebar > li').click(function () {
        $('.nav-sidebar li').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('#operational-area').empty();
    });

    // apply leave tabable script
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    // add apply leave form at real time
    $(".nav-sidebar li:contains('Apply Leave')").click(
        function () {
            $.get("dashboardOperationalElement/applyLeaveFomrs.html", function (data) {
                $('#operational-area').html(data);
            });
        });

    // add claim compensation form at real time
    $(".nav-sidebar li:contains('Claim Compensation')").click(
        function () {
            $.get("dashboardOperationalElement/claimCompensationForm.html", function (data) {
                $('#operational-area').html(data);
            });
        });

    // add Employee Leave History form at real time
    $(".nav-sidebar li:contains('Employee Leave History')").click(
        function () {
            $.get("dashboardOperationalElement/empolyeeLeaveHistory.html", function (data) {
                $('#operational-area').html(data);
            });
        });

    // add Applications for Approval form at real time
    $(".nav-sidebar li:contains('Applications for Approval')").click(
        function () {
            $.get("dashboardOperationalElement/empolyeeLeaveHistory.html", function (data) {
                $('#operational-area').html(data);
            });
        });

});