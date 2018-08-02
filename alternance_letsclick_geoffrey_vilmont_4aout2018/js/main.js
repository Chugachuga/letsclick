'use strict';

$('.modalbutton').click(function(event){
    id = event.target.id;
    modal = id.match(/[0-9]+/g);
    cover(modal);
});

$("#london").click(function() {
    $("#paris")[0].style.border = "none";
    $("#paris")[0].style.color = "#b1b1b1";
    $("#london")[0].style.borderBottom = "1px solid white";
    $("#london")[0].style.color = "white";
    $("#addresslondon")[0].style.display = "block";
    $("#addressparis")[0].style.display = "none";
  });

$("#paris").click(function() {
    $("#london")[0].style.border = "none";
    $("#london")[0].style.color = "#b1b1b1";
    $("#paris")[0].style.borderBottom = "1px solid white";
    $("#paris")[0].style.color = "white";
    $("#addressparis")[0].style.display = "block";
    $("#addresslondon")[0].style.display = "none";
  });
