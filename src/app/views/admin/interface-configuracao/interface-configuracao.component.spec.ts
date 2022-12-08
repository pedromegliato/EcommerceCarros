import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceConfiguracaoComponent } from './interface-configuracao.component';

describe('InterfaceConfiguracaoComponent', () => {
  let component: InterfaceConfiguracaoComponent;
  let fixture: ComponentFixture<InterfaceConfiguracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceConfiguracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
