import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilterPageComponent } from './home-filter-page.component';

describe('HomeFilterPageComponent', () => {
  let component: HomeFilterPageComponent;
  let fixture: ComponentFixture<HomeFilterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFilterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
