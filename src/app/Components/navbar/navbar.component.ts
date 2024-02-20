import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageComponent } from '../../Pages/login-page/login-page.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,LoginPageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  
  sendTForm :any;
  // Variable to store the selected option
  selectedOption: any = '';


  onSelect() {
    // this.selectedOption = option;
  }
  constructor(private router: Router) {}

  goToPage()
  {
    this.router.navigate(['/LoginPage']);
  }
}
