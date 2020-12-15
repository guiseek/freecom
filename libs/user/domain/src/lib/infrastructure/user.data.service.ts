import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { User } from '../entities/user'

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<User[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<User[]>(url, {params, headers});
        */

    return of([{ uuid: '', name: 'Lorem ipsum', email: '' }])
  }
}
