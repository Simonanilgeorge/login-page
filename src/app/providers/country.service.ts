import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDto } from '../dto/country.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = `${environment.base_url}/country`;

  constructor(private http: HttpClient) { }

  async getCountries(): Promise<CountryDto[]> {
    return this.http.get<CountryDto[]>(this.url).toPromise();
  }

  async addCountry(country: CountryDto): Promise<CountryDto> {
    return this.http.post<CountryDto>(this.url, country).toPromise();
  }

  async deleteCountry(code: number): Promise<CountryDto> {
    return this.http.delete<CountryDto>(`${this.url}/${code}`).toPromise();
  }

  async updateCountry(country:CountryDto, code:number): Promise<CountryDto> {
    let url = `${this.url}/${code}`;
    console.log(`url is ${url}`);
    return this.http.put<CountryDto>(url, country).toPromise();
  }
  
}
