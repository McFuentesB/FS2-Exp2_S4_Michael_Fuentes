import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  onRegister(event: Event, usernameInput: HTMLInputElement, emailInput: HTMLInputElement, passwordInput: HTMLInputElement, confirmPasswordInput: HTMLInputElement): void {
    event.preventDefault(); // Previene la acción predeterminada del formulario

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validación básica
    if (!username || !password || !confirmPassword || !email) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Guardar los datos en localStorage
    const user = { username, password, email };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registro exitoso');
    // Redirigir al login o home
    window.location.href = '/login'; // O usa el router de Angular
  }
}
