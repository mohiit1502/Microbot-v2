import { Injectable } from '@angular/core';
import { HelperServiceService } from '../helpers/helper-service.service.js';
import { DomOpsService } from '../dom/dom-ops.service.js';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Card } from 'src/app/components/l2/content/primary-container/cards/card/card.model.js';

import * as $ from 'node_modules/jquery/dist/jquery';

@Injectable({
    providedIn: 'root'
})
export class PersistenceOpsService {

    responses: Observable<{responses: Card[]}>;

    constructor(private helper: HelperServiceService, private dom: DomOpsService, private store: Store<{ioHistory: {responses: Card[]}}>) { }

    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname} =${cvalue};${expires};path=/`;
    }

    getCookie(cname) {
        const name = `${cname}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}


