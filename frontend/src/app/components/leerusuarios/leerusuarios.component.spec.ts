import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerusuariosComponent } from './leerusuarios.component';

describe('LeerusuariosComponent', () => {
  let component: LeerusuariosComponent;
  let fixture: ComponentFixture<LeerusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
