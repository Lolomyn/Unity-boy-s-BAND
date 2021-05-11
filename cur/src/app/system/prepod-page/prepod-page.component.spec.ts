import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepodPageComponent } from './prepod-page.component';

describe('PrepodPageComponent', () => {
  let component: PrepodPageComponent;
  let fixture: ComponentFixture<PrepodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
