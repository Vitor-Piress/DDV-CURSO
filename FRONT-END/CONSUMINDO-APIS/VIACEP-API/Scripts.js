const CEPInput = document.getElementById("cep-input");
const SubmitButton = document.getElementById("submit-button");
const Form = document.querySelector("form");

const RuaInput = document.getElementById("rua-input");
const BairroInput = document.getElementById("bairro-input");
const ComplementoInput = document.getElementById("complemento-input");
const CidadeInput = document.getElementById("cidade-input");
const EstadoInput = document.getElementById("estado-input");

async function loadCEP(CEP) {
  const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);

  const data = await response.json();

  return data;
}

CEPInput.addEventListener("input", async (e) => {
  let CEPDigitado = e.target.value;
  CEPDigitado = CEPDigitado.replace(/\D/g, "");
  console.log(CEPDigitado);

  if (CEPDigitado.length === 8) {
    const data = await loadCEP(CEPDigitado);

    if (data.erro) {
      console.log("Errro no CEP");
      return;
    }
    RuaInput.value = data.logradouro;
    RuaInput.setAttribute("disabled", "");
    BairroInput.value = data.bairro;
    BairroInput.setAttribute("disabled", "");
    ComplementoInput.value = data.complemento;
    CidadeInput.value = data.localidade;
    CidadeInput.setAttribute("disabled", "");
    EstadoInput.value = data.estado;
    EstadoInput.setAttribute("disabled", "");
  } else {
    RuaInput.value = "";
    RuaInput.removeAttribute("disabled");
    BairroInput.value = "";
    BairroInput.removeAttribute("disabled");
    ComplementoInput.value = "";
    ComplementoInput.removeAttribute("disabled");
    CidadeInput.value = "";
    CidadeInput.removeAttribute("disabled");
    EstadoInput.value = "";
    EstadoInput.removeAttribute("disabled");
  }
});

Form.addEventListener("submit", (e) => {
  e.preventDefault();
});
