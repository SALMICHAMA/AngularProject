import {Component, Injector, OnInit} from '@angular/core';
import {OrganService} from '../service/organ.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Animal} from '../animal';
import {Organ} from '../organ';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-organ',
  templateUrl: './single-organ.component.html',
  styleUrls: ['./single-organ.component.css']
})
export class SingleOrganComponent implements OnInit {
  organ: Organ;
  id: number;
  constructor(private organService: OrganService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.reloadData();
  }
  reloadData() {
    this.organService.getOrgan(this.id)
      .subscribe(
        data => {
          this.organ = data;
          console.log(data);
        },
        e => console.log(e));
  }
  list() {
    this.router.navigate(['/animals']);
  }

}
