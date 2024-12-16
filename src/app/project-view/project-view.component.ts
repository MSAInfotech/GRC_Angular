import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectCreateComponent } from '../project-create/project-create.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [RouterModule, ProjectCreateComponent, FormsModule, CommonModule, Dialog ],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent {

  display: boolean = false;
  constructor(private router: Router) { }


  navigateToProjectCreate(): void {
    this.router.navigate(['/project-details']);
  }

  // Show the dialog
  showDialog() {
    this.display = true;
  }
}
