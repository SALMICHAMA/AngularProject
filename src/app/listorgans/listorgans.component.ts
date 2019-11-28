import {Component, Input, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {OrganService} from '../service/organ.service';
import {Router} from '@angular/router';
import {Organ} from '../organ';
import {Animal} from '../animal';

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
    this.organservice.getOrganList()
      .subscribe(
        data => {
          this.organs = data;
          console.log(data);
        },
        e => console.log(e));
  }
  delete(id: number): void {
    this.organservice.deleteOrgan(id).subscribe(_ => {
      this.organs = this.organs.filter((organ: Organ) => organ.id !== id);
    }, error => {
      console.log(error);
    });
  }

  OrganDetails(id: string) {
    this.router.navigate(['/animals', id]);
  }
}
