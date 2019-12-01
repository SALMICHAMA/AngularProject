import {Component, OnInit} from '@angular/core';
import {ListAnimalService} from '../service/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../animal';
import {Organ} from '../organ';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  id: number;
  animal: Animal;
  organ: Organ;
  organs: Organ[];
  organName: string;
  organDescription: string;
  organVital: boolean;
  organStringVital: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private animalService: ListAnimalService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.reloadData();
  }

  reloadData() {
    this.animalService.getAnimal(this.id)
      .subscribe(
        data => {
          this.animal = data;
          console.log(data);
        },
        e => console.log(e));
  }
  updateAnimal(id: number, organ: Organ) {
    const formData = new FormData();
    formData.append('organName', this.organName);
    formData.append('organDescription', this.organDescription);
    formData.append('organVital', this.organStringVital);
    this.organVital = this.getBoolean(this.organStringVital);
    organ = new Organ(this.organName , this.organDescription , this.organVital);
    this.animalService.updateAnimalOrgans(this.id, organ).subscribe(
      data => {
        this.ngOnInit();
      },
      e => console.log(e));
  }
  getBoolean(value: string) {
    switch (value) {
      case 'true' :
        return true;
      default:
        return false;
    }
  }
}
