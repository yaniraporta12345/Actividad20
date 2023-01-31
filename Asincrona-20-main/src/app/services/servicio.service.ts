import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  // Trayendo Api_url de environment
  urlBase = environment.Api_url + 'posts/';

  // Metodo getAllInterceptor
  getUserAllInterceptor():Observable<any>{
    return this.http.get(this.urlBase, {observe: 'response'})
  }
}
