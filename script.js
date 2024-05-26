function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('p_red');

    var emailPattern = /@company\.com$/;

    if (emailPattern.test(emailInput.value)) {
      emailInput.classList.remove('error-border'); 
      emailInput.classList.add('valid-border'); 
      errorMessage.style.display = 'none'; 
    } else {
      emailInput.classList.remove('valid-border'); 
      emailInput.classList.add('error-border'); 
      errorMessage.style.display = 'block'; 
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
      
      window.location.href = './confirmação.html';
      
      localStorage.setItem('userEmail', emailInput.value);
      return false; 
    } else {
      emailInput.classList.remove('valid-border'); 
      emailInput.classList.add('error-border'); 
      errorMessage.style.display = 'block'; 
      return false; 
    }
  }
  
  function redirectPage() {
    
    window.location.href = './confirmação.html';
  }

