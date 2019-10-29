import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchDataServiceService } from '../services/search-data-service.service';
import { iItem } from '../interfaces/iItem';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{

  items: Array<iItem> = [];
  searchStringList: Array<string> = [];

  constructor(
    private searchService: SearchDataServiceService) {
  }

  ngOnInit() {
    this.items = [...this.searchService.bookMarkedItems];
  }

  
  bookMark(item: iItem) {
    return this.searchService.toogle(item);
  }
}
