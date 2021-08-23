 import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly _saveClient: string = "api/Client/Save";
  private readonly _getClients: string = "api/Client/Get";
  private readonly _deleteClients: string = "api/Client/Delete";
  private readonly _getByClientId: string ="api/Client/GetByClientId"
  constructor(private endPoint: EndpointService) { }
  saveClient(obj: Client) {
    return this.endPoint.addupdate<Client>(obj, this._saveClient);
  }
  getClients() {
    return this.endPoint.get<Client[]>(this._getClients);
  }
  deleteClient(obj: Client) {
    return this.endPoint.addupdate<Client>(obj, this._deleteClients);
  }
  getByClientId(id: number) {
    const url = this._getByClientId + "?id=" + id;
    return this.endPoint.get<Client>(url);
  }
      
}
