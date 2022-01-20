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

          const buttonLike = document.querySelectorAll(".photographer-button-like");

          const mediasElements = document.querySelectorAll(".photographer__content__article_media");

          mediasElements.forEach((media, index)=>{

               media.addEventListener("click", ()=>{

                    //J'apelle la fonction pour la lightbox, et lui passe deux paramètres > le premier est le array des médias
                    //Pour le second paramètre : je récupère l'élément sur lequel le user a cliqué

                    lightbox(photographerInfo?.medias, photographerInfo?.medias[index]);

               });

              
             
          });


         function keyboardAccessibility(){

              document.addEventListener("keydown", (event)=>{

                if(event.key === "Enter"){

                    // gestion du clique sur les medias du photographes

                    if(["photographer__content__article_media video", "photographer__content__article_media"].includes(event.target?.className) === true){

                            // On a besoin de trouver la position(index) qu'a le media sur lequel on a clique dans le tableau des medias,

                            // Car comme on le sait la lightbox prend en parametres le tableau contenant tous les medias et le media courant sur lequel on a clique.

                            const altTxt = event?.target?.dataset?.alttxt;

                            const index = photographerInfo?.medias.findIndex((element)=>{

                                return element?.alt === altTxt;

                            });


                          //J'apelle la fonction pour la lightbox, et lui passe deux paramètres > le premier est le array des médias
                          //Pour le second paramètre : je récupère l'élément sur lequel le user a cliqué

                          return lightbox(photographerInfo?.medias, photographerInfo?.medias[index]);


                    }

                     //On gère le clique sur les flèches next et previous de la lightbox 

                     if(["photographer__content__article_media video", "photographer__content__article_media"].includes(event.target?.className) === true){

                            // On a besoin de trouver la position(index) qu'a le media sur lequel on a clique (flèche) dans le tableau des medias,

                            // Car comme on le sait la lightbox prend en parametres le tableau contenant tous les medias et le media courant sur lequel on a clique.

                            const altTxt = event?.target?.dataset?.alttxt;

                            const index = photographerInfo?.medias.findIndex((element)=>{

                                return element?.alt === altTxt;

                            });


                          //J'apelle la fonction pour la lightbox, et lui passe deux paramètres > le premier est le array des médias
                          //Pour le second paramètre : je récupère l'élément sur lequel le user a cliqué

                          return lightbox(photographerInfo?.medias, photographerInfo?.medias[index]);
                    }


                    // ON gere le clique sur les boutons de like

                    if(event.target?.className === "photographer-button-like"){

                        return handleLikes(event.target);

                    }

                }



              });



         }

         keyboardAccessibility();

          //A chaque clique sur un like, je veux augmenter le nombre en conséquence

          buttonLike.forEach((like)=>{

            //J'écoute l'évènement clique sur chaque like
 
            like.addEventListener("click", function(){

                handleLikes(this);
               
            });

          });

          function handleLikes(self){

              let isLiked = self.dataset.like;

              const totalLikes = document.querySelector(".photographer_statistics_likes_nbr");

              let actualTotalLikes = Number(totalLikes.textContent);

              //Je récupère l'élément précedent dans mon HTML, que je convertis en nombre
              const actualPictureLikesNumber = Number(self.previousElementSibling.textContent);

              //Si l'élément n'a encore jamais été cliqué, alors je peux ajouter un like
              if(isLiked === "No like"){

                self.previousElementSibling.textContent = actualPictureLikesNumber + 1; 

                totalLikes.textContent = Number(actualTotalLikes + 1);

                //je retourne l'information que l'élément a déjà été cliqué 
                return self.dataset.like = "liked";

              }

              self.previousElementSibling.textContent = actualPictureLikesNumber - 1; 

              totalLikes.textContent = Number(actualTotalLikes - 1);

              //je retourne l'information que l'élément n'a pas déjà été cliqué 
              return self.dataset.like = "No like";
  

          }

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

