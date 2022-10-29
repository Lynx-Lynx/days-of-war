import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaComponent } from './ua.component';

describe('UaComponent', () => {
  let component: UaComponent;
  let fixture: ComponentFixture<UaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
