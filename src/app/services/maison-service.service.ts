import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Maison} from "../Model/maison.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MaisonServiceService {

   host=environment.host;
  constructor(private httpClient:HttpClient) { }

  // Affiche la liste des maison
  getListMaisons(page:number,size:number):Observable<any>
  {
    return this.httpClient.get<any>(this.host+"maisons?page="+page+"&size="+size);
  }

  //Fait la recherche des maisons en fonction du mot clé
  searchMaisons(mc:string,page:number,size:number):Observable<any>
  {
    return this.httpClient.get<any>(this.host+"maisons/search/byOwnerPage?mc=" + mc + "&page=" + page + "&size=" + size);
  }

  //Enregistre une maison
  saveRessource(url:string,data:any):Observable<Maison>
  {
    return this.httpClient.post<Maison>(url,data);
  }

  //Retourne une ressource
  getRessource(url:string):Observable<any>{
    return this.httpClient.get(url);
  }

  //Retourne une ressource
  updateRessource(url:string,data:any):Observable<any>{
    return this.httpClient.put(url,data);
  }

  //Retourne une ressource
  deleteRessource(url:string):Observable<void>{
    return this.httpClient.delete<void>(url);
  }

}
