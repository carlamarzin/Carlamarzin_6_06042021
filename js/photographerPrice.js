"use strict";

/** 
   * Fonction qui ajoute augmente le nombre de like en fonction du nombre de clique
   * @param {array} photographerPrice
   * @return {true}

 */ 

function photographerPrice(photographerPrice){
    
      //Je récupère l'info du prix du photographe, et je l'intègre en HTML
      document.querySelector(".photographer_statistics_likes_price").innerHTML = Number(photographerPrice) + "€/jour";

      return photographerPrice;

}
          