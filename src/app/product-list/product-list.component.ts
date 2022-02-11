import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList : any = [];
  LoggedInUser : string = "";
  constructor(private router : Router,private productService : ProductServiceService) { 
  }

  ngOnInit(): void {
    this.productList = this.productService.GetAllProductData();
    this.LoggedInUser = this.productService.getUserName();
  }

  AddNewItem(){
    localStorage.removeItem("ProductId");
    this.router.navigate(['/AddProduct'])
  }
  deleteProduct(item : any){
    this.productService.DeleteProductById(item.Id);
    this.getItems();
  }
  editProduct(item:any){
    this.productService.SetProductId(item.Id);
     this.router.navigate(['/AddProduct']);
  }

  getItems()
  {
    this.productList = this.productService.GetAllProductData();
  }

  Logout()
  {
    this.productService.Refresh();
    this.router.navigate(['/Login']);
  }
}
