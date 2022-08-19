import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtomakeComponent } from './howtomake.component';

describe('HowtomakeComponent', () => {
  let component: HowtomakeComponent;
  let fixture: ComponentFixture<HowtomakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtomakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtomakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
