import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPortfolioSectionComponent } from './project-portfolio-section.component';

describe('ProjectPortfolioSectionComponent', () => {
  let component: ProjectPortfolioSectionComponent;
  let fixture: ComponentFixture<ProjectPortfolioSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPortfolioSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPortfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
