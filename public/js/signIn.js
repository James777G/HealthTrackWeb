const { response } = require("express");

function signInAction() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    axios
        .post('http://localhost:8083/login', {
            username : username,
            password : password
        })
        .then(response => {
            alert(response.data)
        })
        .catch(error => {
            alert(error);
        });
}