import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Animal} from '../animal';
import {Organ} from '../organ';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'})
  };

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getOrgan(id: number): Observable<Organ> {
    return this.http.get<Organ>(`${this.baseUrl + '/organs/' + id}`);
  }

  createOrgan(organ: Organ): Observable<Organ> {
    return this.http.post <Organ> (`${this.baseUrl + '/organs/add'}`, organ , this.httpOptions).pipe();
  }

  updateOrgan(id: string, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteOrgan(id: number): Observable<Organ> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<Organ>(`${this.baseUrl + '/organs/' + id}`, httpOptions);
  }

  getOrganList(): Observable<Organ []> {
    return this.http.get<Organ []>(`${this.baseUrl + '/organs'}`);
  }
  filterOrgans(filter: string): Observable<Organ []> {
    return this.http.get<Organ []>(`${this.baseUrl + '/organs/filter/' + filter}`);
  }
}


