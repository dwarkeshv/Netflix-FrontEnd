import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  // Variable to store the selected option
  selectedOption: any = '';


  onSelect() {
    // this.selectedOption = option;
  }
}
