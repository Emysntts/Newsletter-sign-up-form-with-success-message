function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('p_red');

    // Expressão regular para verificar se o email termina com "@company.com"
    var emailPattern = /@company\.com$/;

    // Verificar se o email termina com "@company.com"
    if (emailPattern.test(emailInput.value)) {
      emailInput.classList.remove('error-border'); // Remover a classe de borda de erro
      emailInput.classList.add('valid-border'); // Adicionar a classe de borda de validação
      errorMessage.style.display = 'none'; // Ocultar a mensagem de erro
    } else {
      emailInput.classList.remove('valid-border'); // Remover a classe de borda de validação
      emailInput.classList.add('error-border'); // Adicionar a classe de borda de erro
      errorMessage.style.display = 'block'; // Exibir a mensagem de erro
    }
  }

  function validateForm() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('p_red');

    var emailPattern = /@company\.com$/;

    if (emailPattern.test(emailInput.value)) {
      emailInput.classList.remove('error-border'); 
      emailInput.classList.add('valid-border'); 
      errorMessage.style.display = 'none'; 
      // Redirecionar para outra página
      window.location.href = './confirmação.html';
      //Armazenar o email
      localStorage.setItem('userEmail', emailInput.value);
      return false; // Impedir o envio do formulário
    } else {
      emailInput.classList.remove('valid-border'); 
      emailInput.classList.add('error-border'); 
      errorMessage.style.display = 'block'; 
      return false; 
    }
  }
  
  function redirectPage() {
    // Redirecionar para outra página
    window.location.href = './confirmação.html';
  }

