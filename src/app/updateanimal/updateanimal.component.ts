import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
import {ActivatedRoute, Router} from '@angular/router';
import {ListAnimalService} from '../service/animal.service';

@Component({
  selector: 'app-updateanimal',
  templateUrl: './updateanimal.component.html',
  styleUrls: ['./updateanimal.component.css']
})
export class UpdateanimalComponent implements OnInit {

  id: string;
  animal: Animal;

  constructor(private route: ActivatedRoute, private router: Router,
              private animalService: ListAnimalService) { }

  ngOnInit() {
    this.animal = new Animal();

    this.id = this.route.snapshot.params['id'];

    this.animalService.getAnimal(this.id)
      .subscribe(data => {
        console.log(data)
        this.animal = data;
      }, error => console.log(error));
  }

  updateAnimal() {
    this.animalService.updateAnimal(this.id, this.animal)
      .subscribe(data => console.log(data), error => console.log(error));
    this.animal = new Animal();
    this.gotoList();
  }

  onSubmit() {
    this.updateAnimal();
  }

  gotoList() {
    this.router.navigate(['/animals']);
  }

}
