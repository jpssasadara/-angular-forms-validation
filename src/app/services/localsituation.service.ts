import { Injectable } from '@angular/core';
import { Information } from '../models/information';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalsituationService {

  private baseUrl = 'https://hpb.health.gov.lk/api/get-current-statistical';
  constructor(private http: HttpClient) { }

    // for get all instance list
    getInformation(): Observable<Information> {
      console.log("sasa service")
      return this.http.get<Information>(this.baseUrl);
    
    }
}
