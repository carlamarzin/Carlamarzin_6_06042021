"use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} data
   * @return {number}

 */ 


function likeIncrement(data){

    var likeToListen = document.getElementsByClassName("photographer_content_likes");
    likeToListen.addEventListenner("click", addOneLike(){
      let sumLike = 0; 
      for (let i=0, i<array.length, i++){
        sumlike += array[i]; 
      }
      return sumlike ;
    });
}


var counter = 0;
$('.photographer_content_likes').click(function (){
    counter++;
    $(this).html(counter);
});
