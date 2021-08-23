import { splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../models/client.model';
import { Invoice } from '../../../models/invoice.model';
import { InvoiceItem } from '../../../models/invoiceitem.model';
import { ClientService } from '../../../services/client.service';
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.css']
})
export class AddEditInvoiceComponent implements OnInit {
  clients: Client[] = [];
  invoice = new Invoice();
  oneBorder:boolean=false;
  constructor(private clientService: ClientService, private invoiceService: InvoiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id'] != null && params['id'] != '') {
        this.getInvoiceById(Number(params['id']))
      }
    })
    this.getClients();
  }
  getClients() {
    this.clientService.getClients().subscribe(res => {
      this.clients = res;
    },
      err => {
        console.log(err);
      }
    )
  }
  addItem() {
    this.invoice.invoiceitems.push(new InvoiceItem());
  }
  saveInvoice() {
    console.log(this.invoice.client)
    this.invoiceService.saveInvoice(this.invoice).subscribe(
      res => {
        this.router.navigate(['invoice'])
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(invoiceItems: InvoiceItem) {
   
    if (invoiceItems.id == 0) {
      this.invoice.invoiceitems.splice(invoiceItems.id, 1);
    }
    else{


      // const index = this.invoice.invoiceitems.indexOf(invoiceItems);
      // this.invoice.invoiceitems.splice(index, 1);
      
      
      
      this.invoiceService.deleteInvoiceItem(invoiceItems).subscribe(res=>{
        this.invoice.invoiceitems.forEach((value, index) => {
         
          this.invoice.invoiceitems.splice(index, 1);
     })
      },
      error=>{
        console.log(error)
      })
      
    }
  }
  getInvoiceById(id: number) {
    this.invoiceService.getByInvoiceId(id).subscribe(res => {
      this.invoice = res;
    },
      err => {
        console.log(err);
      }    )
  }
  // validate(valid:any){
  //   var vaidData;
  //   if(valid==="number"){
  //     vaidData={
  //       'oneBorder':false
  //     }
  //   }
  //   else{
  //     vaidData={
  //       'oneBorder':true
  //     }
  //   }
  //   return vaidData;;
  // }
}
