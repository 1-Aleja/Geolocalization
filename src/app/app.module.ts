import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownButtonComponent } from './component/dropdown-button/dropdown-button.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPropertyComponentComponent } from './edit-property-component/edit-property-component.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DropdownButtonComponent, CreateComponent, EditComponent, EditPropertyComponentComponent],
  imports: [
              BrowserModule, 
              FormsModule,
              AppRoutingModule,
              MatTabsModule, 
              BrowserAnimationsModule,
              HttpClientModule
            ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}