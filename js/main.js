"use strict"

$(document).ready(function(){

    var appar = $('#apparition');

    $('#btnHello').on("click", function(){
        
        var myTbl = [];
        var text = "U ARE DEADPOOL NOW";
        var textLen = text.length;        

        for (let i = 0; i < textLen; i++) { 
            myTbl.push(text[i]);
        } 

        var time = 200;
        appar.html("");
        $.each(myTbl, function(index, value){            
            setTimeout(function(){
                appar.append(value);
                }, time)
            time += 200;
            
        });
    });

});