import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent {
  constructor(private router: Router) {}

  
  navigateToProjectCreate(): void {
    this.router.navigate(['/project-details']);
}
}
