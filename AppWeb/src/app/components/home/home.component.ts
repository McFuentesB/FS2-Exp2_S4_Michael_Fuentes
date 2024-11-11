import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router
import { ReservationsComponent } from '../reservations/reservations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ReservationsComponent]  // Incluye el componente de reservas aquí
})
export class HomeComponent implements OnInit {
  user: any;
  reservations: any[] = [];  // Aquí almacenamos las reservas

  constructor(private router: Router) {}  // Inyecta el servicio Router

  ngOnInit(): void {
    // Recuperar los datos del usuario desde localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      // Si no hay datos de usuario, redirige al login
      window.location.href = '/login';
    }

    // Recuperar las reservas desde localStorage
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    }
  }

  onLogout(): void {
    // Limpiar localStorage y redirigir al login
    localStorage.removeItem('user');
    localStorage.removeItem('reservations'); // Opcional: borrar reservas al hacer logout
    window.location.href = '/login';
  }

  showReservations(): void {
    // Redirige a la ruta de reservas
    this.router.navigate(['/reservations']);
  }
}
 