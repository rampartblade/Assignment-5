import { Component,OnInit } from '@angular/core';
import { Country } from 'src/models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-app';
  loadedFeature = "homepage";
  countryInfo = {
    country: "",
    capital: "",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "",};

  temp: Country[]=[]
  temp2: Country[]=[]
  status: boolean= true
  flag: boolean = true

  switchView(selectedFeature : string){
    this.loadedFeature = selectedFeature;
    //console.log(this.loadedFeature)
  }

  countryDetails(event:Country){
    //this.countryInfo.push(array)
    
    //this.countryInfo = array
    if(this.loadedFeature == 'homepage'){
      this.status= true
      this.countryInfo=event

    }
    else if(this.loadedFeature == 'countries'){
      this.status = false
      this.countryInfo=event
    }
  }

  datas(allcountry:Country[]){
    this.temp = allcountry
  }

  datas2(allcountry:Country[]){
    this.temp2 = allcountry
  }
}
