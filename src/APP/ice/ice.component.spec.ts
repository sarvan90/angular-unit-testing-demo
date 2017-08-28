import { HelloPipe } from './hello.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceComponent } from './ice.component';

describe('IceComponent', () => {
  let component: IceComponent;
  let fixture: ComponentFixture<IceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceComponent, HelloPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
