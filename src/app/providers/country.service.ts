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

  async getCountries():Promise<Country[]>{
    return this.http.get<Country[]>(this.url).toPromise();

  }

async addCountry(country:Country):Promise<Country>{
  return this.http.post<Country>(this.url,country).toPromise();

}
async deleteCountry(code:number):Promise<Country>{
  return this.http.delete<Country>(`${this.url}/${code}`).toPromise();
}

async updateCountry(country,code):Promise<Country>{

  let url=`${this.url}/${code}`;
  console.log(`url is ${url}`);
  return this.http.put<Country>(url,country).toPromise();
}
}
