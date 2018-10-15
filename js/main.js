"use strict"

$(document).ready(function(){

    var appar = $('#apparition');

    $('#btnHello').on("click", function(){
        var tblTxt = ["H","E","L","L","0"];
        var time = 200;
        $.each(tblTxt, function(index, value){
            setTimeout(function(){
                appar.append(value);
                }, time)
            time += 200;
            
        });
    });

});