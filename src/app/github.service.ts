import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  searchTerm;
  getData(name: string): Observable<any> {
    this.searchTerm = name ? name : Constants.defaultSearchTerm;
    const url = `${Constants.searchUrl}${this.searchTerm}`;
    return this.http.get(url).pipe(map((res: any) => res.items));
  }
}
