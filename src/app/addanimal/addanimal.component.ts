import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';
import {ListAnimalService} from '../service/animal.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.css']
})
export class AddanimalComponent implements OnInit {

  nbOrgans: number;
  animals: Animal = new Animal();
  form: FormGroup;

  private baseUrl = 'http://localhost:8080/api';

  constructor(public fb: FormBuilder, private animalService: ListAnimalService , private router: Router, private httpClient: HttpClient) {
    this.nbOrgans = 0;
  }

  getNbOrgans(): any[] {
    return Array(this.nbOrgans);
  }
  ngOnInit() {

      this.form = this.fb.group({ name: [''],
        environment: [''],
        category: [''],
        avatar: []
      });
  }


  newanimal(): void {
    this.animals = new Animal();

  }



  uploadFile(event) {
    const headers = new Headers();
    headers.set('Content-Type', 'multipart/form-data');
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity();

    // formData.append('avatar', this.animals.imageUrl);
  }


submitForm() {
    // tslint:disable-next-line:prefer-const
    const formData = new FormData();
    console.log(this.form);
    formData.append('name', this.animals.name);
    formData.append('environment',  this.animals.environment);
    formData.append('category',  this.animals.category);
    formData.append('avatar', this.form.get('avatar').value);



    this.httpClient.post(this.baseUrl + '/animal/add', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.gotoList();
  }

  // save() {
  //
  //   this.animals = new Animal();
  //   this.animalService.createanimal(this.animals)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.gotoList();
  // }

  gotoList() {
    this.router.navigate(['/animals']);
  }


}
