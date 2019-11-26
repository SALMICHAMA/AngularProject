import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
import {ListAnimalService} from '../service/animal.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.css']
})
export class AddanimalComponent implements OnInit {

  nbOrgans: number;
  animals: Animal = new Animal();
  form: FormGroup;
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
    this.animals = new Animal();
    this.animalService.createanimal(this.animals)
      .subscribe(data => console.log(data), error => console.log(error));
     this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/animals']);
  }


}
