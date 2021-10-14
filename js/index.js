   "use strict";
  

  //DISPLAY THE JSON DATA 
  //Fill the JSON data into the div id photographers dynamically 
  //Loop through every object in our JSON object


  fetchData("../photographers.json").then((data)=>{

       //récupérer la div, intégrer le html
      //  document.querySelector("#photographers").innerHTML = createPhotographers(data);
  });

  