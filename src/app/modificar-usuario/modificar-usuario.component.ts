import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css'] // Asegúrate de usar styleUrls
})
export class ModificarUsuarioComponent {
  usuario = {
    nombre: '',
    email: '',
    peso: null,
    altura: '',
    proceso: {
      volumen: false,
      perdida: false,
      mantenimiento: false,
  },
  nutricion: 'alta-proteina'
};

  onSubmit() {
    console.log(this.usuario);
  }
}

