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


          // J'apelle la fonction pour ouvrir le formulaire de contact 
          formContact();

          // J'apelle la fonction pour ouvrir la lightbox
          lightboxOpen();

          // J'apelle la fonction pour modifier le nombre total de like
          //likeTotalNumber();

          //J'apelle la fonction pour augmenter le nombre de like, en fonction du nombre de cliques
          addOneLike();






          // PRICE
          // PRICE
          // PRICE

          //J'apelle la fonction pour afficher le tarif de chaque photographe 
          //photographerPrice();

          //Je récupère l'info du prix du photographe, et je l'intègre en HTML
          let photographerPrice = photographerInfo?.infos.map(info => info.price);
          console.log(photographerPrice);
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


          //J'apelle la fonction pour la lightbox, et lui passe deux paramètres > le premier est le array des médias
          //Pour le second paramètre : je récupère l'élément sur lequel le user a cliqué

          //J'écoute le click sur la photo > je déclenche l'ouverture de la lightbox, et la fonction correspondante 

          document.querySelector('.photographer__content__article_media').innerHTML = addEventListener('click', function(){
            lightboxOpen();
            lightbox(photographerInfo.medias, (media => media));
          });


      });
      