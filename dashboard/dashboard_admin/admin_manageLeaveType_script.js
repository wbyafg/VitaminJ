$(function(){
    var i = 0;
    var j = 0;
    var k = 0;
    
    $("#MedicalLeaveBtn").on("click",function(){
        if(i%2===0)
        {
             $("#MedicalLeaveBtn").text("Disabled");
             $("#MedicalLeaveBtn").removeClass("btn btn-success");
             $("#MedicalLeaveBtn").addClass("btn btn-danger");
           
        }
        else
        {
            $("#MedicalLeaveBtn").text("Enabled");
            $("#MedicalLeaveBtn").removeClass("btn btn-danger");
            $("#MedicalLeaveBtn").toggleClass("btn btn-success");
           
            
        }
       i++;
    });
    
    
    $("#CompensationLeaveBtn").on("click",function(){
        if(j%2===0)
        {
             $("#CompensationLeaveBtn").text("Disabled");
             $("#CompensationLeaveBtn").removeClass("btn btn-success");
             $("#CompensationLeaveBtn").addClass("btn btn-danger");
           
        }
        else
        {
            $("#CompensationLeaveBtn").text("Enabled");
            $("#CompensationLeaveBtn").removeClass("btn btn-danger");
            $("#CompensationLeaveBtn").toggleClass("btn btn-success");
           
            
        }
       j++;
    });
    
    
    $("#AnnualLeaveBtn").on("click",function(){
        if(k%2===0)
        {
             $("#AnnualLeaveBtn").text("Disabled");
             $("#AnnualLeaveBtn").removeClass("btn btn-success");
             $("#AnnualLeaveBtn").addClass("btn btn-danger");
           
        }
        else
        {
            $("#AnnualLeaveBtn").text("Enabled");
            $("#AnnualLeaveBtn").removeClass("btn btn-danger");
            $("#AnnualLeaveBtn").toggleClass("btn btn-success");
           
            
        }
       k++;
    });    
});