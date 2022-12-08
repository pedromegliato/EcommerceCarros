import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceMainComponent } from './interface-main.component';

describe('InterfaceMainComponent', () => {
  let component: InterfaceMainComponent;
  let fixture: ComponentFixture<InterfaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
