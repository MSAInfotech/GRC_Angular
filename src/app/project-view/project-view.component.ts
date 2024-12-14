import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProjectCreateComponent } from '../project-create/project-create.component';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent {
  constructor(private router: Router,private dialog: MatDialog) {}

  openComplianceDialog() {
    const dialogRef = this.dialog.open(ProjectCreateComponent, {
      width: '75vw', // Full viewport width
      height: '75vh', // Full viewport height
      maxWidth: '75vw', // Ensure it doesn't shrink
      maxHeight: '75vh', // Ensure it doesn't shrink
      panelClass: 'full-screen-dialog', // Custom class for styling
      data: {
        // Optional data to pass to the dialog
      },
    });

    // Handle the dialog close event if needed
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    });
  }
  navigateToProjectCreate(): void {
    this.router.navigate(['/project-details']);
}
}
