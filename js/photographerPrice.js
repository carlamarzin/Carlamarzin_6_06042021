"use strict";

/** 
   * Fonction qui ajoute augmente le nombre de like en fonction du nombre de clique
   * @return {true}

 */ 

function photographerPrice(){
    
//Je récupère l'info du prix du photographe, et je l'intègre en HTML
let photographerPrice = photographerInfo?.infos.map(info => info.price);
document.querySelector(".photographer_statistics_likes_price").innerHTML = Number(photographerPrice) + "€/jour";

// je crée un array, contenant tous les médias
const photographerMedia = photographerInfo?.medias;

//je récupère l'élément likes sur
const sortedMedia = photographerMedia.sort();

}
          