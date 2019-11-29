import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Organ} from '../organ';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganService {

  httpOptionsMultiPart = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Accept': 'application/json'
    })
  };

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getOrgan(id: number): Observable<Organ> {
    return this.http.get<Organ>(`${this.baseUrl + '/organs/' + id}`);
  }

  createOrgan(organ: Organ): Observable<Organ> {
    return this.http.post <Organ>(`${this.baseUrl + '/organ/add'}`, organ, this.httpOptionsMultiPart).pipe();
  }

  updateOrgan(id: number, newDescription: string): Observable<Organ> {
    return this.http.patch<Organ>(`${this.baseUrl + '/organs/update/' + id}`, newDescription, this.httpOptionsJson);
  }

  deleteOrgan(id: number): Observable<Organ> {
    return this.http.delete<Organ>(`${this.baseUrl + '/organs/' + id}`, this.httpOptionsJson);
  }

  getOrganList(): Observable<Organ []> {
    return this.http.get<Organ []>(`${this.baseUrl + '/organs'}`);
  }

  filterOrgans(filter: string): Observable<Organ []> {
    return this.http.get<Organ []>(`${this.baseUrl + '/organs/filter/' + filter}`);
  }
}


