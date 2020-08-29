import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListingSectionComponent } from './project-listing-section.component';

describe('FooterInformationComponent', () => {
  let component: ProjectListingSectionComponent;
  let fixture: ComponentFixture<ProjectListingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
