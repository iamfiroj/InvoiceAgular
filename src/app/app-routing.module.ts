import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './components/client/add-edit/add-edit.component';
import { ClientComponent } from './components/client/client.component';
import { AddEditInvoiceComponent } from './components/invoice/add-edit-invoice/add-edit-invoice.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { LayoutcomponentsComponent } from './components/layoutcomponents/layoutcomponents.component';

const routes: Routes = [
   {
    path: "", component: LayoutcomponentsComponent,
    children: [
      { path: "clients", component: ClientComponent, data: { title: "client" } },
      { path: "addedit", component: AddEditComponent, data: { title: "addedit" } },
      { path: "edit", component: AddEditComponent, data: { title: "edit" } },
      { path: "addeditinvoice", component: AddEditInvoiceComponent, data: { title: "addeditinvoice" } },
      { path: "editinvoice", component: AddEditInvoiceComponent, data: { title: "addeditinvoice" } },
      { path: "invoice", component: InvoiceComponent, data: { title: "invoice" } }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
