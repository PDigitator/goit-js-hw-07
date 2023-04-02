// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// •	Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// •	Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector('#validation-input');

const textInputBlurHandler = event => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    if (textInput.classList.contains('invalid')) {
      textInput.classList.replace('invalid', 'valid');
    } else {
      textInput.classList.add('valid');
    }
  } else {
    if (textInput.classList.contains('valid')) {
      textInput.classList.replace('valid', 'invalid');
    } else {
      textInput.classList.add('invalid');
    }
  }
};
textInput.addEventListener('blur', textInputBlurHandler);

//! if (textInput.value.length === Number(textInput.dataset.length)) також працює
