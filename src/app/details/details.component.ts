
import { HousingService } from './../housing.service';
import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  HousingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  
constructor(){
  const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingLocation = this.HousingService.getHousingLocationById(housingLocationId)
}

}
