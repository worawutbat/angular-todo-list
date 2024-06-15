import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Visit the Grand Canyon'),
    new WishItem('Visit the Great Wall of China', true),
    new WishItem('Visit the Pyramids of Egypt'),
  ]

  listFilter: any = '0';

  newWishText = '';

  title = 'wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);

  };

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  // filterChanged(filter: string) {
  //   switch (filter) {
  //     case '0': this.visibleItems = this.items; break;
  //     case '1': this.visibleItems = this.items.filter(item => !item.isCompleted); break;
  //     case '2': this.visibleItems = this.items.filter(item => item.isCompleted); break;
  //   }
  // }

  toggleItem(item: WishItem) {
    item.isCompleted = !item.isCompleted;
    console.log('toggleItem');
  }
}
