import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

  constructor(private router: Router) {

  }

  goToProjectControlsView() {
     this.router.navigate(['/project-controls-view']);
  }
}
