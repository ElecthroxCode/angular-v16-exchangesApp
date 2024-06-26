import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertDivisasComponent } from './convert-divisas.component';

describe('ConvertDivisasComponent', () => {
  let component: ConvertDivisasComponent;
  let fixture: ComponentFixture<ConvertDivisasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertDivisasComponent]
    });
    fixture = TestBed.createComponent(ConvertDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
