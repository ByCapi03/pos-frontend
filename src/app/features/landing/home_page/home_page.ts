import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Navbar, RouterLink],
  templateUrl: './home_page.html',
  styleUrl: './home_page.css',
})
export class HomePage {
  protected readonly authService = inject(AuthService);
}

