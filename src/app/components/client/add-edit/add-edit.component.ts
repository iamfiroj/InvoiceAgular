import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../models/client.model';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  client = new Client();
  // names:any[]=["Ram","Sham","Naiam","Firoj","Sham khan"];
  // data(){
  //   for(var item of this.names){
  //     if(item==="Ram"){
  //       console.log(item)
  //     }
  //   }
  //   var d=this.names.find(x=>x=="Sham")
  //   return console.log(d);
  // }

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.data();
    this.route.queryParams.subscribe(params => {
      if (params['id'] != null && params['id'] != '') {
        this.getByClientId(Number(params['id']))
      }
    })
  }
  saveClient(form?:any) {
    this.clientService.saveClient(this.client).subscribe(res => {
      this.router.navigate(['clients'])
    },
      err => {
        console.log(err)
      }
    )
  }
  getByClientId(id: number) {
    this.clientService.getByClientId(id).subscribe(res => {
      this.client = res;
    },
      err => {
        console.log(err);
      })
  }
  
}
