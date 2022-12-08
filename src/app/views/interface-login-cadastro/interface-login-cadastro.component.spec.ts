import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceLoginCadastroComponent } from './interface-login-cadastro.component';

describe('InterfaceLoginCadastroComponent', () => {
  let component: InterfaceLoginCadastroComponent;
  let fixture: ComponentFixture<InterfaceLoginCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceLoginCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceLoginCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
