import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesStatusComponent } from './images-status.component';

describe('ImagesStatusComponent', () => {
  let component: ImagesStatusComponent;
  let fixture: ComponentFixture<ImagesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
