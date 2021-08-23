import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
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
  delete(client: Client) {
    
    this.clientService.deleteClient(client).subscribe(res => {
      this.getClients();
    },
      err => {
        console.log(err);
      }
    )
  }
  edit(id: any) {
    this.router.navigate(['edit'], { queryParams: { id: id } })
  }
}
