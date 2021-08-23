import { BaseViewModel } from './baseviewmodel.model';

export class Client extends BaseViewModel
{
  name: string="";
  email: string="";
  address: string="";
  phone: string = "";
  dateCreated: Date = new Date();
  dateUpdated: Date = new Date();
  createdById: number=0;
  updatedById: number = 0;
  status: boolean = false;
 
  logo: string="";
}
