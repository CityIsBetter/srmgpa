grade_points = {
    "O":10,
    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C":5,
    "P":4,
    "F":0,
    "Ab":0,
    "I":0
};


var count = 7;
$("#go").on("click",calculate);
$("#reset").on("click", function(){
    $("#go").removeClass("hidden");
    $("#reset").addClass("hidden");
    $("#result").addClass("hidden");
    $("#more").removeClass("hidden");
});
function calculate(event)
{
    var grade_list = $(".opt");
    var credit_list = $(".cred");
    var points = 0;
    var sum_credits = 0;
    for(var i=0; i<credit_list.length; i++)
        {
            if(credit_list[i].value==="")
                {
                    var credit = 0;
                }
            else
            {
                var credit = Number(credit_list[i].value);
            }
            sum_credits+=credit;
            var gradept = grade_points[grade_list[i].value];
            points+=credit*gradept;
        }
    var gpa = (points/sum_credits);
    $("#result").removeClass("hidden");
    $("#more").addClass("hidden");
    $("#gpa").text(gpa.toFixed(2));
    $("#reset").removeClass("hidden");
    $("#go").addClass("hidden");
    window.scrollTo(0,0);
    event.stopPropagation();
}

$("#more").on("click", function(event){
    count+=1;
    $("form table").append("<tr><td><label>" + count + ".</label></td><td><input type='number' class='cred form-control' pattern='\d*'></td><td><select class='opt form-control'><option>O</option><option>A+</option><option>A</option><option>B+</option><option>B</option><option>C</option><option>P</option><option>F</option><option>Ab</option><option>I</option></select></td></tr>");
});
