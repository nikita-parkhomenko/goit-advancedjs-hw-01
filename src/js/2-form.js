const formData = { email: '', message: '' };
const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const initialState = localStorage.getItem(storageKey);
const parsedState = JSON.parse(initialState);
if (parsedState) {
  Object.assign(formData, parsedState);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (!(name in formData)) {
    return;
  }

  formData[name] = value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});
