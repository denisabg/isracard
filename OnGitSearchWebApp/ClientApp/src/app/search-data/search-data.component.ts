import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { iItem } from '../interfaces/iItem';
import { SearchDataServiceService } from '../services/search-data-service.service';


@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnDestroy {

  subscription: Subscription = new Subscription();
  items: iItem[] = [];

  searchStringList: Array<string> = [];

  constructor(
    private searchService: SearchDataServiceService) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  searchBy(searchString: string) {

    if (searchString) {

      this.searchStringList.push(searchString);

      this.subscription =
        this.searchService.getSearchByParams(searchString)
          .subscribe(
            data => {

              let itemsList = JSON.parse(JSON.stringify(data)).items;
              this.items = [];

              for (let item in JSON.parse(JSON.stringify(itemsList))) {

                let obj = itemsList[item];

                let itemMap: iItem = {
                  id: obj.id,
                  repositorytName: obj.name,
                  avatarUrl: obj.owner.avatar_url,
                  isChecked: false
                }
                this.items.push(itemMap);
              }              
            });
    }
    //console.log("responsed", this.items);
  }

  bookMark(item: iItem) {
    return this.searchService.toogle(item);
  }

}
