import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Country} from '../dto/country.dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url=`${environment.base_url}/country`;

  constructor(private http: HttpClient) { }

  getCountries():Promise<Country[]>{
    return this.http.get<Country[]>(this.url).toPromise();

  }



}
