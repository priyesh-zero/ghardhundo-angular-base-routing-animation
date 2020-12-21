import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocation (address) {
    return this.http
      .get('https://nominatim.openstreetmap.org/search?format=json&q='+address)
  }
}
