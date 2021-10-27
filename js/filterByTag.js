"use strict";

 /** 
   * Fonction qui filtre les photographes par tag
   * @param {string} url
   * @return {promise}

 */  

// Je récupère l'emplacement des tags que selectionnera le user

var selectedTag = ; //ici le tag selectionné par le user

var tagPortraits = document.getElementsByClassName('portraits').firstChild.data;
var tagArt = document.getElementsByClassName('art');
var tagFashion = document.getElementsByClassName('fashion');
var tagArchitecture = document.getElementsByClassName('architecture');
var tagTravel = document.getElementsByClassName('travel');
var tagSport = document.getElementsByClassName('sport');
var tagAnimals = document.getElementsByClassName('animals');
var tagEvents = document.getElementsByClassName('events');


// Je récupère l'emplacement des tags de photographers (il s'agit d'un array)

var photographer = document.getElementsByClassName('photographer');
var photographersTags = document.getElementsByClassName('tag').textContent;

// J'écoute l'évènement click sur la selection du tag par l'user, et lui applique la fonction showTaggedPhotographers
/*tagPortraits.addEventListener('click', getTaggedPhotographers);
tagArt.addEventListener('click', getTaggedPhotographers);
tagFashion.addEventListener('click', getTaggedPhotographers);
tagArchitecture.addEventListener('click', getTaggedPhotographers);
tagTravel.addEventListener('click', getTaggedPhotographers);
tagSport.addEventListener('click', getTaggedPhotographers);
tagAnimals.addEventListener('click', getTaggedPhotographers);
tagEvents.addEventListener('click', getTaggedPhotographers);*/

// Je crée la function getTaggedPhotographers, qui permettra d'afficher les photographers ayant le tag correspondant

//Je récupère le string du tag
function tagToString(tag){
    tag.toString();
}

var portraitsString = 'portraits';
var artString = 'art';
var fashionString = 'fashion';
var architectureString = 'architecture';
var travelString = 'travel';
var sportString = 'portraits';
var animalsString = 'animals';
var eventsString = 'events';

//Je loop through les tags des photographes : s'ils contiennent le string du tag, je les stores dans un tableau 

//Ensuite, je décide d'afficher les photographes de ce tableau
//Et je décide de ne pas afficher les photographes du second tableau


// Je loop through l'array : s'il contient l'un des tags selectionné > j'affiche le photographe. Sinon je ne l'affiche pas. 
 
function showTaggedPhotographers(e){

    // attention, la fonction filter renvoie un tableau d'array > un tableau sera affiché, l'autre pas. 

for (var i=0 ; i>photographersTags.length ; i++) {

    if (photographersTags[i].indexOf(tagToString(selectedTag)) !== -1) {
        //indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. 
        //Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.
        //Ici, le tableau d'array des photographes qui ont le SLECTEDTAG. 
        //Alors ce tableau est affiché : la carte photographe est affichée > jouer avec le parent node 
        photographersTags.parentElement.className = '';
        return true ;
    }else{
        //Sinon ici, le tableau des photographes qui ne contiennent pas le SELECTEDTAG
        //j'ajoute alors une classe invisible à l'élément parent : la carte photographe. La carte photographe n'est pas affichée,
        photographersTags.parentElement.className = 'invisible';
        return false;
    }
}

//Au final, j'écoute l'évènement click sur le tag choisi par le user
.addEventListener('click', showTaggedPhotographers(e));


/*

String.prototype.substr()
String.prototype.substring()
.indexOf('$selected tag') -------- indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau.

Array.prototype.slice()  -------- La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
Array.prototype.filter()
Array.prototype.includes()  -------- permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.

*/