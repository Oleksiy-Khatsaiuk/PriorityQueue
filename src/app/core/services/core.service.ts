import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CoreService {
  public apiUrl = environment.host;
  constructor(
      private httpClient: HttpClient,
  ) {}
  public sendInfo(data) {
    console.log(data);
    // return this.httpClient.post(this.apiUrl, data);
  }
}

