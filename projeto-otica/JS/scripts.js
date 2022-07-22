/* Apresentação do Modal */

setTimeout(ApresentaModal, 5000);

function ApresentaModal() {

    var modal = document.querySelector(".modal");

    if (modal != null) {

        document.querySelector(".modal").style.display = "block";

        document.querySelector(".modal a").addEventListener("click", function () {
            document.querySelector(".modal").style.display = "none";
        });

    }
}

/* Validação Modal (Página Inicial) */

if (document.forms["modal-form"] != undefined) {

    var form = document.forms["modal-form"];

    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keypress", function () {
        form.email.className = "";
        document.querySelector("span.nao-valido").style.display = "none";
    })
}

function validarFormModal(evt) {
    var form = document.forms["modal-form"];

    var inputEmail = form.email;
    var valorEmail = form.email.value;

    var posicaoArroba = valorEmail.indexOf("@");

    if (!ValidarEmail(valorEmail)) {

        inputEmail.className = "nao-valido";
        document.querySelector("span.nao-valido").style.display = "block";
        evt.preventDefault();
    }
}

/* Validação Fale Conosco */

if (document.forms["form-contato"] != undefined) {
    var form = document.forms["form-contato"];

    form.addEventListener("submit", function (evt) {

        var formValido = true;

        if (!NaoVazio(form.nome_completo.value)) {
            form.nome_completo.className = "nao-valido";
            formValido = false;
        }

        if (!NaoVazio(form.Telefone.value)) {
            form.Telefone.className = "nao-valido";
            formValido = false;
        }

        if (!NaoVazio(form.Mensagem.value)) {
            form.Mensagem.className = "nao-valido";
            formValido = false;
        }

        if (!ValidarEmail(form.Email.value)) {
            form.Email.className = "nao-valido";
            formValido = false;
        }

        if (!formValido) {
            evt.preventDefault();
        }
    });

    /* Remover a linha vermelha ao começar a digitar */

    var inputs = document.querySelectorAll("form[name=form-contato] input[type=text");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keypress", function () {
            this.className = "";
        });
    }

    var textarea = document.querySelector("form[name=form-contato] textarea");

    textarea.addEventListener("keyup", function () {
        this.className = "";
        document.querySelector(".texto").innerHTML = "Caractere(s) " + this.value.length;
    })

}

/* Funções */

function ValidarEmail(valorEmail) {
    if (valorEmail != "" && valorEmail.indexOf("@") > 3 && valorEmail.lastIndexOf(".") > posicaoArroba) {
        return true;
    } else {
        return false
    }
}

function NaoVazio(texto) {
    if (texto.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}
