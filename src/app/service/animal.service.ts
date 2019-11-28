import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Animal} from '../animal';
import {Injectable} from '@angular/core';
import {Organ} from '../organ';


@Injectable({
  providedIn: 'root'
})
export class ListAnimalService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  private baseUrl = 'http://localhost:8080/api';


  constructor(private http: HttpClient) {
  }

  getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.baseUrl + '/animals/' + id}`);
  }

  createanimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(`${this.baseUrl + '/animal/add'}`, animal).pipe();
  }


  updateAnimal(id: string, value: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${this.baseUrl}/${id}`, value);
  }

  deleteAnimal(id: number): Observable<Animal> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<Animal>(this.baseUrl + '/animals/' + id, httpOptions);
  }


  getAnimalList(): Observable<Animal []> {
    return this.http.get<Animal []>(`${this.baseUrl + '/animals'}`);
  }
  getAnimalOrgans(id: number): Observable<Organ []> {
    return this.http.get<Organ []>(`${this.baseUrl + '/animals/' + id + '/organs'}`);
  }

}
