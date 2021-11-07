"use strict";


      let urlParams = new URLSearchParams(document.location.search.substring(1));
      let paramId = urlParams.get("id");
     
      fetchData("../json/fishEyeData.json").then((data)=>{

          if(data === "Impossible de recupérer les données"){
    
                return alert(data);
    
          }

          const photographerInfo = getPhotographerInfo(paramId, data);

          console.log(photographerInfo);
          console.log(paramId);

          document.querySelector("#photographer").innerHTML = createPhotographerProfile(photographerInfo?.infos);

          document.querySelector(".photographer__content").innerHTML = createPhotographerMedia(photographerInfo?.medias);

          //I create a new array, with all the likes
          let mediaLikesArray = photographerInfo?.medias.map(media => media.likes);

          //I call the likedTotalNumber function, and integrates the new number inside the HTML
          document.querySelector(".photographer_statistics_likes_nbr").innerHTML = likeTotalNumber(mediaLikesArray);

          //Je récupère l'info du prix du photographe, et je l'intègre en HTML
          let photographerPrice = photographerInfo?.infos.map(info => info.price);
          document.querySelector(".photographer_statistics_likes_price").innerHTML = Number(photographerPrice) + "€/jour";

      });
      