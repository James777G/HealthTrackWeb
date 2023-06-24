const { response } = require("express");

function signInAction() {

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    axios
        .post('/signin', { username, password })
        .then(response => {
            alert(response.data)
        })
        .catch(error => {
            alert(error);
        });
}