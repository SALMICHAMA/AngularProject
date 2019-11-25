import { Component, OnInit } from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganService} from '../service/organ.service';
import {Animal} from '../animal';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  id: string;
  animal: Animal;

  constructor(private route: ActivatedRoute, private router: Router,
              private animalService: ListAnimalService) { }

  ngOnInit() {
    this.animal = new Animal();

    this.id = this.route.snapshot.params.id;

    this.animalService.getAnimal(this.id)
      .subscribe(data => {
        console.log(data)
        this.animal = data;
      }, error => console.log(error));
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
