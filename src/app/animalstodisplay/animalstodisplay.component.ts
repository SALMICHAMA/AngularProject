import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';

@Component({
  selector: 'app-animalstodisplay',
  templateUrl: './animalstodisplay.component.html',
  styleUrls: ['./animalstodisplay.component.css']
})
export class AnimalstodisplayComponent implements OnInit {
  @Input() Animalname: string;
  @Input() Animalenvironment: string;
  @Input() Animalgroups: string;
  @Input() index: string;
  @Input() id: number;
  animals: any[];
  columns: string[];

  constructor(private animalService: ListAnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.animals;
    this.columns = this.animalService.getColumns();
  }

}
