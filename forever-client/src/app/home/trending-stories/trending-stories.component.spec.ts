import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingStoriesComponent } from './trending-stories.component';

describe('TrendingStoriesComponent', () => {
  let component: TrendingStoriesComponent;
  let fixture: ComponentFixture<TrendingStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
