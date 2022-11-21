import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaseguridadComponent } from './zonaseguridad.component';

describe('ZonaseguridadComponent', () => {
  let component: ZonaseguridadComponent;
  let fixture: ComponentFixture<ZonaseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaseguridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
