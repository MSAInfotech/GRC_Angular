import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDropdownOpen: string = '';

  toggleDropdown(dropdown: string) {
    this.isDropdownOpen = this.isDropdownOpen === dropdown ? '' : dropdown;
  }
}
