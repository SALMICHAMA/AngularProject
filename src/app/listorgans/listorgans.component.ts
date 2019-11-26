import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {OrganService} from '../service/organ.service';

@Component({
  selector: 'app-listorgans',
  templateUrl: './listorgans.component.html',
  styleUrls: ['./listorgans.component.css']
})
export class ListorgansComponent implements OnInit {


  organs: any[];
  columns: string[];

  constructor(private organservice: OrganService) { }

  ngOnInit() {
    this.organs = this.organservice.organs;
    this.columns = this.organservice.getColumns();
  }

}
