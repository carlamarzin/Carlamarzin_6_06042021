"use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} data
   * @return {number}

 */ 

function likeTotalNumber(data){
    
    var totalPhotographersLikes = 0
    var totalPhotographersLikes = data.reduce((a, b)=> a + b,0);

    return totalPhotographersLikes;
}