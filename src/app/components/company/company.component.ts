import { Component, OnInit } from '@angular/core';
import { CompanyDto } from '../../dto/company.dto';
import { CompanyService } from '../../providers/company.service';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CompanyComponent implements OnInit {

  public companies: CompanyDto[];
  msgs: Message[] = [];

  constructor(private companyService: CompanyService, private messageService: MessageService, private primengConfig: PrimeNGConfig, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getCompanyDetails();
  }


  confirm1(code: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log(`accepted`);
        this.deleteCompany(code);

      },
      reject: () => {
        console.log(`rejected`);
      }
    });
  }

  getCompanyDetails() {
    this.companyService.getCompanyDetails().then(data => {
      this.companies = data
    },
      (err) => {
        console.log("error");
      });
  }
  deleteCompany(code: string) {
    this.companyService.deleteCompany(code).then(data => {
      console.log(`deleted ${Object.entries(data)} successfully`)
      //function to remove company 
      this.companies = this.companies.filter((company) => {
        if (company.coCode !== code) {
          return true;
        }
        else {
          return false;
        }
      });
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company deleted' });
    },
      (err) => {
        console.log(`error`);
      });
  }
}
