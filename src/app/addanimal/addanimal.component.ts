import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.css']
})
export class AddanimalComponent implements OnInit {

  nbOrgans: number;

  constructor() {
    this.nbOrgans = 0;
  }

  getNbOrgans(): any[] {
    return Array(this.nbOrgans);
  }
  ngOnInit() {
  }
}
