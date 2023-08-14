import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditPropertyComponentComponent } from 'src/app/edit-property-component/edit-property-component.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  selectedTabIndex: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab === 'country') {
        this.selectedTabIndex = 0;
      } else if (tab === 'department') {
        this.selectedTabIndex = 1;
      }else if(tab === 'city') {
        this.selectedTabIndex = 2;
      }else if(tab === 'sector') {
        this.selectedTabIndex = 3;
      }else if(tab === 'property') {
        this.selectedTabIndex = 4;
      }
    });
  }
}
