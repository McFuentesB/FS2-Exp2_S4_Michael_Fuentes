import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  onSubmit(event: Event): void {
    event.preventDefault();
    
    // Obtener los datos del formulario
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const checkin = (document.getElementById('checkin') as HTMLInputElement).value;
    const checkout = (document.getElementById('checkout') as HTMLInputElement).value;

    // Crear el objeto de reserva
    const newReservation = {
      name,
      email,
      checkin,
      checkout
    };

    // Obtener las reservas anteriores del localStorage o crear un arreglo vacío
    const storedReservations = JSON.parse(localStorage.getItem('reservations') || '[]');

    // Agregar la nueva reserva al arreglo
    storedReservations.push(newReservation);

    // Guardar las reservas actualizadas en el localStorage
    localStorage.setItem('reservations', JSON.stringify(storedReservations));

    alert('Reserva realizada con éxito!');
  }
}
