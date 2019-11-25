import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {Observable} from 'rxjs';
import {Animal} from '../animal';
import {Router} from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-animalstodisplay',
  templateUrl: './animalstodisplay.component.html',
  styleUrls: ['./animalstodisplay.component.css']
})
export class AnimalstodisplayComponent implements OnInit {
  animals: Animal[];
  columns: string[];

  constructor(private animalService: ListAnimalService , private router: Router) { }

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
  deleteAnimal(id: string) {
    this.animalService.deleteAnimal(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        e => console.log(e));
  }

  animalDetails(id: string) {
    this.router.navigate(['/animals', id]);
  }
}
