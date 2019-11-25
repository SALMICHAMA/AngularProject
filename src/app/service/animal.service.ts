import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Animal} from '../animal';
import {Injectable} from '@angular/core';

import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListAnimalService {
  // animals = [
  //   {
  //     id: 1,
  //     name: 'Chat',
  //     environment: 'city',
  //     groups: 'felin',
  //   },
  //   {
  //     id: 2,
  //     name: 'Chien',
  //     environment: 'city',
  //     groups: 'Canin',
  //   },
  //   {
  //     id: 3,
  //     name: 'Lion',
  //     environment: 'Savane',
  //     groups: 'felin',
  //   }
  // ];
  //
  // getColumns(): string[] {
  //   return ['name', 'environment', 'groups']}
  //
  // getAnimalbyId(id: number) {
  //   const animals = this.animals.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return animals
  //     ;
  // }
httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'multipart/form-data'})
};

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAnimal(id: string): Observable<Animal> {
    return this.http.get<Animal>(`${this.baseUrl + '/animals/'}+${id}`);
  }

  createAnimal(animal: Animal): Observable<Animal> {
    return this.http.post <Animal> (`${this.baseUrl + '/animal/add'}`, animal, this.httpOptions).pipe();
  }

  updateAnimal(id: string, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnimal(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnimalList(): Observable<Animal []> {
    return this.http.get<Animal []>(`${this.baseUrl + '/animals'}`);
  }

}
