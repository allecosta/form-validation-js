function validation() {
    let name = document.getElementById("name").value;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let confirmpass = document.getElementById("conpass").value;
    let emails = document.getElementById("emails").value;

    // Validacao do nome de usuario
    if (name == "") {
        document.getElementById("name").innerHTML = "Por favor, preencha o campo nome";
        return false;
    }

    if (user == "") {
        document.getElementById("username").innerHTML = "Por favor, preencha o nome de usuário";
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

    // Validacao do email do usuario
    if (emails == "") {
        document.getElementById("emailids").innerHTML = "Por favor, preencha o campo de identificação do email";
        return false;
    }

    if (emails.indexOf("@") <= 0) {
        document.getElementById("emailids").innerHTML = "OPS! Email inválido";
        return false;
    }

    if (emails.charAt(emails.length - 4) != "." && emails.charAt(emails.length - 3) != ".") {
        document.getElementById("emailids").innerHTML = "OPS! Email inválido";
        return false;
    }

    //Validacao da senha do usuario
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