import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidFilterPageComponent } from './maid-filter-page.component';

describe('MaidFilterPageComponent', () => {
  let component: MaidFilterPageComponent;
  let fixture: ComponentFixture<MaidFilterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidFilterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
