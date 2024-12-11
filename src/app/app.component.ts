import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GRC_Angular';
}
