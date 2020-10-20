import { Component, OnInit } from '@angular/core';
import { CompanyDto, Currency, Language } from '../../../dto/company.dto';
import { CompanyService } from '../../../providers/company.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css'],
  providers: [MessageService]
})
export class AddOrUpdateComponent implements OnInit {

  public company: CompanyDto = new CompanyDto();
  updateMandatory: boolean = true;
  addMandatory: boolean = true;
  updatable: boolean = false;
  language: Language[] = [
    { value: null, label: null },
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    { value: "ar", label: "Arabic" },
    { value: "ml", label: "Malayalam" }

  ];
  currency: Currency[] = [
    { value: null, label: null },
    { value: "OMR", label: "Omani rial" },
    { value: "USD", label: "United States Dollar" },
    { value: "EUR", label: "Euro" },
    { value: "INR", label: "Indian Rupee" },
  ];
  constructor(private location: Location, private companyService: CompanyService, private route: ActivatedRoute, private datePipe: DatePipe, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getSingleCompany();
  }
  getSingleCompany() {
    const id = this.route.snapshot.paramMap.get('coCode');
    console.log(`the id to be updated is ${id}`)
    if (id !== null) {
      this.updatable = true;
      this.companyService.getSingleCompany(id).then(data => {
        console.log(data)
        data.modiCloseDate = new Date(this.datePipe.transform(data.modiCloseDate, 'yyyy-MM-dd'));
        if (data.yrSDt) { data.yrSDt = new Date(this.datePipe.transform(data.yrSDt, 'yyyy-MM-dd')); }
        if (data.yrEDt) { data.yrEDt = new Date(this.datePipe.transform(data.yrEDt, 'yyyy-MM-dd')); }
        this.company = data;
      },
        (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error' });
          console.log(`error`);
        })
    }
    else return;
  }
  //function to add or update companies
  addOrUpdateCompany() {
    console.log(this.company.baseCurCode);
    //update company function
    if (this.updatable) {
      console.log(`the company to be updated is `)
      console.log(this.company.coCode);
      if (!this.company.coCode || this.company.coCode == null || !this.company.coCode.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company code' });
        return;
      }
      if (!this.company.coName || this.company.coName == null || !this.company.coName.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company name' });
        return;
      }
      if (!this.company.coShName || this.company.coShName == null || !this.company.coShName.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company short name' });
        return;
      }
      if (this.company.modiCloseDate == null) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company Modification close date' });
        return;
      }
      if (!this.company.moduleType || this.company.moduleType == null || !this.company.moduleType.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the module type' });
        return;
      }
      if (this.company.yrSDt) { this.company.yrSDt = new Date(this.datePipe.transform(this.company.yrSDt, 'yyyy-MM-dd')); }
      if (this.company.yrEDt) { this.company.yrEDt = new Date(this.datePipe.transform(this.company.yrEDt, 'yyyy-MM-dd')); }
      this.company.modiCloseDate = new Date(this.datePipe.transform(this.company.modiCloseDate, 'yyyy-MM-dd'));
      this.companyService.updateCompany(this.company.coCode, this.company).then(data => {
        console.log(`the upadted company is`)
        console.log(Object.entries(data));
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company Updated' });
      },
        (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error' });
          console.log(`error`);
        })
      this.reset();
      setTimeout(() => {
        this.location.back();
      }, 2000)

    }

    else {
      if (!this.company.coCode || this.company.coCode == null || !this.company.coCode.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company code' });
        return;
      }
      if (!this.company.coName || this.company.coName == null || !this.company.coName.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company name' });
        return;
      }
      if (!this.company.coShName || this.company.coShName == null || !this.company.coShName.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company short name' });
        return;
      }
      if (this.company.modiCloseDate == null) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the company Modification close date' });
        return;
      }
      if (!this.company.moduleType || this.company.moduleType == null || !this.company.moduleType.trim()) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Enter the module type' });
        return;
      }
      if (this.company.yrSDt) { this.company.yrSDt = new Date(this.datePipe.transform(this.company.yrSDt, 'yyyy-MM-dd')); }
      if (this.company.yrEDt) { this.company.yrEDt = new Date(this.datePipe.transform(this.company.yrEDt, 'yyyy-MM-dd')); }
      this.company.modiCloseDate = new Date(this.datePipe.transform(this.company.modiCloseDate, 'yyyy-MM-dd'));

      this.companyService.addNewCompany(this.company).then(data => {
        console.log(`added country`);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company added' });
        console.log(Object.entries(data));
      },
        (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error' });

          console.log(`error`);
        });
    }
  }
  reset() {
    this.company.coCode = null;
    this.company.coName = null;
    this.company.coShName = null;
    this.company.modiCloseDate = null;
    this.company.moduleType = null;
    this.company.primaryLangauge = null;
    this.company.secondryLangauge = null;
    this.company.add1 = null;
    this.company.add2 = null;
    this.company.add3 = null
    this.company.baseCurCode = null;
    this.company.email = null;
    this.company.website = null;
    this.company.yrSDt = null;
    this.company.yrEDt = null;
    }
}
