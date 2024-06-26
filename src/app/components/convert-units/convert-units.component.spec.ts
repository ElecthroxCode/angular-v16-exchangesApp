import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertUnitsComponent } from './convert-units.component';

describe('ConvertUnitsComponent', () => {
  let component: ConvertUnitsComponent;
  let fixture: ComponentFixture<ConvertUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertUnitsComponent]
    });
    fixture = TestBed.createComponent(ConvertUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
