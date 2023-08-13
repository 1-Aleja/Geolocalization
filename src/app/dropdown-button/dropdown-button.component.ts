import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css']
})



export class DropdownButtonComponent {
  showDropdown = false;
  showDetailsModal = false;
  showEditModal = false;
  showDeleteModal = false;
  selectedRowData: any;

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

}