import { Component, OnInit } from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganService} from '../service/organ.service';
import {Animal} from '../animal';
import {AnimalstodisplayComponent} from "../animalstodisplay/animalstodisplay.component";

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  id: string;
  animal: AnimalstodisplayComponent;

  constructor(private route: ActivatedRoute, private router: Router,
              private animalService: ListAnimalService) {
  }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.animalService.getAnimal(this.id)
      .subscribe(
        data => {
          this.animal = data;
          console.log(data);
        },
        e => console.log(e));
  }
  animalDetails(id: string) {
    this.router.navigate(['/animals/', id]);
  }
  list() {
    this.router.navigate(['/animals']);
  }

  // name = 'animals';
  // environment = 'environment';
  // groups = 'groups';

  // constructor(private animalService: ListAnimalService, private route: ActivatedRoute) {
  // }
  //
  // ngOnInit() {
  //   const id = this.route.snapshot.params.id;
  // this.name = this.animalService.getAnimalbyId(+id).name;
  // this.environment = this.animalService.getAnimalbyId(+id).environment;
  // this.groups = this.animalService.getAnimalbyId(+id).groups;
}

