import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getRestaurantData() {
    throw new Error('Method not implemented.');
  }
  getAllData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  // Noe Here i will define the POSt, GET, PUT, DELETE, etc
  // Create Restaurant
postRestaurant(data : any){
  return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
    return res;

  }))
}
// Get Restaurant data using get method
getRestaurant(){
  return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
    return res;
  }))
}

// update Restaurant using PUT method
updateRestaurant(data:any , id:number){
  return this.http.put<any>("http://localhost:3000/posts/" +id,data).pipe(map((res:any)=>{
    return res;
  }))

}
// delete Restaurant using DELETE method
deleteRestaurant(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/" +id).pipe(map((res:any)=>{

  return res;
  }))
}

}
