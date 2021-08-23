import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../../models/invoice.model';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = [];
  constructor(private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.invoiceService.getInvoice().subscribe(res => {
      this.invoices = res;
    },
      err => {
        console.log(err)
      })
  }
  add() {
    this.router.navigate(['addeditinvoice'])
  }
  edit(id: number) {
    this.router.navigate(['editinvoice'], { queryParams: { id: id } })
  }
  delete(invoice: Invoice) {
    this.invoiceService.delteInvoice(invoice).subscribe(res => {
      this.getInvoices();
    },
      err => {
        console.log(err);
      })
  }
}
