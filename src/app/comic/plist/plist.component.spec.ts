import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPlistComponent } from './plist.component';

describe('ComicPlistComponent', () => {
  let component: ComicPlistComponent;
  let fixture: ComponentFixture<ComicPlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicPlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicPlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
