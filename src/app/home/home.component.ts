import { HousingService } from './../housing.service';
import { Housinglocation } from './../housinglocation';
import { Component,inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // readonly baseUrl = '../../assets/';
  // housinglocation: Housinglocation={
  //   id: 0,
  //     name: 'Acme Fresh Start Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: `${this.baseUrl}`,
  //     availableUnits: 4,
  //     wifi: true,
  //     laundry: true
  // }

  housinglocationList: Housinglocation[] = [];
  HousingService:HousingService = inject(HousingService);
constructor(){
  this.housinglocationList = this.HousingService.getAllHousingLocations();
}

}
