import {Component, Input, OnInit} from '@angular/core';
import {OrganService} from '../service/organ.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Organ} from '../organ';


@Component({
  selector: 'app-listorgans',
  templateUrl: './listorgans.component.html',
  styleUrls: ['./listorgans.component.css']
})
export class ListorgansComponent implements OnInit {

  organs: Organ[];
  filter: string;

  constructor(private organservice: OrganService ,  private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    this.filter = this.route.snapshot.paramMap.get('filter');
    this.reloadData();
  }
  reloadData() {
    if (this.filter == null) {
      this.organservice.getOrganList()
        .subscribe(
          data => {
            this.organs = data;
          },
          e => console.log(e));
    } else {
      this.organservice.filterOrgans(this.filter)
        .subscribe(
          data => {
            this.organs = data;
          },
          e => console.log(e));
    }
  }
  delete(id: number): void {
    this.organservice.deleteOrgan(id).subscribe(_ => {
      this.organs = this.organs.filter((organ: Organ) => organ.id !== id);
    }, error => {
      console.log(error);
    });
  }

}
