'use strict';

var id;
var modal;

$('.Cuncatbutton').click(function(){
    uncover();
});

$('.Lorembutton').click(function(){
    uncover();
});

function cover(n)
{
  $('#testcover')[0].style.display = "block";
  $('.containerajax')[0].style.display = "block";
  $('#ajax')[0].style.display = "block";
  $('#ajax').append($('<div>').load('modal_view/modal' + n + '.html'));
}

function uncover()
{
  $('#testcover')[0].style.display = "none";
  $('.containerajax')[0].style.display = "none";
  $('#ajax').html("");
  $('#ajax').empty();
  $('#ajax')[0].style.display = "none";
}
