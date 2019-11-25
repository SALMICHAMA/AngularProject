import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {OrganService} from '../service/organ.service';
import {Router} from '@angular/router';
import {Organ} from '../organ';

@Component({
  selector: 'app-listorgans',
  templateUrl: './listorgans.component.html',
  styleUrls: ['./listorgans.component.css']
})
export class ListorgansComponent implements OnInit {
  organs: Organ[];
  columns: string[];

  constructor(private organservice: OrganService ,  private router: Router) { }

  ngOnInit() {
    // this.organs = this.organservice.organs;
    // this.columns = this.organservice.getColumns();
    this.reloadData();
  }
  reloadData() {
    this.organservice.getAnimalList()
      .subscribe(
        data => {
          this.organs = data;
          console.log(data);
        },
        e => console.log(e));
  }
  deleteOrgan(id: string) {
    this.organservice.deleteOrgan(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        e => console.log(e));
  }

  OrganDetails(id: string) {
    this.router.navigate(['/animals', id]);
  }
}
