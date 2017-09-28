import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()

export class MainService {
    data;
    constructor(private http:Http) {
    }

    getData = (): Observable<Response> => {
        return this.http.get('./assets/data.json').map(res => res.json());
    }
}