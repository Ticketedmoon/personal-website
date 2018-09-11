import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContextVideoComponent } from './body-context-video.component';

describe('BodyContextVideoComponent', () => {
  let component: BodyContextVideoComponent;
  let fixture: ComponentFixture<BodyContextVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContextVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContextVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
