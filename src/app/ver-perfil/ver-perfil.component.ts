import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-perfil',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent {
  usuario = {
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    peso: 75,
    altura: 180,
    proceso: {
      volumen: true,
      perdida: false,
      mantenimiento: false
    },
    nutricion: 'Alta en Proteína'
  };

  constructor(private router: Router) {}

  editarPerfil() {
    this.router.navigate(['/modificar-usuario']);
  }
}
