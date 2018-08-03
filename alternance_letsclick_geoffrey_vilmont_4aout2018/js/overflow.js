'use strict';

var width = $('body').width();//on obtient la valeur de la largeur du body
var element = $('.element')[0];//on stock les données de type css dans une variable
var outercontainer = $('.outer-container')[0];// ici aussi, afin de pouvoir faire des modifs dessus

if (width >= 870) //Si la largeur de l'ecran est superieure a 870px; le container fera 50% de celle-ci, sinon 90%
{
  element.style.width = width * 600 / 1425 + "px";
  outercontainer.style.width = width * 600 / 1425 + "px";
}
else {
  element.style.width = width * 90 / 100 + "px";
  outercontainer.style.width = width * 90 / 100+ "px";
}
