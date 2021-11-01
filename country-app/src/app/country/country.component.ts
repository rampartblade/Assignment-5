import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
//import { count } from 'console';
import { Country } from 'src/models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Output() selectedCountryDetails = new EventEmitter<string>();
  @Output() data = new EventEmitter<Country>();
  @Output() sortAreaEvent = new EventEmitter<Country[]>();
  @Output() sortPopulationEvent = new EventEmitter<Country[]>();
  @Input() status = false

  
  countries: Country[]= [];
  result: Country[]=[]
  result2: Country[]=[]
  //temp ="";
  
  sortArray(){
    //this.result = this.countries.sort((a,b)=> a.area - b.area);
    this.result = this.countries.sort((a,b) =>  {if (a.area < 0) {return -1; } if (b.area <0 ) {return 1;} return b.area - a.area });
    var newResult = this.result.slice(0,3)
    //this.result = newResult
    this.sortAreaEvent.emit(newResult)

    //this.result2 = this.countries.sort((a,b) => a.population - b.population);
    this.result2 = this.countries.sort((a,b) =>  {if (a.population < 0) {return -1; } if (b.population < 0 ) {return 1;} return b.population - a.population });
    //console.log(this.result2)
    var newresult2 = this.result2.slice(0,3)
    //this.result2 = newresult2
    this.sortPopulationEvent.emit(newresult2)

    //this.countries.sort((a,b) => a.gdp - b.gdp);
    this.countries.sort((a,b) =>  {if (a.gdp < 0) {return -1; } if (b.gdp < 0 ) {return 1;} return b.gdp - a.gdp });
  }
  constructor() { }

  ngOnInit(): void {
    this.countries= [
      {
        country: "United States",
        capital: "Washington, D.C.",
        area: 9525067,
        population: 325365189,
        gdp: 18569100,
        currency: "United States Dollar",      
      },
      {
        country: "China",
        capital: "Beijing",
        area: 9596961,
        population: 1403500365,
        gdp: 11199145,
        currency: "Chinese Yuan",
      },      
      {
        country: "Japan",
        capital: "Tokyo",
        area: 377975,
        population: 125360000,
        gdp: 4939384,
        currency: "Japanese Yen",
      },
      {
        country: "Russia",
        capital: "Moscow",
        area: 17098246,
        population: 146171015,
        gdp: 1283162,
        currency: "Russian ruble",
      },
      {
        country: "Canada",
        capital: "Ottawa",
        area: 9984670,
        population: 38246108,
        gdp: 1529760,
        currency: "Canadian dollar",       
      }
    ]
    //this.data.emit(this.countries[0]);
    this.sortArray()
  }

  countryDetails(id:number){
    this.data.emit(this.countries[id]);
    //this.selectedCountryDetails.emit(id);
    //console.log(id)
    //console.log(this.countries[id])
  }

  onSelect(selectedEvent: string){
    this.selectedCountryDetails.emit(selectedEvent)
  }
}
