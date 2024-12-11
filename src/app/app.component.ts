import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectViewComponent } from './project-view/project-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectCreateComponent, ProjectViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GRC_Angular';
}
