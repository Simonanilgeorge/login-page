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
    
  }

}
