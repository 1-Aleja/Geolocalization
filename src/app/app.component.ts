import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isPopupOpen: boolean = false;
  isCreateRoute = false;

  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCreateRoute = this.router.url.includes('create')||this.router.url.includes('edit');
      }
    });
  }
  onCreateButtonClick() {
    this.router.navigate(['/create']);
  }
}
