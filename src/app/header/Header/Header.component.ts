import { Component, OnInit} from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';


@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent{
  constructor(private dataStorageService: DataStorageService){}

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
