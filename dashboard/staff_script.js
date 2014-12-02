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

    //    add apply leave form at real time
    $(".nav-sidebar li:contains('Apply Leave')").click(
        function () {
            var text = '<div class="bs-example bs-example-tabs" role="tabpanel"> <ul id="myTab" class="nav nav-tabs" role="tablist"> <li role="presentation" class="active"><a href="#medical" id="medical-tab" role="tab" data-toggle="tab" aria-controls="medical" aria-expanded="true">Medical Leave</a> </li> <li role="presentation"><a href="#compensation" role="tab" id="compensation-tab" data-toggle="tab" aria-controls="compensation">Compensation</a> </li> <li role="presentation"><a href="#Annual" role="tab" id="Annual-tab" data-toggle="tab" aria-controls="Annual">Annual Leave</a> </li> </ul> <div id="myTabContent" class="tab-content"> <div role="tabpanel" class="tab-pane fade in active" id="medical" aria-labelledby="medical-tab"> <form role="form"> <div class="form-group"> <label for="reason">Reason</label> <input type="text" class="form-control" id="reason"> </div> <div class="form-group"> <label for="period">Period</label> <input type="number" class="form-control" id="period" step="1"> </div> <div class="form-group"> <label for="clinic">Clinic</label> <input type="text" class="form-control" id="clinc"> </div> <div class="form-group"> <label for="consultationDate">Consultation Date</label> <input type="date" class="form-control" id="consultationDate"> </div> <div class="form-group"> <label for="startDate">Start Date</label> <input type="date" class="form-control" id="startDate"> </div> <div class="form-group"> <label for="endDate">End Date</label> <input type="date" class="form-control" id="endDate"> </div> <div class="form-group"> <label for="remarks">Remarks</label> <textarea class="form-control" rows="5" id="remark" style="resize:none"></textarea> </div> <button type="submit" class="btn btn-default">Submit</button> </form> </div> <div role="tabpanel" class="tab-pane fade" id="compensation" aria-labelledby="compensation-tab"> <form role="form"> <div class="form-group"> <label for="reason">Reason</label> <input type="text" class="form-control" id="reason"> </div> <div class="form-group"> <label for="period">Period (Hours)</label> <select class="form-control" id="period"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> </select> </div> <div class="form-group"> <label for="startDate">Start Date</label> <input type="date" class="form-control" id="startDate"> </div> <div class="form-group"> <label for="endDate">End Date</label> <input type="date" class="form-control" id="endDate"> </div> <div class="form-group"> <label for="remarks">Remarks</label> <textarea class="form-control" rows="5" id="remark" style="resize:none"></textarea> </div> <button type="submit" class="btn btn-default">Submit</button> </form> </div> <div role="tabpanel" class="tab-pane fade" id="Annual" aria-labelledby="Annual-tab"> <form role="form"> <div class="form-group"> <label for="period">Period</label> <input type="number" class="form-control" id="period" step="1"> </div> <div class="form-group"> <label for="startDate">Start Date</label> <input type="date" class="form-control" id="startDate"> </div> <div class="form-group"> <label for="endDate">End Date</label> <input type="date" class="form-control" id="endDate"> </div> <div class="form-group"> <label for="remarks">Remarks</label> <textarea class="form-control" rows="5" id="remark" style="resize:none"></textarea> </div> <button type="submit" class="btn btn-default">Submit</button> </form> </div> </div> </div> </div><br><br>';
            $('#operational-area').append(text);
            console.log(text);
        });
});