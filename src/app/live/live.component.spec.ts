import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveComponent} from './live.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {CommentModule} from '../core/component/comment/comment.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from '../core/component/footer/footer.module';

describe('LiveComponent', () => {
  let component: LiveComponent;
  let fixture: ComponentFixture<LiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiveComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        CommentModule,
        FontAwesomeModule,
        FooterModule,
      ],
      providers: [CookieService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
