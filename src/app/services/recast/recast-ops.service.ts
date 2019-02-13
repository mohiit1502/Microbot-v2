import { Injectable } from '@angular/core';
import * as $config from "../../configuration/config";

@Injectable({
  providedIn: 'root'
})
export class RecastOpsService {
  recastToken: string = $config.recasttoken;
  requestUrl: string = "https://api.recast.ai/v2/request";
  // store: any = PersistenceOpsService.store;
  
  constructor() {}

  getRecastResponse(command: string, text: {}) {
    const url = `${this.requestUrl}?text=${command}`;
    let requestInit: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Token ${this.recastToken}`,
      },
      data: text,
    }
    return new Promise<any>((resolve, reject) => {
      fetch(url, requestInit)
        .then((response) => {
          resolve(response.json());
        })
        .catch((error) => {
          // console.error("Fetch Error =\n", error);
          reject(error.json())
        });
      // resolve({results: {intents: [{slug: 'createrepo', confidence: 0.7}]}});
    });
  
  }
}