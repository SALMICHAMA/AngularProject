import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {Observable, of} from 'rxjs';
import {Animal} from '../animal';
import {Router} from '@angular/router';
import {error} from 'util';
import {catchError, tap} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-animalstodisplay',
  templateUrl: './animalstodisplay.component.html',
  styleUrls: ['./animalstodisplay.component.css']
})
export class AnimalstodisplayComponent implements OnInit {

  constructor(private animalService: ListAnimalService, private router: Router) {
  }
  animals: Animal[];
  columns: string[];

  /*  deleteAnimal(name: string) {
      this.animalService.deleteAnimal(name)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          e => console.log(e));
    }*/

  delete(name: string): void {
    this.animalService.deleteAnimal(name).subscribe(_ => {
      this.animals = this.animals.filter(eachAnimal => eachAnimal.name !== name);
    });
  }

/*  delete(animal) {
    this.animalService.deleteAnimal(animal.name).subscribe( Response => {
      this.animalService.getAnimalList();
    });
  }*/

  ngOnInit() {
    // this.animals = this.animalService.animals;
    // this.columns = this.animalService.getColumns();
    this.reloadData();
  }

  reloadData() {
    this.animalService.getAnimalList()
      .subscribe(
        data => {
          this.animals = data;
          console.log(data);
        },
        e => console.log(e));
  }


  animalDetails(id: string) {
    this.router.navigate(['/animals/', id]);
  }
}
