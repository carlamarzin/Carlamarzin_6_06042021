"use strict";


      let urlParams = new URLSearchParams(document.location.search.substring(1));
      let paramId = urlParams.get("id");
     
      fetchData("../json/fishEyeData.json").then((data)=>{

          if(data === "Impossible de recupérer les données"){
    
                return alert(data);
    
          }

          const photographerInfo = getPhotographerInfo(paramId, data);

          console.log(photographerInfo);

      });
      