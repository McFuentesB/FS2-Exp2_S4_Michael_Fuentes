import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    // Recuperar los datos del usuario desde localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      // Si no hay datos de usuario, redirige al login
      window.location.href = '/login';
    }
  }

  onUpdateProfile(event: Event): void {
    event.preventDefault();

    // Capturar los valores ingresados en los campos de entrada
    const usernameInput = (document.getElementById('username') as HTMLInputElement).value;
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;

    // Actualizar los datos del usuario
    this.user.usuario = usernameInput;
    this.user.email = emailInput;

    // Guardar los datos actualizados en localStorage
    localStorage.setItem('user', JSON.stringify(this.user));

    alert('Perfil actualizado con éxito.');
  }

  onLogout(): void {
    // Limpiar localStorage y redirigir al login
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}
