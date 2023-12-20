import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntrevistaComponent } from './registro-entrevista.component';

describe('RegistroEntrevistaComponent', () => {
  let component: RegistroEntrevistaComponent;
  let fixture: ComponentFixture<RegistroEntrevistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroEntrevistaComponent]
    });
    fixture = TestBed.createComponent(RegistroEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
