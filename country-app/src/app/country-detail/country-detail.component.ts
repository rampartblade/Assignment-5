import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input() message={
    country: "",
    capital: "",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "",
  }
  @Input() status = true
  @Output() selectedCountryEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

  onSelect(selectedEvent: string){
    this.selectedCountryEvent.emit(selectedEvent)
  }
}
