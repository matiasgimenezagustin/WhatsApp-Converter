const form = document.getElementById("formulario");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const label = document.getElementById("label");

const generarLink = (e) =>{

    e.preventDefault();

    let formulario = e.target;

    numero = formulario.children[1].value;

    form.remove();

    input.remove();

    submit.remove();

    label.remove()

    let link = document.createElement("a");


    document.body.append(link);

    link.setAttribute("id", "wspLink");

    link.setAttribute("text-aling", "center")

    const wspLink = document.getElementById("wspLink");

    wspLink.innerText = "Link a tu propio chat en wsp";

    wspLink.href = "https://api.whatsapp.com/send?phone=" + numero + "&text=gracias%20por%20regalarme%20tus%20datos%20:)";

    console.log(numero);
}


formulario.addEventListener("submit", generarLink);