import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectControlsViewComponent } from './project-controls-view.component';

describe('ProjectControlsViewComponent', () => {
  let component: ProjectControlsViewComponent;
  let fixture: ComponentFixture<ProjectControlsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectControlsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectControlsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
