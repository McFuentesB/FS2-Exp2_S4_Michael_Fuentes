import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  // Función para manejar el inicio de sesión
  onLogin(event: Event, usernameInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    event.preventDefault(); // Prevenir que el formulario recargue la página

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Recuperar el usuario almacenado en localStorage
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      const user = JSON.parse(storedUser);

      // Verificar si el usuario y la contraseña coinciden
      if (user.username === username && user.password === password) {
        // Si las credenciales son correctas, redirigir al perfil
        this.router.navigate(['/home']);
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('No hay usuarios registrados');
    }
  }
}
