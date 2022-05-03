const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email.length === 0 || password.length === 0) {
    alert('Все поля должны быть заполнены!!!');
  } else {
    const formData = { email, password };
    console.log(formData);
  }
  form.reset();
}
