import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit{
  allProducts:any=[]
  categoryProducts:any=[]

  constructor(private ds:DataService){}

  ngOnInit():void{    

    this.ds.getAllProducts().subscribe({
      next:(result:any)=>{
        this.allProducts=result
        console.log(this.allProducts); 
      }
    })

  }

  // rest is in class 3/10/2023

  categoryProduct(catId:any){
    this.allProducts.filter((item:any)=>{
      item["categoryId"]==catId
    })
    // console.log(this.categoryProduct);
    
  }

}
