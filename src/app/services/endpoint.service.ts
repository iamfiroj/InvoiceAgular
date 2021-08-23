import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  port = environment.apiport;
  //private _authService: AuthService;

  constructor(private http: HttpClient, private injector: Injector) {
  }

  get<T>(endpointUrl:any): Observable<T> {
    endpointUrl = this.port + endpointUrl;
    return this.http.get<T>(endpointUrl, this.getRequestHeaders());
  }

  addupdate<T>(obj:any, endpointUrl:any): Observable<T> {
    endpointUrl = this.port + endpointUrl;
    return this.http.post<T>(endpointUrl, obj, this.getRequestHeaders());
  }

  deleteObj<T>(endpointUrl:any): Observable<T> {
    endpointUrl = this.port + endpointUrl;
    return this.http.delete<T>(endpointUrl, this.getRequestHeaders());
  }

  uploadFile<T>(formData:any, endpointUrl:any) {
    endpointUrl = this.port + endpointUrl;
    return this.http.post<T>(
      endpointUrl,
      formData, {
      reportProgress: true,
      observe: 'events'
      /* headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.accessToken })*/
    });
  }

  download<T>(obj:any, endpointUrl:any): Observable<Blob> {
    endpointUrl = this.port + endpointUrl;
    return this.http.post<Blob>(endpointUrl, obj,
      {
        responseType: 'blob' as 'json',
        headers: {
          //'Authorization': 'Bearer ' + this.authService.accessToken,
          'Content-Type': 'application/json',
          'Accept': `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
          'App-Version': '1.0'
        }
      });

  }

  //private get authService() {
  //  if (!this._authService) {
  //    this._authService = this.injector.get(AuthService);
  //  }
  //  return this._authService;
  //}

  private getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
    var headers = this.getHeaders();
    return { headers: headers };
  }

  private getHeaders() {
    return new HttpHeaders({
      //'Authorization': 'Bearer ' + this.authService.accessToken,
      'Content-Type': 'application/json',
      'Accept': `application/vnd.iman.v1+json, application/json, text/plain, */*`,
      'App-Version': '1.0'
    });
  }
}
