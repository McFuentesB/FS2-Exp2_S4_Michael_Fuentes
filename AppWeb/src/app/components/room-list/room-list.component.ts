import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: any[] = [];

  ngOnInit(): void {
    // Recupera las habitaciones desde localStorage
    const storedRooms = localStorage.getItem('rooms');
    if (storedRooms) {
      this.rooms = JSON.parse(storedRooms);
    }
  }
}
