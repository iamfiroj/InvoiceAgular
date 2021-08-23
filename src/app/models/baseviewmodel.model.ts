import { environment } from '../../environments/environment';

export class BaseViewModel {

  constructor() {
    this.clientAppBaseUrl = environment.clientapiport;
  }

  id: number = 0;
  clientAppBaseUrl: string;
  createdById: number = 0;
  updatedById: number = 0;
  organizationId: number = 0;
  dateCreated: Date = new Date();
  dateUpdated: Date = new Date();
}
