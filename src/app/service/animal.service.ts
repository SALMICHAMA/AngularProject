import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Animal} from '../animal';
import {Injectable} from '@angular/core';
import {AnimalstodisplayComponent} from '../animalstodisplay/animalstodisplay.component';


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
      'Content-Type': 'multipart/form-data'
    })
  };

  private baseUrl = 'http://localhost:8080/api';


  constructor(private http: HttpClient) {
  }

  getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.baseUrl + '/animals/animal/' + id}`);
  }

  createanimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(`${this.baseUrl + '/animal/add'}`, animal).pipe();
  }



  updateAnimal(id: string, value: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${this.baseUrl}/${id}`, value);
  }

  /*  deleteAnimal(name: string): Observable<any> {
      return this.http.delete(`${this.baseUrl + '/animals/' + name} `, { responseType: 'text' });
    }*/

  deleteAnimal(id: number): Observable<Animal> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    ;

    return this.http.delete<Animal>(this.baseUrl + '/animals/' + id, httpOptions);
    // .pipe(tap(_ => console.log('Deleted animal with name = ${name}')),
    // catchError(error => of(null))
    // );
  }


  getAnimalList(): Observable<Animal []> {
    return this.http.get<Animal []>(`${this.baseUrl + '/animals'}`);
  }

}
