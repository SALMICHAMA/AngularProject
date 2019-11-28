import {Component, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {Animal} from '../animal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-animalstodisplay',
  templateUrl: './animalstodisplay.component.html',
  styleUrls: ['./animalstodisplay.component.css']
})
export class AnimalstodisplayComponent implements OnInit {

  constructor(private animalService: ListAnimalService, private router: Router) {
  }

  animals: Animal[];

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.animalService.getAnimalList()
      .subscribe(
        data => {
          this.animals = data;
        },
        e => console.log(e));
  }
  delete(id: number): void {
    this.animalService.deleteAnimal(id).subscribe(_ => {
      this.animals = this.animals.filter((animal: Animal) => animal.id !== id);
    }, error => {
      console.log(error);
    });
  }
}
