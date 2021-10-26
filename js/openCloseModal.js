"use strict";
 
 /** 
   * Fonctions qui permet d'ouvrir et de fermer la form-modale
 */ 


//FORM-MODAL
//FORM-MODAL
//FORM-MODAL

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal event 
const closeButton = document.querySelector(".close"); 

closeButton.addEventListener('click', closeModal);

// close modal form 
function closeModal() {                     
  modalbg.style.display = 'none';
}


//LIGHT-BOX MODAL
//LIGHT-BOX MODAL
//LIGHT-BOX MODAL

// DOM Elements
const modalbgLB = document.querySelector(".lb-bground");
const modalBtnLB = document.querySelectorAll(".lb-modal-btn");

// launch modal event
modalBtnLB.forEach((btn) => btn.addEventListener("click", launchLBModal));

// launch modal form
function launchLBModal() {
  modalbgLB.style.display = 'block';
}

// close modal event 
const closeButtonLB = document.querySelector(".lb-close"); 

closeButtonLB.addEventListener('click', closeLBModal);

// close modal form 
function closeLBModal() {                     
  modalbgLB.style.display = 'none';
}