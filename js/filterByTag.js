"use strict";

 /** 
   * Fonction qui filtre les photographes par tag
   * @param {array} photographerArr
   * @param {string} tag
   * @return {html}

 */  

 function filterByTag(photographerArr, tag){

      const result = photographerArr.filter((photograph)=>{

           //photograph?.tags est le tableau qui contient les differents tags d'un photographe

           if(photograph?.tags.includes(tag) === true){

                return photograph;

           }

      });

      return result;


 }

