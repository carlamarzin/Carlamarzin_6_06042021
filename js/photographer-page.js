"use strict";


      let urlParams = new URLSearchParams(document.location.search.substring(1));
      let paramId = urlParams.get("id");
     
      fetchData("../json/fishEyeData.json").then((data)=>{

          if(data === "Impossible de recupérer les données"){
    
                return alert(data);
    
          };

          const photographerInfo = getPhotographerInfo(paramId, data);

          document.querySelector("#photographer").innerHTML = createPhotographerProfile(photographerInfo?.infos);

          document.querySelector(".photographer__content").innerHTML = createPhotographerMedia(photographerInfo?.medias);

          const mediasElements = document.querySelectorAll(".photographer__content__article_media");

          mediasElements.forEach((media, index)=>{

               media.addEventListener("click", ()=>{

                    //J'apelle la fonction pour la lightbox, et lui passe deux paramètres > le premier est le array des médias
                    //Pour le second paramètre : je récupère l'élément sur lequel le user a cliqué

                    lightbox(photographerInfo?.medias, photographerInfo?.medias[index]);

               });
             
          });



          const buttonLike = document.querySelectorAll(".photographer-button-like");

          //A chaque clique sur un like, je veux augmenter le nombre en conséquence

          buttonLike.forEach((like)=>{

            //J'écoute l'évènement clique sur chaque like
 
            like.addEventListener("click", function(){

               let isLiked = this.dataset.like;

               const totalLikes = document.querySelector(".photographer_statistics_likes_nbr");

               let actualTotalLikes = Number(totalLikes.textContent);

               //Je récupère l'élément précedent dans mon HTML, que je convertis en nombre
               const actualPictureLikesNumber = Number(this.previousElementSibling.textContent);

               //Si l'élément n'a encore jamais été cliqué, alors je peux ajouter un like
               if(isLiked === "No like"){

                  this.previousElementSibling.textContent = actualPictureLikesNumber + 1; 

                  totalLikes.textContent = Number(actualTotalLikes + 1);

                  //je retourne l'information que l'élément a déjà été cliqué 
                  return this.dataset.like = "liked";

               }

               this.previousElementSibling.textContent = actualPictureLikesNumber - 1; 

               totalLikes.textContent = Number(actualTotalLikes - 1);

               //je retourne l'information que l'élément n'a pas déjà été cliqué 
               return this.dataset.like = "No like";
               
            });

          });

          // J'apelle la fonction pour modifier le nombre total de like
          var mediaLikesArray = photographerInfo?.medias.map(media => media.likes);
          likeTotalNumber(mediaLikesArray);


          //J'apelle la fonction pour afficher le tarif de chaque photographe 
          let photographerPriceArray = photographerInfo?.infos.map(info => info.price);
          photographerPrice(photographerPriceArray);


          // J'apelle la fonction pour ouvrir le formulaire de contact 
          formContact();



          // TRIER PAR
          // TRIER PAR
          // TRIER PAR

          // je récupère dans le DOM, l'emplacement des filtres
          const filtrePopularite = document.querySelector(".popularite");
          const filtreDate = document.querySelector(".date");
          const filtreTitre = document.querySelector(".titre");

          
          //Trier par popularité
          // j'écoute l'évènement clique sur le filtre de popularité 
          filtrePopularite.addEventListener('click', function(){

            //je crée un nouvel array, avec les medias
            const medias = photographerInfo?.medias;

            //je range en ordre croissant les média d'après leurs nombres de likes
            const mediasSortedByPopularite = medias.sort((a, b) => parseFloat(a.likes) - parseFloat(b.likes));

            //je remplace le contenu des médias
            document.querySelector('.photographer__content').innerHTML = createPhotographerMedia(mediasSortedByPopularite);

          });

          // Trier par titre 
          filtreTitre.addEventListener('click', function(){

            const medias = photographerInfo?.medias;

            const mediasSortedByTitre = medias.sort((a, b) => a.title.localeCompare(b.title));

            document.querySelector('.photographer__content').innerHTML = createPhotographerMedia(mediasSortedByTitre);

          });

          // Trier par date 
          filtreDate.addEventListener('click', function(){

            const medias = photographerInfo?.medias;

            medias.sort(function(a,b){
              return new Date(b.date) - new Date(a.date);
            });

            document.querySelector('.photographer__content').innerHTML = createPhotographerMedia(medias);

          });

        });

