import { Component } from '@angular/core';
import { TemperatureService } from 'src/app/services/temperature.service';

@Component({
  selector: 'app-convert-units',
  templateUrl: './convert-units.component.html',
  styleUrls: ['./convert-units.component.css']
})
export class ConvertUnitsComponent {
  scalesTemp:string[]=[];
  valueTempFirst:string="";
  valueTempSecond:string="";
  magnitudeValue:string = "1";
  resultValue:string = "";
  valueNull:boolean = true;
  

  constructor(private _serviceTemperaature:TemperatureService){
    this._serviceTemperaature.getScaleTemp().forEach(
      (k, v) =>{
        this.scalesTemp.push(`${v} : ${k}`);
      }
    );
  }
 
  converterTemp(valueFirst:string, valueSecond:string, valueUnits:string){
    if(valueFirst.length > 0 && valueSecond.length > 0){
        this.valueNull = false
        this.resultValue = this._serviceTemperaature.converterTemp(valueFirst.slice(0,2),
        valueSecond.slice(0,2), valueUnits);
      }
    }
    
  

}
