import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ProjectControlsViewComponent } from '../project-controls-view/project-controls-view.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [TabsModule,ProjectControlsViewComponent,ProjectDetailsComponent],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent {

}
