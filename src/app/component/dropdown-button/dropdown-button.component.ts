import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  
  styleUrls: ['./dropdown-button.component.css']
})



export class DropdownButtonComponent {
  constructor(private router: Router) {}
  @Input() receivedValue!:{ name: string, id: number };
  showDropdown = false;
  showDetailsModal = false;
  showEditModal = false;
  showDeleteModal = false;
  selectedRowData: any;
  selectedTabIndex = 0;

    eliminarFila(): void {
    // Lógica para eliminar la fila
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  openDetailsModal( rowData : any): void {
    this.showDetailsModal = true;
  }

  openEditModal(): void {
    this.showEditModal = true;
  }

  openDeleteModal(): void {
    this.showDeleteModal = true;
  }
  
  closeDetailsModal(): void {
    this.showDetailsModal = false;
    

  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }
  openCountryEdit() {
    this.router.navigate(['/edit'], { queryParams: { tab: 'country' } });
  }
  openDepartmentEdit() {
    this.router.navigate(['/edit'], { queryParams: { tab: 'departm-ent' } });
  }
  openCityEdit() {
    this.router.navigate(['/edit'], { queryParams: { tab: 'city' } }); 
  }
  openSectorEdit() {
    this.router.navigate(['/edit'], { queryParams: { tab: 'sector' } }); 
  }
  openPropertyEdit() {
    this.router.navigate(['/edit'], { queryParams: { tab: 'property' } }); 
  }

}