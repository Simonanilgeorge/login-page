import { Component, OnInit } from '@angular/core';
import {Country} from '../../dto/country.dto';
import {CountryService } from '../../providers/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {


  countryDialog: boolean;
  submitted: boolean;
  public countries:Country[]=[];

  public country:Country=new Country();

  clonedProducts: { [s: string]: Country; } = {};

  constructor(private countryService:CountryService ) { }

  ngOnInit(): void {
    this.getCountries();

  }

  getCountries(){
    this.countryService.getCountries().then(data=>{
      this.countries=data;
      console.log(data);
    })

  }

  add(){
    this.countryService.addCountry(this.country).then(data=>{
      console.log(data);
      this.countries.push(data);
    
    })

  }

  delete(code:number){
    this.countryService.deleteCountry(code).then(data=>{
      console.log(data);
    })

    this.countries=this.countries.filter((country)=>{
      if(country.code!=code){
        return true;
      }
      else {
        return false;
      }
    })
  }


  openNew() {

    this.submitted = false;
    this.countryDialog = true;
}

hideDialog() {
  this.countryDialog = false;
  this.submitted = false;
}

}
