import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { converttoSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
    ]),
    SharedModule

  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    converttoSpacesPipe
    
  ]
})
export class ProductModule { }
