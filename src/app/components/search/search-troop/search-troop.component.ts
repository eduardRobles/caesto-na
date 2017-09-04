import { Component, OnInit } from '@angular/core';
import {TroopService} from '../../../shared/troop.service'
import {RacesService} from '../../../shared/races.service'
import {TypesService} from '../../../shared/types.service'

@Component({
  selector: 'search-troop',
  templateUrl: './search-troop.component.html',
  styleUrls: ['./search-troop.component.css']
})
export class SearchTroopComponent implements OnInit {
  private advancedSearch:boolean=false;
  constructor(private troopService: TroopService,private racesService: RacesService, private typesService: TypesService) { }

  ngOnInit() {
    this.troopService.getTroopList();
  }
  toggleAvancedSearch(){
    this.advancedSearch = !this.advancedSearch;
    if (!this.advancedSearch){
      this.troopService.clearFilter();
    }
  }
}
