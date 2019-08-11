$(document).ready (function() {

    //values

    var trainName;
    var trainNames = [];

//appends train info to table
function showTrains() {
    $("#table-body").append("<tr class='table-row'><td class='table-name'> " + trainName " </td></tr>");

};
   
    //updates table with train info

    function updateTable() {
        $("#table-body") .empty();
        for (i = 0; i < trainNames.length; i++) {
            trainName = trainNames [i];
            showTrains();
        };
    
    };
    //capture button click
    $(document).on ('click', '#add-train', function(event) {
event.preventDeafult();
name = $("#name-input").val().trim();
    });

    //empty input fields
    $("#name-input").val('');


});