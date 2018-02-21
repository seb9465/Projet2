import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Word} from "../mockObject/word";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class HttpeReqService {
  private url: string = "http://localhost:3000/grille/requeteTemporaire";
  private constructor(private http: HttpClient) { }

  public getWord(): Observable<Word[] > {

    return this.http.get<Word[]>(this.url);
  }
}