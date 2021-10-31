"use strict";

 /** 
   * Fonction qui filtre les photographes par tag
   * @param {array} photographerArr
   * @param {string} tag
   * @return {html}

 */  

 function filterByTag(photographerArr, tag){
     // je crée une fonction à deux paramètres : l'array des tags de photographes, et le tag selectionné par le user 

      const result = photographerArr.filter((photograph)=>{

           //photograph?.tags est le tableau qui contient les differents tags d'un photographe
           // si celui-ci contient le tag selectionné, alors je retourne le photographe
           //ce résultat est storé dans la constante result

           if(photograph?.tags.includes(tag) === true){

                return photograph;

           }

      });

      //cette fonction renvoie la const result (html des photogarphes)
      return result;


 }

