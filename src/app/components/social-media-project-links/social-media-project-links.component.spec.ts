import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaProjectLinksComponent } from './social-media-project-links.component';

describe('SocialMediaProjectLinksComponent', () => {
  let component: SocialMediaProjectLinksComponent;
  let fixture: ComponentFixture<SocialMediaProjectLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaProjectLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaProjectLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
