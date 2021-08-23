import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';
import { InvoiceItem } from '../models/invoiceitem.model';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private readonly _saveInvoice: string = "api/Invoice/SaveInvoice";
  private readonly _getInvoice: string = "api/Invoice/GetInvoice";
  private readonly _deleteInvoice: string = "api/Invoice/DeleteInvoice";
  private readonly _getInvoiceById: string = "api/Invoice/GetByInvoiceId";
  private readonly _deleteInvoieItem: string = "api/Invoice/DeleteInvoiceItems";
  
  constructor(private endPoint: EndpointService) { }
  saveInvoice(obj: Invoice) {
    return this.endPoint.addupdate<Invoice>(obj, this._saveInvoice);
  }
  getInvoice() {
    return this.endPoint.get<Invoice[]>(this._getInvoice);
  }
  delteInvoice(obj: Invoice) {
    return this.endPoint.addupdate<Invoice>(obj, this._deleteInvoice);
  }
  deleteInvoiceItem(invoiceItem:InvoiceItem){
    return this.endPoint.addupdate<InvoiceItem>(invoiceItem,this._deleteInvoieItem);
  }
  getByInvoiceId(id: number) {
    const url = this._getInvoiceById + "?id=" + id;
    return this.endPoint.get<Invoice>(url);
  }
}
