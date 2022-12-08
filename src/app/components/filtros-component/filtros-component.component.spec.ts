import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosComponentComponent } from './filtros-component.component';

describe('FiltrosComponentComponent', () => {
  let component: FiltrosComponentComponent;
  let fixture: ComponentFixture<FiltrosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
