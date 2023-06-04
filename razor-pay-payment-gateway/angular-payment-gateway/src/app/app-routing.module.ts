import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentFailedComponent } from './paymentFailed/paymentFailed.component';
import { PaymentSuccessComponent } from './paymentSuccess/paymentSuccess.component';

const routes: Routes = [
  { path: 'checkout/:paymentOrderId', component: CheckoutComponent },
  { path: 'paymentfailed', component: PaymentFailedComponent },
  { path: 'paymentsuccess', component: PaymentSuccessComponent },
  { path: '', component: ProductListComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
