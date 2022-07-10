function validation() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    // Validacao de usuario
    if (user == "") {
        document.getElementById("username").innerHTML = "Por favor, preencha o campo de nome de usuário";
        return false;
    }

    if (user.length <= 3 || user.length > 20) {
        document.getElementById("username").innerHTML = "O nome de usuário deve conter entre 03 e 20 caracteres";
        return false;
    }

    // if (!isNaN(user)) {
    //     document.getElementById("username").innerHTML = "OPS! Somente caracteres são permitidos";
    //     return false;
    // }

    // Validacao da senha de usuario
    if (pass == "") {
        document.getElementById("passwords").innerHTML = "Por favor, preencha o campo de senha do usuário";
        return false;
    }

    if (pass.length <= 5 || pass.length > 20) {
        document.getElementById("passwords").innerHTML = "A senha de usuário deve conter entre 05 e 20 caracteres";
        return false;
    }

    if (pass != confirmpass) {
        document.getElementById("confrmpass").innerHTML = "OPS! A senha não corresponde com à senha de confirmação";
        return false;
    }

}