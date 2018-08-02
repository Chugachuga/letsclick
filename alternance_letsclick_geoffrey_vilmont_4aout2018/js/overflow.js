'use strict';

var width = $('body').width();
var element = $('.element')[0];
var outercontainer = $('.outer-container')[0];
element.style.width = width * 600 / 1425 + "px";
outercontainer.style.width = width * 600 / 1425 + "px";
