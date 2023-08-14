import { Component } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  
    propertyNameCity: string ='';
    propertyName: string = '';
    countryName: string = '';
    responseMessage: string = ''; 
    responseMessageSaveCountry : string = ''; 
    cityName: string = '';
    departmentName: string = '';
    responseMessageSaveCity : string = '';
    responseMessageSaveDepartment : string = '';
    responseMessageSaveProperty : string = '';
    isCreateView = false; 
    nameOwner : string = '';
    emailOwner: string = '';
    residentialSet  : string = '';
    tower  : string = '';
    appartment  : string = '';
    address  : string = '';
    sectorName  : string = '';
    constructor(private propertyService: PropertyService) {}

    onSaveButtonClick() {
      this.propertyService.saveSector(this.propertyNameCity, this.propertyName).subscribe(
        response => {
          this.responseMessage = response.message
        },
        error => {
          console.error('Error al guardar', error);
        }
      );
    }
    onSaveCountryButtonClick() {
      this.propertyService.saveCountry(this.countryName).subscribe(
        response => {
          this.responseMessageSaveCountry = response.message
          console.log(response);
        },
        error => {
          console.error('Error al guardar', error);
        }
      );
    }
    onButtonClickSaveCity() {
      this.propertyService.saveCity(this.departmentName,this.cityName).subscribe(
        response => {
          this.responseMessageSaveCity = response.message
          console.log(response);
        },
        error => {
          console.error('Error al guardar', error);
        }
      );
    }
    onButtonClickSaveDepartment() {
      this.propertyService.saveDepartment(this.countryName,this.departmentName).subscribe(
        response => {
          this.responseMessageSaveDepartment = response.message
          console.log(response);
        },
        error => {
          console.error('Error al guardar', error);
        }
      );
    }
    onButtonClickSaveProperty() {
      this.propertyService.saveProperty( 
                                          this.nameOwner,
                                          this.emailOwner,
                                          this.residentialSet,
                                          this.tower,
                                          this.appartment,
                                          this.address ,
                                          this.sectorName,
                                          this.cityName,
                                          ).subscribe(
        response => {
          this.responseMessageSaveProperty = response.message
          console.log(response);
        },
        error => {
          console.error('Error al guardar', error);
        }
      );
    }

}