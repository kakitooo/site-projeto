const form = document.querySelector(".form-login");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // LOGIN FICTÍCIO
    const emailCorreto = "pedrohenrique@gmail.com";
    const senhaCorreta = "123456";

    if(email === emailCorreto && senha === senhaCorreta) {

        

        // REDIRECIONA
        window.location.href = "perfil.html";

    } else {

        alert("E-mail ou senha incorretos.");

    }

});