import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getState(): Observable<Object> {
        return this.http.get("http://localhost:3000/getState").map((res: Response) => res.json());
    }

    updateState(data: Object): void {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        this.http.post("http://localhost:3000/updateState", data, options).subscribe(r=>{});
    }

}