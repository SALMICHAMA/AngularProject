import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Animal} from '../animal';
import {Organ} from '../organ';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganService {
  // organs = [
  //   {
  //     id: 1,
  //     name: 'heart',
  //     vital: 'yes',
  //     description: 'heart beat',
  //   },
  //   {
  //     id: 2,
  //     name: 'lung',
  //     vital: 'yes',
  //     description: 'breathe',
  //   }
  //   ];
  //
  // getColumns(): string[] {
  //   return ['name', 'vital', 'description']}
  //
  // getOrganbyId(id: number) {
  //   const organs = this.organs.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return organs
  //     ;
  // }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'})
  };

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getOrgan(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createOrgan(organ: Organ): Observable<Organ> {
    return this.http.post <Organ> (`${this.baseUrl + '/organ/add'}`, organ, this.httpOptions).pipe();
  }

  updateOrgan(id: string, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteOrgan(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnimalList(): Observable<Organ []> {
    return this.http.get<Organ []>(`${this.baseUrl + '/organs'}`);
  }

}


