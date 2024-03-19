import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private products:Product[]=[
 {
    id:1,
  name:'Mesa de comedor ',
  description: ';esa en excelen5te estado', 
  price:700
 },
];

constructor(){}
}
