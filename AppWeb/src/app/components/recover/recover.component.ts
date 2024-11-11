import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent {
  showMessage: boolean = false;
  message: string = '';

  constructor(private router: Router) {}

  onRecover(event: Event): void {
    event.preventDefault();
    const recoverValue = (document.getElementById('recoverInput') as HTMLInputElement).value;

    const users: any[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const foundUser = users.find((u: any) => u.usuario === recoverValue || u.email === recoverValue);

    if (foundUser) {
      this.message = "Usuario encontrado. Por favor, establece una nueva contraseña.";
      this.showMessage = true;
      // Lógica para redirigir o permitir al usuario cambiar la contraseña
    } else {
      this.message = "Usuario o correo no encontrado.";
      this.showMessage = true;
    }
  }
}
