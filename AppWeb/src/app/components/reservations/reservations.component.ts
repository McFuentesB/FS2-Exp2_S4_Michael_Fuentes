import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  standalone: true, // Hacer el componente independiente
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = [];

  ngOnInit(): void {
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    }
  }
}
