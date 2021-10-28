  "use strict";

  fetchData("../json/fishEyeData.json").then((data)=>{

      if(data === "Impossible de recupérer les données"){

             return alert(data);

      }

      document.querySelector("#photographers").innerHTML = createPhotographers(data?.photographers);

      const tags = document.querySelectorAll('.buttonTag');

      console.log(tags);

      filterByTag();
    
  });

  