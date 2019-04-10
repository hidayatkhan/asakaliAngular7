import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Repo, Event, EventType } from '../models';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private apiURL = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPopularRepos(from: Date): Promise<Repo[]> {
    let formattedDate = moment(from).utc().format('YYYY-MM-DD');
    return this.http
      .get(`${this.apiURL}/search/repositories?q=created:>${formattedDate}&sort=stars`)
      .toPromise()
      .then((response: any) => response.items as Repo[])
      .catch(this.handleError);
  }
}
