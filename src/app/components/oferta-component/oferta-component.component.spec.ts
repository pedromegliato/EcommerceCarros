import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaComponentComponent } from './oferta-component.component';

describe('OfertaComponentComponent', () => {
  let component: OfertaComponentComponent;
  let fixture: ComponentFixture<OfertaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
