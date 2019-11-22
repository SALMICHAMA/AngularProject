import { Component, OnInit } from '@angular/core';
import {OrganService} from '../service/organ.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-single-organ',
  templateUrl: './single-organ.component.html',
  styleUrls: ['./single-organ.component.css']
})
export class SingleOrganComponent implements OnInit {

  name = 'organs';
  vital =  'organs';
  description = 'description';
  constructor(private organService: OrganService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.name = this.organService.getOrganbyId(+id).name;
    this.vital = this.organService.getOrganbyId(+id).vital;
    this.description = this.organService.getOrganbyId(+id).description;

  }

}
