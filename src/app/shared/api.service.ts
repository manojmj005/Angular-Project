import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postEmploye(data: any){
    return this.http.post<any>("",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  
  // getEmploye(){
  //   return this.http.get<any>("",data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   })) 
  // }
  
  // updateEmploye(data: any ,id: number){
  //   return this.http.post<any>("",data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))   
  // }
  }
}
