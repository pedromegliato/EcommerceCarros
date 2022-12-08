import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDashboardComponent } from './interface-dashboard.component';

describe('InterfaceDashboardComponent', () => {
  let component: InterfaceDashboardComponent;
  let fixture: ComponentFixture<InterfaceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
