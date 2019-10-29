import { Injectable } from '@angular/core';
import { iItem } from '../interfaces/iItem';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable()
export class SearchDataServiceService {

  constructor(private http: HttpClient) {
  }

  _searchUrl: string = 'https://api.github.com/search/repositories?q=';
  bookMarkedItems: Array<iItem> = [];


  getSearchByParams(params) {
    return this.http.get(this._searchUrl + params).pipe(
      tap(res => {
        console.log("GET: ", res);
      })
    );
  }

  addBookMarkedItem(item) {
    this.bookMarkedItems.push(item);
  }

  removeBookMarkedItem(item) {
    this.bookMarkedItems
      .splice(this.bookMarkedItems.indexOf(item), 1);
  }

  toogle(item: iItem) {
    item.isChecked = !(item.isChecked);
    item.isChecked
      ? this.addBookMarkedItem(item)
      : this.removeBookMarkedItem(item)
    return item.isChecked;
  }
}
