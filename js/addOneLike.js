"use strict";

/** 
   * Fonction qui ajoute augmente le nombre de like en fonction du nombre de clique
   * @return {true}
 */ 

function addOneLike(){

  // I increment the number of like of each media, each time I click on the number/like div 

  let likeDiv = document.querySelector(".photographer_content_likes");
  let nombreDeLikes = document.querySelector(".nbr_of_likes");

  likeDiv.addEventListener("click", () => {
    nombreDeLikes.textContent = parseInt(nombreDeLikes.textContent) +1 ;

    //Je récupère les nouveaux totaux de likes
    //let updatedLikesArray = parseInt(numberOfLikes.textContent).map
  });
};



/*

console.log(parseInt(numberOfLikes.textContent));
//I create a new array, with all the likes

let mediaLikesArray = photographerInfo?.medias.map(media => media.likes);
let mediaLikesSorted = mediaLikesArray.sort();

//I call the likedTotalNumber function, and integrates the new number inside the HTML
document.querySelector(".photographer_statistics_likes_nbr").innerHTML = likeTotalNumber(mediaLikesArray);








function likeListenner(data){

    var likeToListen = document.getElementsByClassName("photographer_content_likes");
    likeToListen.addEventListenner("click", addOneLike(){
      let sumLike = 0; 
      let j = array.length;
      for (let i=0, i<j, i++){
        sumlike += array[i]; 
      };
    });
    return sumlike ;
};


var counter = 0;
$('.photographer_content_likes').click(function (){
    counter++;
    $(this).html(counter);
});

*/ 
