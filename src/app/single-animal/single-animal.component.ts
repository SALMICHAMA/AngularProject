import { Component, OnInit } from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {ActivatedRoute} from '@angular/router';
import {OrganService} from '../service/organ.service';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  name = 'animals';
  environment = 'environment';
  groups = 'groups';

  constructor(private animalService: ListAnimalService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.name = this.animalService.getAnimalbyId(+id).name;
    this.environment = this.animalService.getAnimalbyId(+id).environment;
    this.groups = this.animalService.getAnimalbyId(+id).groups;
  }
}
