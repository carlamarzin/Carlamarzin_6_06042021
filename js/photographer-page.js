"use strict";

// La méthode then renvoie un objet promise, elle prend un argument callback à utiliser en cas d'échec de la promise

  fetchData("../json/fishEyeData.json").then((data)=>{

      if(data === "Impossible de recupérer les données"){

             return alert(data);

      }

      // Une fois que j'ai loadé les données
      // Je veux récupérer l'id du photographe (via l'url?)
      // Je load uniquement le photographe qui a cet ID
      // Je loaf ensuite uniquement les photos qui matchent avec ce même ID

      //Ajouter l'en-tête des photographes
      document.querySelector("#photographer").innerHTML = createPhotographerPage(data?.photographers);

      //Ajouter les cartes photos des photographes 
      document.querySelector(".photographer__content").innerHTML = createPhotographerContent(data?.media);

      //Listenning likes on photos

      //Calculating total number of likes
      var mediaLikeArray = data?.media.map(media => media.likes);
      document.querySelector("photographer_statistics_likes_nbr").innerText = likeTotalNumber(mediaLikeArray).toString();
      console.log(likeTotalNumber(mediaLikeArray));
      //Faut-il que je passe le number en string, avec toString()? 

    });

  