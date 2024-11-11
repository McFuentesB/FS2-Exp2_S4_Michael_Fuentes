import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-details',
  standalone: true,
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent {
  room: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí debes agregar la lógica para obtener la habitación por ID
    // Por ejemplo, si recibes el ID por ruta, puedes usar ActivatedRoute:
    // this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToBookingForm() {
    // Aquí se puede redirigir a la página de reserva de la habitación
    this.router.navigate(['/booking-form']);
  } 
}
