import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CoreService {
  public apiUrl = environment.host;
  public apiUrlToken = environment.hostToken;
  constructor(
      private httpClient: HttpClient,
  ) {}
  public sendInfo(data): Observable<any> {
    return this.httpClient.post(this.apiUrlToken + '/queue', data);
  }

  public sendEmail(email): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/service/add_subsriber', email);
  }
}

