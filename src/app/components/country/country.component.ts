import { Component, OnInit } from '@angular/core';
import { CountryDto } from '../../dto/country.dto';
import { CountryService } from '../../providers/country.service';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CountryComponent implements OnInit {

  msgs: Message[] = [];
  countryDialog: boolean;
  submitted: boolean;
  public countries: CountryDto[] = [];
  public country: CountryDto = new CountryDto();
  clonedProducts: { [s: string]: CountryDto; } = {};

  constructor(private countryService: CountryService, private messageService: MessageService, private primengConfig: PrimeNGConfig, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getCountries();
  }

  confirm1(code: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(code);
        console.log(`accepted`);
      },
      reject: () => {
        console.log(`rejected`);
      }
    });
  }

  getCountries() {
    this.countryService.getCountries().then(data => {
      this.countries = data;
      console.log(data);
    })
  }

  add() {
    this.countryService.addCountry(this.country).then(data => {
      console.log(data);
      this.countries.push(data);
    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Country Added' });
    this.hideDialog()
    this.reset();
  }

  delete(code: number) {
    this.countryService.deleteCountry(code).then(data => {
      console.log(data);

      this.countries = this.countries.filter((country) => {
        if (country.code != code) {
          return true;
        }
        else {
          return false;
        }
      })
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Country Deleted' });
    }, (err) => {
      console.log(`error`);
    })
  }

  update(code: number, name: string, alpha2Code: string, alpha3Code: string) {
    this.country.name = name;
    this.country.alpha2Code = alpha2Code;
    this.country.alpha3Code = alpha3Code;
    console.log(`country to be updated is ${code}`);
    console.log(`the country to be updated is ${JSON.stringify(this.country)}`)
    this.countryService.updateCountry(this.country, code).then(data => {
      console.log(`updated data is ${JSON.stringify(data)}`);
    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Country Updated' });
  }

  openNew() {
    this.submitted = false;
    this.countryDialog = true;
  }

  hideDialog() {
    this.countryDialog = false;
    this.submitted = false;
  }

  log() {
    console.log(`test`);
  }

  reset() {
    this.country = new CountryDto();
  }
}
