  "use strict";

// La méthode then renvoie un objet promise, elle prend un argument callback à utiliser en cas d'échec de la promise

  fetchData("../json/fishEyeData.json").then((data)=>{

      if(data === "Impossible de recupérer les données"){

             return alert(data);

      }

      // je récupère l'endroit dans le DOM, où intégrer les photographes 
      // je lui applique la fonction createPhotographers, pour lui intégrer le contenu, à partir des data 

      document.querySelector("#photographers").innerHTML = createPhotographers(data?.photographers);

      const tags = document.querySelectorAll('.buttonTag');
      // je récupère dans le DOM, l'emplacement des tags à selectionner

      const j = tags.length;

      for(let i=0; i<j; i++){
        // je loop au travers chaque tags 

           tags[i].addEventListener("click", function(){
                // J'écoute l'évènement click sur chaque tag
                // On recupere la valeur textuelle du tag
                // https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/data-*

                const actualTag = this.dataset?.tag;
                // Je récupère dans le DOM le tag selectionné , et récupère son nom exact, grace au data-tag

                const filterPhotographers = filterByTag(data?.photographers, actualTag);
                // J'applique ensuite la fonction pour filtrer les photographes selon leurs tags

                document.querySelector("#photographers").innerHTML = createPhotographers(filterPhotographers);
                // J'ajoute le HTML des photographes correspondants au tag


           });

      }
    
  });

  