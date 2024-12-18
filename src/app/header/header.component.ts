import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @HostListener('document:click', ['$event'])
  isDropdownOpen: string = '';

  toggleDropdown(dropdown: string) {
    this.isDropdownOpen = this.isDropdownOpen === dropdown ? '' : dropdown;
  }
  
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item')) {
      this.isDropdownOpen = '';
    }
  }
}

