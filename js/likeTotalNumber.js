"use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} dataLikes
   * @return {number}

 */ 

function likeTotalNumber(mediaLikesArray){

    var totalPhotographersLikes = 0

    var totalPhotographersLikes = mediaLikesArray.reduce((a, b)=> a + b,0);

    return totalPhotographersLikes;
};