import {Component, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {Animal} from '../animal';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-animalstodisplay',
  templateUrl: './animalstodisplay.component.html',
  styleUrls: ['./animalstodisplay.component.css']
})
export class AnimalstodisplayComponent implements OnInit {
  filter: string;
  constructor(private animalService: ListAnimalService, private router: Router, private route: ActivatedRoute) {
  }

  animals: Animal[];

  ngOnInit() {
    this.filter = this.route.snapshot.paramMap.get('filter');
    console.log(this.filter);
    this.reloadData();
  }

  reloadData() {
    if (this.filter == null) {
      this.animalService.getAnimalList()
        .subscribe(
          data => {
            this.animals = data;
          },
          e => console.log(e));
    } else {
      this.animalService.filterAnimals(this.filter)
        .subscribe(
          data => {
            this.animals = data;
          },
          e => console.log(e));
    }
  }
  delete(id: number): void {
    this.animalService.deleteAnimal(id).subscribe(_ => {
      this.animals = this.animals.filter((animal: Animal) => animal.id !== id);
    }, error => {
      console.log(error);
    });
  }
  filterAnimals(filter: string) {
    this.animalService.filterAnimals(this.filter)
      .subscribe(
        data => {
          this.animals = data;
        },
        e => console.log(e));
  }
}
