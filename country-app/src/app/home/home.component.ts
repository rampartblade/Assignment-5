import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/models/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @Output() data = new EventEmitter<Country>();   //output sort area
  @Output() data2 = new EventEmitter<Country>();  //output sort populasi
  @Output() selectedCountryDetails = new EventEmitter<string>();

  //countries: Country[]=[]

  countryArea:Country[] = [];
  countryPopulation:Country[] = [];
  
  ngOnInit(): void {

  }

  countryDetails(id:number){ //sort for population
    this.data2.emit(this.countryPopulation[id])
    //console.log(this.sortPopulation[id])
  }

  countryDetails2(id:number){ //sort for area
    this.data.emit(this.countryArea[id]);
    //console.log(this.sortArea[id])
  }

  onSelect(selectedEvent: string){
    this.selectedCountryDetails.emit(selectedEvent)
  }

  sortArea(event:Country[]){
    this.countryArea = event
  }

  sortPopulation(event:Country[]){
    this.countryPopulation = event
  }
}
