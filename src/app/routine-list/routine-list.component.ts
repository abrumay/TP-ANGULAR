import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../services/rutine.service'; // Corregido: 'rutine' a 'routine'
import { Rutina } from '../interfaces/routine.interface'; // Asegúrate de tener esta interfaz

@Component({
  selector: 'app-routine-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.css'] // Corregido: 'styleUrl' a 'styleUrls'
})
export class RoutineListComponent implements OnInit {
  routines: Rutina[] = []; // Define el tipo correcto si tienes la interfaz Rutina

  constructor(private routineService: RoutineService) {} // Corregido: 'rutineService' a 'routineService'

  ngOnInit(): void {
    this.getRutinas();
  }

  // Método corregido
  getRutinas(): void {
    // Suscríbete al Observable que devuelve el servicio
    this.routineService.getRutinas().subscribe((data: Rutina[]) => {
      this.routines = data; // Asigna los datos a 'routines'
    });
  }
}
  


