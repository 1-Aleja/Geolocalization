import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { PropertyService } from './services/property.service';
import { Country } from './interfaces/country';
import { City } from './interfaces/city';
import { Department } from './interfaces/department';
import { Sector } from './interfaces/sector';
import { Property } from './interfaces/property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isPopupOpen: boolean = false;
  isCreateRoute = false;
  countries:Country[] = [];
  cities:City[] = [];
  departments:Department[] = [];
  sector:Sector[] = [];
  property:Property[] = [];

  constructor(private router: Router,private propertyService:PropertyService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCreateRoute = this.router.url.includes('create')||this.router.url.includes('edit');
      }
    });
    this.getCountries();
    this.getCities();
    this.getDepartment();
    this.getSector();
    this.getProperty();
  }

  onCreateButtonClick() {
    this.router.navigate(['/create']);
  }

  getCountries(){
    this.propertyService.getCountry().subscribe({
      next: (res:any) => {
        this.countries = res.data;
        console.log('countries',this.countries);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completo');
      }
    });
  }
  getCities(){
    this.propertyService.getCity().subscribe({
      next: (res:any) => {
        this.cities = res.data;
        console.log('cities',this.cities);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completo');
      }
    });
  }
  getDepartment(){
    this.propertyService.getDepartment().subscribe({
      next: (res:any) => {
        this.departments = res.data;
        console.log('departments',this.departments);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completo');
      }
    });
  }
  getSector(){
    this.propertyService.getSector().subscribe({
      next: (res:any) => {
        this.sector = res.data;
        console.log('sector',this.sector);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completo');
      }
    });
  }
  getProperty(){
    this.propertyService.getProperty().subscribe({
      next: (res:any) => {
        this.property = res.data;
        console.log('property',this.property);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completo');
      }
    });
  }
}
