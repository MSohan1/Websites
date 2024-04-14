  const scriptURL = 'https://script.google.com/macros/s/AKfycbxi8AZgSyvn5XIIEE8Uddtd0P3J3cpatuYTZ6OjbeteXehXtY03cPgxFfnnHmGJ0AJmoA/exec';
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
