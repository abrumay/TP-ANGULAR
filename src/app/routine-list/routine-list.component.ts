import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-routine-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routine-list.component.html',
  styleUrl: './routine-list.component.css'
})
export class RoutineListComponent {
  routines = [
    { title: 'Rutina Full Body', description: 'Entrenamiento completo para todo el cuerpo.' },
    { title: 'Cardio HIIT', description: 'Alta intensidad para quemar grasa rápidamente.' },
    { title: 'Entrenamiento de Fuerza', description: 'Mejora tu fuerza y resistencia muscular.' },
    { title: 'Yoga para Principiantes', description: 'Flexibilidad y relajación a través del yoga.' },
    { title: 'Entrenamiento de Core', description: 'Fortalece el abdomen y la zona media.' },
    { title: 'Entrenamiento de Circuito', description: 'Ejercicios variados en un circuito para mayor resistencia.' },
  ];

}
