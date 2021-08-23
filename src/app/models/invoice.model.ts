
import { BaseViewModel } from './baseviewmodel.model';
import { Client } from './client.model';
import { InvoiceItem } from './invoiceitem.model';

export class Invoice {
  constructor() {
   
    this.invoiceitems = [];
  }
  id: number = 0;
  invoiceNumber: number=0;
  clientId: number=0;
  invoiceitems: InvoiceItem[];
  client: Client|any;

}
