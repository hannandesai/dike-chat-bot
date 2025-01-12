import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {environment} from '../environments/environment';
@Injectable()
export class AppService {
    constructor(private http: HttpClient) {}

    getData(): any {
        const stream = this.http.post(`${environment.origin}/interviewee/getquestion`, {})
        .map((res: any) => {
            if (res.status < 200 || res.status >= 300) {
                return new Error('Bad status response :' + res.status);
            }
           // const body = res.json();
            return res;
        });
        return stream;
    }
}
