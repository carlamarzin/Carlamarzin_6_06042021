"use strict";
 
/** 
  * Fonction qui permet valider les champs d'entrée saisis par le user
  * @param {array} data
  * @return {html}

*/ 

// form validation : création des variables
var form = document.getElementById("form");

var prenom = document.getElementById("first");
var nom = document.getElementById("last"); 
var email = document.getElementById("email");
var message = document.getElementById("message"); 

//validation du prénom 
function validationPrenom(){
    if (prenom.validity.valueMissing){
      document.getElementById("prenomInvalide").textContent = "Il vous faut renseigner votre prénom";
      prenom.className = 'text-control error';
      return false;
    }else if (prenom.value.length < 2){
      document.getElementById("prenomInvalide").textContent = "Il vous faut entrer au minimum 2 caractères";
      prenom.className = 'text-control error';
      return false; 
    }else{
      document.getElementById("prenomInvalide").textContent = "";
      prenom.className = "text-control";
      return true;
    }
  }
  
  //validation du nom
  function validationNom(){
    if (nom.validity.valueMissing){
      document.getElementById("nomInvalide").textContent = "Vous devez renseigner votre nom";
      nom.className = 'text-control error';
      return false;
    }else if (nom.value.length < 2){
      document.getElementById("nomInvalide").textContent = "Il vous faut entrer au minimum 2 caractères";
      nom.className = 'text-control error';
      return false; 
    }else{
      document.getElementById("nomInvalide").textContent = "";
      nom.className = 'text-control';
      return true;
    }
  }
  
  //validation de l'email
  function validationEmail(){
    if (email.validity.valueMissing){
      document.getElementById("emailInvalide").textContent = "Il vous faut renseigner votre adresse email";
      email.className = 'text-control error';
      return false;
    }else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,10}$/g.test(email.value)){
      document.getElementById("emailInvalide").textContent = "L'adresse email est invalide";
      email.className = 'text-control error';
      return false;
    }else{
      document.getElementById("emailInvalide").textContent = "";
      email.className = 'text-control';
      return true;
    }
  }

  //validation du message
  function validationMessage(){
    if (message.validity.valueMissing){
      document.getElementById("messageInvalide").textContent = "Il vous faut indiquez un message";
      message.className = 'text-control error';
      return false;
    }else{
      document.getElementById("messageInvalide").textContent = "";
      message.className = "text-control";
      return true;
    }
  }

  //vérification générale de tous les champs 
    function validationGenerale(e){
    e.preventDefault();
  
    //vérifier la validité de chaque champs
    let prenomValide = validationPrenom();
    let nomValide = validationNom(); 
    let emailValide = validationEmail();
    let messageValide = validationMessage();
  
    //vérifier que tous les champs sont valides, AINSI le formulaire sera valide
    let formulaireValide = prenomValide && nomValide && emailValide && messageValide;
    if (formulaireValide){
      e.preventDefault();
      //affichage du message de validation (remplacer le contenu de la modale, par un message de validation)
      let formulaire = document.getElementById("form");
      formulaire.style.display = "none";
      let modalSuccess = document.getElementById("content-success");
      modalSuccess.style.display = "flex";
      let modalBody = document.getElementsByClassName("modal-body");
      modalBody.className = "display-none";
      let buttonSubmit = document.getElementsByClassName("btn-submit");
      buttonSubmit.className = "display-none";
    }else{
      return false;
    }
  }
  
  //Ecouter l'évènement click sur le bouton submit, pour valider ou non le formulaire
  const validation = document.querySelector(".btn-submit");
  validation.addEventListener("click", validationGenerale);