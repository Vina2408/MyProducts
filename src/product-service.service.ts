import { Injectable } from '@angular/core';
import { InitialData } from './app/InitalData';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService extends InitialData{

  constructor() { 
    super();
    this.load();
  }

  Refresh()
  {
    this.load();
  }

  GetAllProductData()
  {
     let data = JSON.parse(localStorage.getItem("ProductList"));
     return data;
  }

  GetProductById(id : number){
    let data = JSON.parse(localStorage.getItem("ProductList"));
    if (data.length > 0) 
    {
      const product = data.filter(function(item){
        return item.Id == id;
      });

      return product;
    }
  }
  
  SetProduct(data)
  {
    let dataList = JSON.parse(localStorage.getItem("ProductList"));
    if(dataList != null && dataList.length > 0)
    {   
      data.Id = dataList.length + 1; 
      dataList.push(data);
      console.log(dataList);
      localStorage.setItem("ProductList",JSON.stringify(dataList));    
    }
    else
    {
      let products = [
        { Id : 1, Name :data.Name, Description : data.Description , Price: data.Price , Image : data.Image}];
      localStorage.setItem("ProductList",JSON.stringify(products));      
    }   
  }

  SetProductId(id : any)
  {
    localStorage.removeItem('ProductId');
    localStorage.setItem("ProductId",id);
  }
  GetProductId()
  {
    return localStorage.getItem("ProductId");
  }
  getUserName()
  {
    return localStorage.getItem("UserName");
  }
  SetUserName(Name)
  {
    localStorage.setItem("UserName",Name);
  }
 
  UpdateProduct(data,id){
    let productList = JSON.parse(localStorage.getItem("ProductList"));
    productList[id-1].Name = data.Name;
    productList[id-1].Description = data.Description;
    productList[id-1].Price = data.Price;
    productList[id-1].Image = data.Image;
    localStorage.setItem('ProductList', JSON.stringify(productList));
  }

  DeleteProductById(id : any){
    let data  = [];
    let productList = JSON.parse(localStorage.getItem("ProductList"));
    let filteredData =  productList.filter(del => del.Id != id);
   if (filteredData)
   {
     for( let i=0 ;i< filteredData.length ; i++){
      let json = {
        Id : i+1,
        Name : filteredData[i].Name,
        Description : filteredData[i].Description,
        Price :  filteredData[i].Price,
        Image :  filteredData[i].Image,
      } 
      data.push(json);
      localStorage.setItem('ProductList', JSON.stringify(data));
     }
     localStorage.setItem('ProductList', JSON.stringify(data));
   }
  }
}
