import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ReqResult } from '../models/req-result';


@Injectable({
  providedIn: 'root'
})
export class ExchangesApiService {

  //urlApi:string="https://cdn.dinero.today/api/latest.json";
  urlApi:string = "https://api.frankfurter.app/";
  nationality:string = "currencies";
  lastest:string ="latest?amount=";
  fromDivisa:string = "&from=";
  to:string = "&to=";


  constructor(private http:HttpClient) { }

  getExchanges():Observable<any>{
    return this.http.get<any>(this.urlApi+this.nationality);

  }
  getResultExchanges(amount:any, divisaOne:any, divisaTwo:any):Observable<any>{
    //latest?amount=20&from=GBP&to=USD
    return this.http.get<ReqResult>(this.urlApi+this.lastest+amount
      +this.fromDivisa+divisaOne+this.to+divisaTwo);
      
  }

}
