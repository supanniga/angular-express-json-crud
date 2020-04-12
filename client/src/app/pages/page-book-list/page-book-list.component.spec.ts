import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookListComponent } from './page-book-list.component';

describe('PageBookListComponent', () => {
  let component: PageBookListComponent;
  let fixture: ComponentFixture<PageBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
