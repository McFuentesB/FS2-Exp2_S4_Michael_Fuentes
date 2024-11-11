import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Asegúrate de que RouterModule esté importado
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  // No es necesario importar RoomListComponent directamente aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  onLogout() {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}
