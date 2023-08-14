import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';
import { City } from '../interfaces/city';
import { Department } from '../interfaces/department';
import { Sector } from '../interfaces/sector';
import { Property } from '../interfaces/property';
import { DetailCountry } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl: string = environment.apiUrl;


  constructor(private http:HttpClient) {}
  getCountry() : Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + 'country/index');
  }
  getDetailsCountry(countryId: number): Observable<DetailCountry[]> {
    return this.http.get<DetailCountry[]>(`${this.apiUrl}country/detail/${countryId}`);
  }
  
  getCity() : Observable<City[]> {
    return this.http.get<City[]>(this.apiUrl + 'city/index');
  }
  getDepartment() : Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + 'department/index');
  }
  getSector() : Observable<Sector[]> {
    return this.http.get<Sector[]>(this.apiUrl + 'sector/index');
  }
  getProperty() : Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl + 'property/index');
  }
  saveSector(city_name: string, name: string): Observable<any> {
    const data = {city_name, name };
    console.log( city_name, name );
    return this.http.post(this.apiUrl + 'sector/saveOrUpdate', data);
  }
  saveCountry(name: string): Observable<any> {
    const data = { name };
    console.log( name );
    return this.http.post(this.apiUrl + 'country/saveOrUpdate', data);
  }
  saveCity(department_name: string , name: string): Observable<any> {
    const data = { department_name , name};
    console.log( name );
    return this.http.post(this.apiUrl + 'city/saveOrUpdate', data);
  }
  saveDepartment(country_name: string , name: string): Observable<any> {
    const data = { country_name , name};
    console.log( name );
    return this.http.post(this.apiUrl + 'department/saveOrUpdate', data);
  }
  saveProperty( name_owner : string,
                email_owner: string,
                residential_set  : string,
                tower  : string,
                appartment  : string,
                address  : string,
                sector_name  : string,
                city_name: string
                ): Observable<any> {
    const data = {  name_owner,
                    email_owner,
                    residential_set ,
                    tower ,
                    appartment ,
                    address ,
                    sector_name,
                    city_name
                  };
    return this.http.post(this.apiUrl + 'property/saveOrUpdate', data);
  }
}