import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookAddComponent } from './page-book-add.component';

describe('PageBookAddComponent', () => {
  let component: PageBookAddComponent;
  let fixture: ComponentFixture<PageBookAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
