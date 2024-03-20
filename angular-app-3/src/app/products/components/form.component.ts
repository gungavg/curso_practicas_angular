import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() product : Product= {
    id:0,
    name:'',
    description:'',
    price:0

  };
  @Output() newProductEvent = new EventEmitter();

  onSubmit(productForm: NgForm): void {
    if (productForm.valid) {
      this.newProductEvent.emit(this.product);
      console.log(this.product);
    }
    productForm.reset();
    productForm.resetForm();

  }
}
