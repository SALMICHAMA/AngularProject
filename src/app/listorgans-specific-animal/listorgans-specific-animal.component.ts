import { Component, OnInit } from '@angular/core';
import {Organ} from '../organ';
import {Animal} from '../animal';
import {ActivatedRoute, Router} from '@angular/router';
import {ListAnimalService} from '../service/animal.service';
@Component({
  selector: 'app-listorgans-specific-animal',
  templateUrl: './listorgans-specific-animal.component.html',
  styleUrls: ['./listorgans-specific-animal.component.css']
})
export class ListorgansSpecificAnimalComponent implements OnInit {
organs: Organ[];
id: number;
name: string;

  constructor(private animalService: ListAnimalService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.reloadData();
  }
  reloadData() {
    this.animalService.getAnimalOrgans(this.id)
      .subscribe(
        data => {
          this.organs = data;
          console.log(data);
        },
        e => console.log(e));
  }
}
