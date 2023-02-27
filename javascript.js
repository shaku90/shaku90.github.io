const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_jmf3ilr';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar email';
        alert('Enviado!');
        form.reset();
      }, (err) => {
        btn.value = 'Enviar email';
        alert(JSON.stringify(err));
      });
  });

