import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilearnComponent } from './ailearn.component';

describe('AilearnComponent', () => {
  let component: AilearnComponent;
  let fixture: ComponentFixture<AilearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AilearnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AilearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
