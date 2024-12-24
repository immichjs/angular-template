import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  public size = input(4);
  public color = input();
  public sizeClass = computed(() => `${this.size()}rem`);
  public colorClass = computed(() => this.color());
}
