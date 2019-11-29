import {Component, OnInit} from '@angular/core';
import {OrganService} from '../service/organ.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Organ} from '../organ';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-single-organ',
  templateUrl: './single-organ.component.html',
  styleUrls: ['./single-organ.component.css']
})
export class SingleOrganComponent implements OnInit {
  organ: Organ;
  name: string;
  id: number;
  description: string;
  vital: boolean;
  newDescription: string;

  constructor(private formBuilder: FormBuilder, private organService: OrganService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.reloadData();
  }

  reloadData() {
    this.organService.getOrgan(this.id)
      .subscribe(
        data => {
          this.organ = data;
          this.description = this.organ.description;
          this.vital = this.organ.vital;
          console.log(data);
        },
        e => console.log(e));
  }

  updateOrganDescription() {
    const formData = new FormData();
    formData.append('newDescription', this.newDescription);

    this.organService.updateOrgan(this.id, this.newDescription).subscribe(
      data => {
        this.ngOnInit();
      },
      e => console.log(e));
  }

}
