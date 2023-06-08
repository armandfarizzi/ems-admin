import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
  selector: 'aside#app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  constructor(private router: Router) {

  }

  isRouteActiveByPath(name: string): boolean {
    const matchOptions: IsActiveMatchOptions = {
      paths: 'exact',
      matrixParams: 'ignored',
      queryParams: 'ignored',
      fragment: 'ignored'
    };

    return this.router.isActive(name, matchOptions);
  }
}
