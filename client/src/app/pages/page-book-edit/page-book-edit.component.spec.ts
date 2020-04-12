import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookEditComponent } from './page-book-edit.component';

describe('PageBookEditComponent', () => {
  let component: PageBookEditComponent;
  let fixture: ComponentFixture<PageBookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
