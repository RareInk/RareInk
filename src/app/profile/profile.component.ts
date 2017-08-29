import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rareink-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  profile$: Observable<{}>;

  constructor(store: Store<IAppState>) {

    this.profile$ = store.select('profile');
  }
}
