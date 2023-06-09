import { clearForm, fillForm, submitForm } from '@/store/auth/auth.actions';
import { AppState, selectKey, selectPassword } from '@/store/auth/auth.selector';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  rotate = false;
  k: string = ""
  focus: string = "";
  key$: Observable<string>;
  password$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.key$ = store.select(selectKey)
    this.password$ = store.select(selectPassword);
  }

  focusFormKey(key: string) {
    this.focus = key
  }
  focusOut() {
    this.focus = ""
  }
  updateForm(v: Event) {
    const element = v.target as HTMLInputElement;
    const field = element.name === "key" ? "key"
      : element.name === "password" ? "password"
        : null
    this.store.dispatch(fillForm({ field: field, value: element.value }))
  };

  clearForm() {
    this.store.dispatch(clearForm());
  }


  rotateBtn() {
    this.rotate = true;
  }

  unRotateBtn() {
    this.rotate = false;
  }

  submit($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(submitForm());
  }
}
