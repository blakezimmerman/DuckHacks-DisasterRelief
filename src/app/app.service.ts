import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getState(): void {
        
    }

    updateState(): void {

    }

}