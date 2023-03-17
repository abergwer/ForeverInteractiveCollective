import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOfCardsComponent } from './grid-of-cards.component';

describe('GridOfCardsComponent', () => {
  let component: GridOfCardsComponent;
  let fixture: ComponentFixture<GridOfCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOfCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridOfCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
