import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInformationComponent } from './footer-information.component';

describe('FooterInformationComponent', () => {
  let component: FooterInformationComponent;
  let fixture: ComponentFixture<FooterInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
