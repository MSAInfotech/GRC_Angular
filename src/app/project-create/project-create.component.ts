import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css'
})
export class ProjectCreateComponent {
  currentTab: string = 'details';
  isFinishTabEnabled: boolean = false;
  progress: number = 0;

  formData = {
    projectName: '',
    description: '',
    standard: '',
    mapToProject: '',
    autoGenerate: '',
  };

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
      alert('Please fill out all required fields.');
    }
  }

  onFinish() {
    alert('Project Finished!');
  }
}