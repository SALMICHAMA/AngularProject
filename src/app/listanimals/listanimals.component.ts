import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';

@Component({
  selector: 'app-listanimals',
  templateUrl: './listanimals.component.html',
  styleUrls: ['./listanimals.component.css']
})
export class ListanimalsComponent implements OnInit {
  animals: any[];

  constructor(private animalService: ListAnimalService) {
  }

  ngOnInit() {
    this.animals = this.animalService.animals;
  }


}
