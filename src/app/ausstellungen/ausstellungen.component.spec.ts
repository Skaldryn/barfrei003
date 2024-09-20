import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusstellungenComponent } from './ausstellungen.component';

describe('AusstellungenComponent', () => {
  let component: AusstellungenComponent;
  let fixture: ComponentFixture<AusstellungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AusstellungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AusstellungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
