import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

    navigateToLogin() {
    this.router.navigate(['/login']);
    }
    navigateToRoutines()
    {
    this.router.navigate(['/rutinas']);
    }
    navigateToHome()
    {
      this.router.navigate(['/home']);
    }
    navigateToRegister()
    {
      this.router.navigate(['/register']);
    }



  }
