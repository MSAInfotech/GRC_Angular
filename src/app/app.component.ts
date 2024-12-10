import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCreateComponent } from './project-create/project-create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GRC_Angular';
}
