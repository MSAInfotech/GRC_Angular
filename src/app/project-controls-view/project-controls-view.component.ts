import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ProjectControl } from './ProjectControl';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { Card, CardModule } from 'primeng/card';
import { DatePicker } from 'primeng/datepicker';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-controls-view',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, DropdownModule, PaginatorModule,
    InputTextModule, TagModule, IconFieldModule, InputIconModule, MultiSelectModule, SelectModule, CheckboxModule,
    ButtonModule, CardModule, CalendarModule, DatePicker, RouterModule],
  templateUrl: './project-controls-view.component.html',
  styleUrl: './project-controls-view.component.css'
})
export class ProjectControlsViewComponent {
  public projectControlInfo: ProjectControl[] = [];
  totalItems = 0;
  pageSize = 10;
  first = 0;

  constructor() {

  }
  frequencyOptions = [
    { label: 'New', value: 'New' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Yearly', value: 'Yearly' },
  ];
  projectControl: ProjectControl[] = [
    {
      "applicable": true,
      "controlId": "4.1",
      "name": "jay patel",
      "description": "The Organization needs to Provide the data.",
      "status": "completed",
      "automation": "Implemented",
      "responsible": "jay patel",
      "approver": "jay patel",
      "deadline": new Date(),
      "frequency": "Daily",
      "linkedRisk": "none",
    },
    {
      "applicable": true,
      "controlId": "4.2",
      "name": "Hitest patel",
      "description": "The Organization needs to Provide the data.",
      "status": "Pending",
      "automation": "completed",
      "responsible": "Hitest patel",
      "approver": "Hitest patel",
      "deadline": new Date(),
      "frequency": "Annually",
      "linkedRisk": "none",
    },
    {
      "applicable": true,
      "controlId": "4.2",
      "name": "Test patel",
      "description": "The Organization needs to Provide the data.",
      "status": "Pending",
      "automation": "completed",
      "responsible": "Test patel",
      "approver": "Test patel",
      "deadline": new Date(),
      "frequency": "Monthly",
      "linkedRisk": "none",
    },
    {
      "applicable": true,
      "controlId": "4.2",
      "name": "Test patel",
      "description": "The Organization needs to Provide the data.",
      "status": "Implemented",
      "automation": "completed",
      "responsible": "Test patel",
      "approver": "",
      "deadline": new Date(),
      "frequency": "Weekly",
      "linkedRisk": "none",
    }
  ];
  approverOptions = [
    { label: 'Jay Patel', value: 'jay patel' },
    { label: 'Hitesh Patel', value: 'Hitest patel' },
    { label: 'Test Patel', value: 'Test patel' }
  ];
  responsible = [
    { label: 'Jay Patel', value: 'jay patel' },
    { label: 'Hitesh Patel', value: 'Hitest patel' },
    { label: 'Test Patel', value: 'Test patel' }
  ];
  frequency = [
    { label: 'Daily', value: 'Daily' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Annually ', value: 'Annually' }
  ];

  ngOnInit() {
    this.projectControlInfo = this.projectControl;
    this.totalItems = this.projectControlInfo.length;

  }
  pageChange(event: any) {
    this.first = event.first;
    this.pageSize = event.rows;
  }
  getStatusClass(status: string): string {
    switch (status) {
      case 'Implemented':
        return 'badge badge-success';
      case 'Pending':
        return 'badge badge-warning';
      default:
        return 'badge badge-secondary';
    }
  }

}
