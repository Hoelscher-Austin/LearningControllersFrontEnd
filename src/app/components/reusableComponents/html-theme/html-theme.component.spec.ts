import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlThemeComponent } from './html-theme.component';

describe('HtmlThemeComponent', () => {
  let component: HtmlThemeComponent;
  let fixture: ComponentFixture<HtmlThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
