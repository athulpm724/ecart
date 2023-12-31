import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

      // api to access all products collection -get

      getAllProducts(){
        return this.http.get('http://localhost:3000/products')
      }

      //get single product data

      getProduct(id:any){

        return this.http.get('http://localhost:3000/products/'+id)

      }

      //del

      removeProduct(id:any){
        return this.http.delete('http://localhost:3000/products/'+id)
      }


      // add product

      addProduct(bodyData:any){
        return this.http.post('http://localhost:3000/products',bodyData)
      }

      //edit api

      updateProduct(id:any,bodyData:any){
        return this.http.put('http://localhost:3000/products/'+id,bodyData)
      }
}
