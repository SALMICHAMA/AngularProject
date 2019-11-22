import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listanimals',
  templateUrl: './listanimals.component.html',
  styleUrls: ['./listanimals.component.css']
})
export class ListanimalsComponent implements OnInit {
  animals: any[];

  constructor(private animalService: ListAnimalService, private router: Router) {
  }

  ngOnInit() {
    this.animals = this.animalService.animals;
    // this.router = this.router.navigate(['/animals']);
  }


}
