import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReqResult } from 'src/app/models/req-result';
import { ExchangesApiService } from 'src/app/services/exchanges-api.service';

@Component({
  selector: 'app-convert-divisas',
  templateUrl: './convert-divisas.component.html',
  styleUrls: ['./convert-divisas.component.css']
})
export class ConvertDivisasComponent implements OnDestroy {
  private exchangesSubscription: Subscription; // Para guardar la suscripción

  imgDollars: boolean = false;
  divisaElement: any = "";
  divisas: any[] = [];
  mapDivisas: any = new Map();
  amount: string = "1";
  valueOne: string = "";
  valueTwo: string = "";
  divisaOne: string = "";
  divisaTwo: string = "";
  resultObj$!: Observable<ReqResult>;

  constructor(private _serviceApi: ExchangesApiService) {
    this.exchangesSubscription = this._serviceApi.getExchanges().subscribe(
      resp => {
        Object.entries(resp).forEach(([key, value]) => {
          this.divisas.push(key + ": " + value);
          this.mapDivisas.set(key, value);
        });
      },
      error => {
        console.error('Error al obtener intercambios:', error);
        // Aquí puedes manejar errores si es necesario
      }
    );
  }

  ngOnDestroy() {
    // Asegúrate de desuscribirte para evitar fugas de memoria
    if (this.exchangesSubscription) {
      this.exchangesSubscription.unsubscribe();
    }
  }
  //devuelve el valor de la conversion, del objeto rates
  getCurrencyKeys(rates: { [key: string]: number }): string[] {
    return Object.keys(rates);
  }
  onSelect(amount: string, selectOptionOne: string, selectOptionTwo: string) {
    let amountSelect = Number(amount);
    if(amount == "0"){
      amountSelect = 0;
    }
    if (amountSelect === 0) {
      alert('Debes ingresar una cantidad!');
      return;
    }
    if (selectOptionOne.length > 0 && selectOptionTwo.length > 0 && amount.length > 0) {
      this.divisaOne = selectOptionOne.slice(0, 3);
      this.divisaTwo = selectOptionTwo.slice(0, 3);
      if (this.divisaOne === this.divisaTwo) {
        alert("Oops! Elegiste la mismas monedas!");
      } else {
        this.resultObj$ = this._serviceApi.getResultExchanges(amountSelect, this.divisaOne,
           this.divisaTwo);
        this.resultObj$.subscribe(
          res => {
            
            console.log(res);
          },
          error => {
            console.error('Error al obtener resultados:', error);
            
          }
        );
      }
    }
  }
}
