import { BaseViewModel } from './baseviewmodel.model';

export class InvoiceItem extends BaseViewModel {
  text: string="";
  quantity: number = 0;
  amount: any;
}
