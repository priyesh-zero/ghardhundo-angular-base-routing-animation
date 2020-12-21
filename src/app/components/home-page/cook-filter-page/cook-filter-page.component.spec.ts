import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookFilterPageComponent } from './cook-filter-page.component';

describe('CookFilterPageComponent', () => {
  let component: CookFilterPageComponent;
  let fixture: ComponentFixture<CookFilterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookFilterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
