const $contactPage = document.querySelector(".contact-principal");
const $contactForm = document.querySelector("#contact-form");
const $formName = document.querySelector("#form-name");
const $formEmail = document.querySelector("#form-email");
const $formMessage = document.querySelector("#form-message");

// method = "POST";

const initialForm = {
  name: "",
  email: "",
  message: "",
};
let form = initialForm;

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.message.trim()) {
    errors.message = "El campo 'Comentarios' es requerido";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

$contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = validationsForm(form);
  if (Object.keys(errors).length === 0) {
    const sendForm = async () => {
      const $infoMessage = document.createElement("DIV");
      try {
        const url = "https://formsubmit.co/ajax/fabriziocastillox@gmail.com";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: `${form.name}`,
            email: `${form.email}`,
            message: `${form.message}`,
          }),
        };

        const res = await fetch(url, options);

        if (!res.ok) {
          let errors = {
            status: res.status || "000",
            statusText: res.statusText || "Error desconocido",
          };
          throw errors;
        }

        $infoMessage.classList.add("msg-succes");
        $infoMessage.innerHTML =
          "El mensaje se envio con exito <br /> ¡Me pondre en contacto contigo lo mas antes posible!";
      } catch (error) {
        $infoMessage.classList.add("msg-error");
        $infoMessage.innerText = `Error ${error.status} : ${error.statusText}`;
      } finally {
        $infoMessage.style.animation = "getIn 2s forwards";
        $contactPage.appendChild($infoMessage);
        setTimeout(() => {
          $infoMessage.style.animation = "getOut 2s forwards";
          setTimeout(() => {
            $infoMessage.remove();
          }, 2500);
        }, 6000);
      }
    };
    sendForm();
  } else {
    alert("¡Completa todos los campos!");
  }
});

$formName.addEventListener("change", (e) => (form.name = e.target.value));

$formEmail.addEventListener("change", (e) => (form.email = e.target.value));

$formMessage.addEventListener("change", (e) => (form.message = e.target.value));
