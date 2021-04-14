import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Calculation } from './calculationModel';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private http: HttpClient) { }

  calculateRequest(operator: string, num1: any, num2: any) {
    let params = new HttpParams();
    params = params.append('num1', num1);
    params = params.append('num2', num2);
    params = params.append('operator',operator)

    return this.http.get("http://localhost:8080/calc/" , { params: params });
  }

  getHistory() {
    return this.http.get<Calculation[]>("http://localhost:8080/getHistory");
  }
}
