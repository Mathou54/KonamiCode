import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KonamiCodeComponent} from './konami-code.component';

describe('KonamiCodeComponent', () => {
  let component: KonamiCodeComponent;
  let fixture: ComponentFixture<KonamiCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KonamiCodeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonamiCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
