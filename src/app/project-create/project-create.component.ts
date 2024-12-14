import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ToastModule, DropdownModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css',
  providers: [MessageService], // Add MessageService here

})
export class ProjectCreateComponent {
  currentTab: string = 'details';
  isFinishTabEnabled: boolean = false;
  progress: number = 0;
  constructor(public dialogRef: MatDialogRef<ProjectCreateComponent>, private snackBar: MatSnackBar) { }
  formData = {
    projectName: '',
    description: '',
    standard: '',
    mapToProject: '',
    autoGenerate: '',
  };
  standardOptions = ['ISO/IEC 27001-2:2022', 'ISO/IEC 27001-2:2021']; // Example options
  projectOptions = ['Option 1', 'Option 2', 'Option 3']; // Example options
  autoGenerateOptions = ['Yes', 'No']; // Example options
  onClose(): void {
    this.dialogRef.close(); // Close the dialog
  }
  switchTab(tab: string) {
    if (tab === 'finish' && !this.isFinishTabEnabled) {
      return;
    }
    this.currentTab = tab;
  }

  updateProgressBar() {
    const fields = Object.values(this.formData);
    const filledFields = fields.filter(field => field.trim() !== '').length;
    this.progress = (filledFields / fields.length) * 100;
  }

  onNext() {
    if (this.progress === 100) {
      this.isFinishTabEnabled = true;
      this.switchTab('finish');
    } else {
      this.snackBar.open('Please fill out all required fields.', 'Close', {
        duration: 3000, // Duration in milliseconds
        panelClass: ['warn-snackbar'], // Custom class for styling
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }

  onFinish() {
    this.snackBar.open('Process completed successfully!', 'Close', {
      duration: 3000, // Duration in milliseconds
      panelClass: ['finish-snackbar'], // Custom class for styling
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    setTimeout(() => {
      this.dialogRef.close();
    }, 1000);
  }
}