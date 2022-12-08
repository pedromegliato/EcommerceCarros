import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceListVeiculosComponent } from './interface-list-veiculos.component';

describe('InterfaceListVeiculosComponent', () => {
  let component: InterfaceListVeiculosComponent;
  let fixture: ComponentFixture<InterfaceListVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceListVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceListVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
