import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecoverComponent } from './components/recover/recover.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'recover', component: RecoverComponent },
    {path: 'rooms', component: RoomListComponent},
    { path: 'room-details/:id', component: RoomDetailsComponent },
    {path:'reservations', component: ReservationsComponent},
    { path: 'booking-form', component: BookingFormComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Ruta por defecto
    
];