import { Component, OnInit } from '@angular/core';
import { iWishlistItem } from '../wish-item.interface'

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
  items: Array<iWishlistItem> = []
  constructor() { }

  ngOnInit(): void {
  }
  updateItemHandler(item: iWishlistItem) {
    this.items.push(item)
  }
}
