import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

<<<<<<< HEAD
  albumInfo;

  constructor(private _productService: ProductService)  { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      response => this.albumInfo = response,
          );
=======
  constructor() { }

  ngOnInit() {
>>>>>>> parent of 639cd0f... step 3
  }

}
