import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal';
import {ListAnimalService} from '../service/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Organ} from '../organ';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.css']
})
export class AddanimalComponent implements OnInit {
  nbOrgans: number;
  animals: Animal = new Animal();
  uploadForm: FormGroup;
  organs: Organ[];
  organ: Organ;
  organName: string;
  organDescription: string;
  organVital: string;
  isVital: boolean;


  private baseUrl = 'http://localhost:8080/api';
  constructor(public formBuilder: FormBuilder, private animalService: ListAnimalService,
              private router: Router, private httpClient: HttpClient) {
    this.nbOrgans = 0;
    this.organVital = 'false';
  }

  getNbOrgans(): any[] {
    return Array(this.nbOrgans);
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      animalPicture: ['']
    });
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('animalPicture').setValue(file);
    }
  }


  submitForm() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('animalPicture').value);
    formData.append('name', this.animals.name);
    formData.append('environment', this.animals.environment);
    formData.append('category', this.animals.category);
    if (this.nbOrgans > 0) {
      formData.append('organName', this.organName);
      formData.append('organDescription', this.organDescription);
      formData.append('organVital', this.organVital);
      this.organ.name = this.organName;
      this.organ.description = this.organDescription;
      this.organ.vital =  this.getBoolean(this.organVital);
      this.organs.push(this.organ);
      this.animals.organs = this.organs;
      this.animalService.createanimal(this.animals);
    } else {
      this.httpClient.post(this.baseUrl + '/animal/add', formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/animals']);
  }
  getBoolean(value: string) {
    switch (value) {
      case 'true':
        return true;
      default:
        return false;
    }
  }

}
