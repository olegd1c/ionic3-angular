import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ResponeOperators } from '../../models/respone';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
    private apiUrl = 'http://ussd.devapp.in.ua/operators';
    private httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        })
    };

    constructor(public http: HttpClient) {
    }

    getOperators(): Observable<{}> {
        return this.http.get(this.apiUrl, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    private extractData(res: ResponeOperators) {
        let body = res.operators;
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
