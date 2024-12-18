import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { Toast } from 'primeng/toast';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SelectModule, ToggleButton, Toast],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.css',
  providers: [MessageService]
})
export class ProjectCreateComponent {
  currentTab: string = 'details';
  isFinishTabEnabled: boolean = false;
  progress: number = 0;


  constructor(private messageService: MessageService) {

  }
  formData = {
    projectName: '',
    description: '',
    standard: '',
    mapToProject: '',
    autoGenerate: '',
  };

  standardOptions = [
    { label: 'Choose standard options', value: '' }, // Placeholder
    { label: 'ISO/IEC 27001-2:2022', value: 'ISO/IEC 27001-2:2022' }
  ];

  mapToProjectOptions = [
    { label: 'Choose existing project', value: '' }, // Placeholder
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
  ];

  switchTab(tab: string) {
    if (tab === 'finish' && !this.isFinishTabEnabled) {
      return;
    }
    this.currentTab = tab;
  }

  updateProgressBar() {
    const fields = Object.values(this.formData);
    const filledFields = fields.filter(field =>
      (typeof field === 'string' && field.trim()) ||
      (typeof field === 'boolean' && field)
    ).length;
    this.progress = (filledFields / fields.length) * 100;
  }

  onNext() {
    if (this.progress === 100) {
      this.isFinishTabEnabled = true;
      this.switchTab('finish');
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Please fill out all required fields.' });
    }
  }

  onFinish() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Project Finished!' });
  }
}