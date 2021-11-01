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

      document.querySelector("#photographer").innerHTML = createPhotographerPage(data?.photographers);
      console.log(data?.photographers);

      document.querySelector(".photographer__content").innerHTML = createPhotographerContent(data?.media);
      console.log(data?.media);

    });

  