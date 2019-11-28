import {Component, OnInit} from '@angular/core';
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
  uploadForm: FormGroup;

  private baseUrl = 'http://localhost:8080/api';

  constructor(public formBuilder: FormBuilder, private animalService: ListAnimalService, private router: Router, private httpClient: HttpClient) {
    this.nbOrgans = 0;
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
    //formData.append('organs', this.animals.organs);
    this.httpClient.post(this.baseUrl + '/animal/add', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/animals']);
  }


}
