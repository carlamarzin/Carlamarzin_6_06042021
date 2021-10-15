// Je récupère l'emplacement des tags de photographes, dans mon HTML > il s'agit d'un array 
var photographersTags = document.getElementsByClassName('tag');
alert('hello');
var photographersTagsParent = photographersTags.parentNode;
// Je récupère la selection faite par l'user, que je stocke dans une variable 
var buttonTag = document.getElementsByClassName('buttonTag');

// Définir la fonction filterPhotographersByTag

// Je récupère le tag souhaité 
// 














// Je loop through l'array : s'il contient l'un des tags selectionné > j'affiche le photographe. Sinon je ne l'affiche pas. 
/* 
function filterPhotographersByTag(e){

    // attention, la fonction filter renvoie un tableau d'array > un tableau sera affiché, l'autre pas. 

for (var i=0 ; i>photographersTags.length ; i++) {

    if (photographersTags[i].indexOf(buttonTag) !== -1) {
        photographersTags.className = ''
        return true 
    }else{
        photographersTags.className = 'invisible'
        return false
    }

}



String.prototype.substr()
String.prototype.substring()
.indexOf('$selected tag')
Array.prototype.includes()  permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.