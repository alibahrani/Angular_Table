import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProdcutService } from './product.service';
@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string; 
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.preformFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    toggleImage():void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.products = this.prodcutService.getProducts();
        this.filteredProducts = this.products;
    }

    constructor(private prodcutService: ProdcutService) {

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message
    }

    preformFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) != -1)
    }


}