"use strict";


      let urlParams = new URLSearchParams(document.location.search.substring(1));
      let paramId = urlParams.get("id");
     
      fetchData("../json/fishEyeData.json").then((data)=>{

          if(data === "Impossible de recupérer les données"){
    
                return alert(data);
    
          }

          const photographerInfo = getPhotographerInfo(paramId, data);

          document.querySelector("#photographer").innerHTML = createPhotographerProfile(photographerInfo?.infos);

          document.querySelector(".photographer__content").innerHTML = createPhotographerMedia(photographerInfo?.medias);

          formContact();


          //LIKES & MEDIA
          //LIKES & MEDIA
          //LIKES & MEDIA

          // I increment the number of like of each media, each time I click on the number/like div 
          var likeDiv = document.querySelector(".photographer_content_likes");
          var numberOfLikes = document.querySelector(".nbr_of_likes");

          likeDiv.addEventListener("click", () => {
            numberOfLikes.textContent = parseInt(numberOfLikes.textContent) +1 ;

            //Je récupère les nouveaux totaux de likes
            //let updatedLikesArray = parseInt(numberOfLikes.textContent).map

            let mediaLikesArray = photographerInfo?.medias.map(media => media.likes);
            let mediaLikesSorted = mediaLikesArray.sort();

            document.querySelector(".photographer_statistics_likes_nbr").innerHTML = likeTotalNumber(mediaLikesArray);

            const sortedMedia = photographerMedia.sort();


          });
          
          console.log(parseInt(numberOfLikes.textContent));
          //I create a new array, with all the likes

          let mediaLikesArray = photographerInfo?.medias.map(media => media.likes);
          let mediaLikesSorted = mediaLikesArray.sort();

          //I call the likedTotalNumber function, and integrates the new number inside the HTML
          document.querySelector(".photographer_statistics_likes_nbr").innerHTML = likeTotalNumber(mediaLikesArray);


          // PRICE
          // PRICE
          // PRICE

          //Je récupère l'info du prix du photographe, et je l'intègre en HTML
          let photographerPrice = photographerInfo?.infos.map(info => info.price);
          document.querySelector(".photographer_statistics_likes_price").innerHTML = Number(photographerPrice) + "€/jour";

                    // je crée un array, contenant tous les médias
                    const photographerMedia = photographerInfo?.medias;
          
                    //je récupère l'élément likes sur
                    const sortedMedia = photographerMedia.sort();

          // TRIER PAR
          // TRIER PAR
          // TRIER PAR

          //je stocke chaque valeur de filtre dans des variables 
          const filtrePopularite = document.querySelector("#popularite");
          const filtreDate = document.querySelector("#date");
          const filtreTitre = document.querySelector("#titre");

          const filtres = document.querySelector(".trier_par_value");

          // j'écoute le click sur chaque choix de filtre, et je retourne les médias, dans l'ordre choisi
          //je crée un array pour chaque info filtrante
          //je les ordonne avec .sort()
          //j'intègre l'array des média en HTML

          filtrePopularite.addEventListener("click", function(){
            let mediasLikeArrSorted = photographerInfo?.medias.map(media => media.likes).sort();
            console.log(mediasLikeArrSorted);
            document.querySelector(".photographer__content").innerHTML = createPhotographers(mediasLikeArrSorted);
          });

          filtreDate.addEventListener("click", function(){
            let mediasTitleArrSorted = photographerInfo?.medias.map(media => media.title).sort();
            console.log(mediasTitleArrSorted);
            document.querySelector(".photographer__content").innerHTML = createPhotographers(mediasTitleArrSorted);
          });

          filtreTitre.addEventListener("click", function(){
            let mediasDateArrSorted = photographerInfo?.medias.map(media => media.date).sort();
            console.log(mediasDateArrSorted);
            document.querySelector(".photographer__content").innerHTML = createPhotographers(mediasDateArrSorted);
          });

      });
      