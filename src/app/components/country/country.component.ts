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


  update(code:number,name:string,alpha2Code:string,alpha3Code:string){
    this.country.name=name;
    this.country.alpha2Code=alpha2Code;
    this.country.alpha3Code=alpha3Code;
    console.log(`country to be updated is ${code}`);
    console.log(`the country to be updated is ${JSON.stringify(this.country)}`)
    this.countryService.updateCountry(this.country,code).then(data=>{
      console.log(`updated data is ${JSON.stringify(data)}`);
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


log(){
  console.log(`test`);
}
}
