import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPuestoComponent } from './registro-puesto.component';

describe('RegistroPuestoComponent', () => {
  let component: RegistroPuestoComponent;
  let fixture: ComponentFixture<RegistroPuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPuestoComponent]
    });
    fixture = TestBed.createComponent(RegistroPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
