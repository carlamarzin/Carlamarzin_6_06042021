"use strict";

 /** 
   * Fonction qui filtre les medias des photographes par popularité/date/titre
   * @param {array} mediaArr /mediaArr
   * @param {string} filtre /filtre
   * @return {html}
 */  

 function filterByPopularité(mediaArr, filtre){
     // je crée une fonction à deux paramètres : l'array des like/date/titre de média, et le filtre selectionné par le user 
     // je commence avec le nombre de likes

      const result = mediaArr.filter((media)=>{

           //photograph?.tags est le tableau qui contient les differents tags d'un photographe
           // si celui-ci contient le tag selectionné, alors je retourne le photographe
           //ce résultat est storé dans la constante result

           if(media?.likes.includes(filtre) === true){

                return media;

           }

      });

      //cette fonction renvoie la const result (html des photogarphes)
      return result;


 }

 /*
      "date": "2011-12-08"

      Je pars de mediaArr

      sortedMediaArr = mediaArr.sort(function(a,b){
           return a>b ? -1 : a<b ? 1 : 0;
      })


      POUR TRIER PAR NOMBRE :  
      const mediaArr = xxx ; 
      mediaArr.sort();
      console.log(mediaArr);

      POUR TRIER PAR ORDRE ALPHABETIQUE : 
      const mediaArr = xxx ; 
      meadiaArr.sort();

      
 */