import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  ActionType : string = "Add New"
  ProductId : any;
  productDate : any;
  id: number = 0;
  dataForm: FormGroup;
  productList : any = [];
  EnableSaveButton = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private  productService : ProductServiceService
    ) { 

      this.dataForm = this.fb.group({
        Name: ['', [Validators.required]],
        Description: ['', [Validators.required]],         
        Price: ['', [Validators.required]],
        Image: [null, []]        
      });

    }

  ngOnInit(): void {

    this.ProductId = this.productService.GetProductId();
    if (this.ProductId != null && this.ProductId != undefined)
    {
      this.ActionType = "Update ";
      let productData = this.productService.GetProductById(this.ProductId);
      if (productData)
      {
        let bindData =  {
          Name : productData[0].Name,
          Description : productData[0].Description,
          Price : productData[0].Price,
          Image : productData[0].Image,
        }
        this.dataForm.setValue(bindData);
      }      
    }
  }
  save()
  {
    if (this.ProductId != null && this.ProductId != undefined)
     {
      let updateData = this.dataForm.value;
      this.productService.UpdateProduct(updateData,this.ProductId)
      alert("Updated Successfully");      
     }
     else
     {      
      let addData = this.dataForm.value;
      this.productService.SetProduct(addData);
      alert("Saved Successfully");
     }
    this.router.navigate(['/Dashboard']);
  }

  Reset()
  {
    this.dataForm.reset();
  }
}
