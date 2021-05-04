import getUser from './request/request.js';
import showError from './error/error.js';
import showUser from './ui/ui.js';

document.querySelector('form').addEventListener('submit', e => {
    //stopper le comportement par défaut
    e.preventDefault();
    // recupère ce qui est écrit dans l'input "username"
    const username = document.querySelector('input[name="username"]').value;

    getUser(username)
        .then(user => showUser(user))
        .catch(err => showError(new Error(err)));
});
