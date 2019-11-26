import { Component, OnInit } from '@angular/core';
import {OrganService} from '../service/organ.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Animal} from '../animal';
import {Organ} from '../organ';

@Component({
  selector: 'app-single-organ',
  templateUrl: './single-organ.component.html',
  styleUrls: ['./single-organ.component.css']
})
export class SingleOrganComponent implements OnInit {

  id: string;
  organ: Organ;

  constructor(private organService: OrganService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.organ = new Organ();

    this.id = this.route.snapshot.params.id;

    this.organService.getOrgan(this.id)
      .subscribe(data => {
        console.log(data)
        this.organ = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/animals']);
  }


}
