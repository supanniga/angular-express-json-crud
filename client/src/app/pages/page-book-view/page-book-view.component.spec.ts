import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookViewComponent } from './page-book-view.component';

describe('PageBookViewComponent', () => {
  let component: PageBookViewComponent;
  let fixture: ComponentFixture<PageBookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
