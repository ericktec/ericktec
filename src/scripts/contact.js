const sendForm = () => {
  let form = document.getElementById("contact");
  form.addEventListener("submit", handleSubmit);

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      status.innerText = "✔ Message sent";
      status.classList.remove("form__status--fail")
      status.classList.add("form__status--success");
      status.style.visibility="visible";
      form.reset()
    }).catch(error => {
      status.innerText = "✘ Ohh something went wrong";
      status.classList.remove("form__status--success");
      status.classList.add("form__status--fail");
      status.style.visibility="visible";
      console.log(error);
    });
  }
}

export default sendForm;