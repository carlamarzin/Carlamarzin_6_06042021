"use strict";

/** 
   * Fonction qui affiche dans la console le contenu du formulaire entré par le user
 */ 


var prenomInput = document.getElementById('first');
var nomInput = document.getElementById('last');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
var form = document.querySelector('form');

document.querySelector('.btn-submit').addEventListener('click', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log('Prénom : ' + prenomInput.value); 
    console.log('Nom : ' + nomInput.value);
    console.log('Email : ' + emailInput.value);
    console.log('Message : ' + messageInput.value);   
});