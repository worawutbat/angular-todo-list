import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {
  @Input() wishes: WishItem[] = []
  constructor() { }

  ngOnInit(): void {

  }

  toggleItem(item: WishItem) {
    item.isCompleted = !item.isCompleted;
    console.log('toggleItem');
  }
}
