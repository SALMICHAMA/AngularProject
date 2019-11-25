import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
import {ListAnimalService} from '../service/animal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.css']
})
export class AddanimalComponent implements OnInit {

  nbOrgans: number;
  animals: Animal = new Animal();
  constructor(private animalService: ListAnimalService , private router: Router) {
    this.nbOrgans = 0;
  }

  getNbOrgans(): any[] {
    return Array(this.nbOrgans);
  }
  ngOnInit() {
  }
  newanimal(): void {
    this.animals = new Animal();

  }
  save() {
    this.animalService.createAnimal(this.animals)
      .subscribe(data => console.log(data), error => console.log(error));
    this.animals = new Animal();
    // this.reloadData();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/animals']);
  }
}
