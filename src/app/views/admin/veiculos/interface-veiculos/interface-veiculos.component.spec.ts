import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceVeiculosComponent } from './interface-veiculos.component';

describe('InterfaceVeiculosComponent', () => {
  let component: InterfaceVeiculosComponent;
  let fixture: ComponentFixture<InterfaceVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
