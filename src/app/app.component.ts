import {Component, OnInit} from '@angular/core';
import {ListAnimalService} from './service/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Webanimals';
  animals: any[];

  constructor(private listanimalService: ListAnimalService){

  }
  ngOnInit() {
    // this.animals = this.listanimalService.animals;
  }


}
