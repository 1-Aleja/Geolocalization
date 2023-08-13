import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';


@NgModule({
  declarations: [AppComponent, DropdownButtonComponent],
  imports: [BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}