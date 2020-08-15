import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iWishlistItem } from '../wish-item.interface'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  item: iWishlistItem
  @Output() addItemEmitter = new EventEmitter<iWishlistItem>();
  constructor() { 
    this.wishlistItem = {} as iWishlistItem;
  }
  ngOnInit(): void {
  }
  addItem() {
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors })
    this,item = {} as iWishlistItem;
  }

}
