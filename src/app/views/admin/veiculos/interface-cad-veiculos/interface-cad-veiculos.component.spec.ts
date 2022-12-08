import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceCadVeiculosComponent } from './interface-cad-veiculos.component';

describe('InterfaceCadVeiculosComponent', () => {
  let component: InterfaceCadVeiculosComponent;
  let fixture: ComponentFixture<InterfaceCadVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceCadVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceCadVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
