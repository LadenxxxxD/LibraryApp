import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsService {
  constructor(private httpClient: HttpClient) {}

  public search(date: any) {
    return this.httpClient.get('assets/testJson/getDetails.json', {params: date});
  }
}





