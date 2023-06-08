import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  open: boolean = false;

  toggle() {
    this.open = !this.open;
  }
}
