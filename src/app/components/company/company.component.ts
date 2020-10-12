import { Component, OnInit } from '@angular/core';
import { CompanyDto } from '../../dto/company.dto';
import { CompanyService } from '../../providers/company.service';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [MessageService]
})
export class CompanyComponent implements OnInit {



  public companies: CompanyDto[];


  constructor(private CompanyService: CompanyService, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void { this.getCompanyDetails(); }

  getCompanyDetails() {
    this.CompanyService.getCompanyDetails().then(data => {
      this.companies = data
    },
      (err) => {
        console.log("error");

      });
  }


  deleteCompany(code: string) {



    this.CompanyService.deleteCompany(code).then(data =>{
      console.log(`deleted ${Object.entries(data)} successfully`)
    },
      (err) => {
        console.log(`error`);
      });

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company deleted' });

        //function to remove company 
        this.companies = this.companies.filter((company) => {
          if (company.coCode !== code) {
            return true;
          }
          else {
            return false;
          }
        });
    

  }



}
