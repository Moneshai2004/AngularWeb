import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthlinksComponent } from './authlinks.component';

describe('AuthlinksComponent', () => {
  let component: AuthlinksComponent;
  let fixture: ComponentFixture<AuthlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthlinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
