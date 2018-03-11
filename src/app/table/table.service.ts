/**
 * @author Pavithra S 
 * @since 2018-03-11
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

const apiPrefix = 'http://54.93.65.40:8888/'

@Injectable()
export class TableService {

  private data: any = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "city": "Chennai",
      "onlineStatus": 1
    },
    {
      "id": 2,
      "firstName": "Krishnamoorthy",
      "lastName": "Chillallamudirangarao",
      "city": "Chennai",
      "onlineStatus": 1
    },
    {
      "id": 3,
      "firstName": "JäöüÄÖÜß",
      "lastName": "D0@",
      "city": "Chennai",
      "onlineStatus": 1
    },
    {
      "id": 4,
      "firstName": "Tim",
      "lastName": "Jones",
      "city": "Chennai",
      "onlineStatus": 0
    },
    {
      "id": 5,
      "firstName": "Arjun",
      "lastName": "Reddy",
      "city": "Mumbai",
      "onlineStatus": 1
    },
    {
      "id": 6,
      "firstName": "Jim",
      "lastName": "Carrey",
      "city": "Chennai",
      "onlineStatus": 0
    },
    {
      "id": 7,
      "firstName": "Arun",
      "lastName": "Anand",
      "city": "Chennai",
      "onlineStatus": 0
    },
    {
      "id": 8,
      "firstName": "Abhay",
      "lastName": "Jodhpurkar",
      "city": "Mumbai",
      "onlineStatus": 1
    },
    {
      "id": 9,
      "firstName": "Zabrina",
      "lastName": "Peters",
      "city": "Bengaluru  ",
      "onlineStatus": 1
    },
    {
      "id": 10,
      "firstName": "Zarine",
      "lastName": "Khan",
      "city": "Mumbai",
      "onlineStatus": 1
    },
    {
      "id": 11,
      "firstName": "Valliammai",
      "lastName": "Thillaiyadi",
      "city": "Chennai",
      "onlineStatus": 0
    },
    {
      "id": 12,
      "firstName": "Swaroop",
      "lastName": "Bhatnagar",
      "city": "Bengaluru",
      "onlineStatus": 0
    },
    {
      "id": 13,
      "firstName": "Yeswanth",
      "lastName": "Shetty",
      "city": "Mumbai",
      "onlineStatus": 1
    },
    {
      "id": 14,
      "firstName": "Zarina",
      "lastName": "Mastani",
      "city": "Bengaluru",
      "onlineStatus": 0
    },
    {
      "id": 15,
      "firstName": "Swaroop",
      "lastName": "Banarjee",
      "city": "Bengaluru",
      "onlineStatus": 0
    },
    {
      "id": 16,
      "firstName": "Yeshwanth",
      "lastName": "Rao",
      "city": "Bengaluru",
      "onlineStatus": 1
    }
  ];
  constructor(private http: Http) { }

  public getAPIData(api: string) {
    // uncommand below codes, If API working fine.

    // let header = this.getHeader();
    // if (header != null) {
    //   let url = apiPrefix + api;
    //   console.info("URL : " + url);
    //   return this.http.get(url, { headers: header }).map(res => {
    //     console.info("res : " + JSON.stringify(res));
    //     if (res.status == 200) {
    //       this.data = { httpStatus: res.status, httpResponse: res.json };
    //       return this.data;
    //     } else {
    //       console.error("Something went wrong...");
    //     }

    //   }).catch((error) => {
    //     console.info("error : " + JSON.stringify(error));
    //     return Observable.throw(error);
    //   });
    // }
    return this.data;
  }

  private getHeader(): any {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', `hello`);
    return headers;
  }
}
