import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDocsComponent } from './app-docs.component';

describe('DocsComponent', () => {
  let component: AppDocsComponent;
  let fixture: ComponentFixture<AppDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
