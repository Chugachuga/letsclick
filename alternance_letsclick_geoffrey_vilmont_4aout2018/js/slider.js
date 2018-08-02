'use strict';

// La liste des slides du carrousel.
var slides =
[
    {image: 'img/slider/1.png'},
    {image: 'img/slider/2.jpg'}
];

// Objet contenant l'état du carrousel.
var state;

function onSliderGoToNext()
{
    // Passage à la slide suivante.
    state.index++;

    // Est-ce qu'on est arrivé à la fin de la liste des slides ?
    if(state.index == slides.length)
    {
        // Oui, on revient au début (le carrousel est circulaire).
        state.index = 0;
    }

    // Mise à jour de l'affichage.
    refreshSlider();
}

function onSliderGoToPrevious()
{
    state.index--;

    if(state.index < 0)
    {
        state.index = slides.length - 1;
    }
    refreshSlider();
}

function refreshSlider()
{
    var sliderImage;

    // Recherche des balises de contenu.
    $(document).ready(function(){
       $('.slider-content').css("background-image", "url('" + slides[state.index].image + "')");
    });
    // Changement de la source de l'image
}

document.addEventListener('DOMContentLoaded', function()
{
    // Initialisation du slider.
    state       = {};
    state.index = 0;                   // On commence à la première slide

    // Installation des gestionnaires d'évènement.
    installEventHandler('#slider-next', 'click', onSliderGoToNext);
    installEventHandler('#slider-previous', 'click', onSliderGoToPrevious);


    // Affichage initial.
    refreshSlider();
});
