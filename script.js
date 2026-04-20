'use strict';

const listaMailRandom = document.querySelector('#lista-mail');


    function listaMail(mails) {
    let mailGenerata = '';

    //ciclo for of per iterazione (in base agli oggetti nell'API)
    for (let i = 0; i < 10; i++) {
        mailGenerata += `
        <li class="list-item"> 
            <p class="list-item-text"> ${mails.response} </p>
        </li>
        `
    }
    if(listaMailRandom !== null){
        listaMailRandom.innerHTML = mailGenerata;
    }
};

const API_URL_RANDOM_MAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';

fetch(API_URL_RANDOM_MAIL)
    .then(response => {
        return response.json();
    })
    .then(json => {
        listaMail(json);
    })
    .catch(error => {
        console.error(error);
    })
    
