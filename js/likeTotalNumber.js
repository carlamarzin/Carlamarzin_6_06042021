"use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} mediaLikesArray
   * @return {number}

 */ 

function likeTotalNumber(mediaLikesArray){

    let totalPhotographersLikes = mediaLikesArray.reduce((a, b)=> a + b,0);

    document.querySelector('.photographer_statistics_likes_nbr').innerHTML = totalPhotographersLikes;

    return totalPhotographersLikes;
    
};