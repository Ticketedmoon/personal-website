import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContextImageComponent } from './body-context-image.component';

describe('BodyContextImageComponent', () => {
  let component: BodyContextImageComponent;
  let fixture: ComponentFixture<BodyContextImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContextImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
