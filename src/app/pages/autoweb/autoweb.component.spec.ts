import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowebComponent } from './autoweb.component';

describe('AutowebComponent', () => {
  let component: AutowebComponent;
  let fixture: ComponentFixture<AutowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutowebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
