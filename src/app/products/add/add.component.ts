import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
import { DataService } from '../data.service';
import { Router } from '@angular/router';
  


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // model for add

  addFormModel = this.fb.group({
    id: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    productName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    description: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]+')]],
    price: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    is_available: ['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    image: ['',[Validators.required,Validators.pattern('[A-Za-z0-9:/-_.& ]+')]],
    rating: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    review: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    age: ['',[Validators.required,Validators.pattern('[0-9]+')]]

  })


  constructor(private fb: FormBuilder,private ds:DataService,private rout:Router) { }

  ngOnInit(): void {



  }

  addNewProduct(){
    const path=this.addFormModel.value
    let productData={
      id:path.id,
      productName:path.productName,
      description:path.description,
      price:path.price,
      is_available:path.is_available,
      image:path.image,
      rating:path.rating,
      review:path.review,
      age:path.age

    }

    if(this.addFormModel.valid){
      this.ds.addProduct(productData).subscribe({
        next:(result:any)=>{
          alert("new product added!")
          this.rout.navigateByUrl("")
        }
      })
    }
    else{
      alert("please fill all the inputs correctly")
    }
    
  }

}
