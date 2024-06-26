import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

/*Temperature Scales, 
CalculatorPara convertir de ºC a ºF use la fórmula:   ºF = ºC x 1.8 + 32.
Para convertir de ºF a ºC use la fórmula:   ºC = (ºF-32) ÷ 1.8.
Para convertir de K a ºC use la fórmula:   ºC = K – 273.15
Para convertir de ºC a K use la fórmula: K = ºC + 273.15.
Para convertir de ºF a K use la fórmula: K = 5/9 (ºF – 32) + 273.15.
Para convertir de K a ºF use la fórmula:   ºF = 1.8(K – 273.15) + 32.
*/
  constructor() {
    this.mapScaleTemp = new Map<string, string>([
      ["°F", "Fahrenheit"],
      ["°K", "Kelvin"],
      ["°C", "Celsius"],
    ]);
   }

  mapScaleTemp;
  
  getScaleTemp(){
    return this.mapScaleTemp;
  }

  converterTemp(gradeOne:string, gradeTwo:string, magnitude:string):string{
    let F= 0;
    let K= 0;
    let C= 0;
   
   if(magnitude.length > 0){
    const magn= Number(magnitude);
    if((gradeOne == "°F" && gradeTwo == "°C") ||  (gradeOne == "°C" && gradeTwo == "°F")){
      
      if(gradeOne === "°F"){
        C = (magn - 32)*(5/9);
        return C.toFixed(3)+"";
       
      }else{
        F = (magn * 9/5) + 32;
        return F.toFixed(3)+"";
      }
    }
    if((gradeOne == "°F" && gradeTwo == "°K") ||  (gradeOne == "°K" && gradeTwo == "°F")){
      if(gradeOne === "°F"){
        K = (5/9)*(magn-32) + 273.15;
        return K.toFixed(3)+"";
       
      }else{
        F = (1.8*(magn-273.15)) + 32;
        return F.toFixed(3)+"";
      }
    }

    if((gradeOne == "°K" && gradeTwo == "°C") ||  (gradeOne == "°C" && gradeTwo == "°K")){
      if(gradeOne === "°K"){
        C = magn-273.15;
        return C.toFixed(3)+"";
       
      }else{
        K =  magn + 273.15;
        return K.toFixed(3)+"";
      }
    }
    if(gradeOne == gradeTwo){
      return magn + "";
    }
   
    
  }
    
return "Debe ingresar un dato a convertir";
  

}
}
