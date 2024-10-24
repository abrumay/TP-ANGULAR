import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/users.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  onSubmit(): void {
    this.usuarioService.getUsuarios().pipe(
      tap((usuarios: Usuario[]) => {
        const user = usuarios.find(u => u.username === this.username && u.password === this.password);
        
        if (user) {
          if (user.role === 'admin') {
            this.router.navigate(['/admin-dashboard']);
          } else if (user.role === 'basic') {
            this.router.navigate(['/basic-client']);
          } else if (user.role === 'premium') {
            this.router.navigate(['/premium-client']);
          }
        } else {
          this.errorMessage = 'Credenciales incorrectas';
        }
      })
    ).subscribe();
  }
}