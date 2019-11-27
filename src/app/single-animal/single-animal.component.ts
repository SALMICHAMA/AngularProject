import { Component, OnInit } from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../animal';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  id: number;
  animal: Animal;

  constructor(private route: ActivatedRoute, private router: Router,
              private animalService: ListAnimalService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
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

}

