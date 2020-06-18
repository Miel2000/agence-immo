import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {


  properties = [
    {
      title: 'Ma superbe maison',
      category: 'Maison',
      sold: true
    },
    {
      title: 'Petit studio',
      category: 'Appartement',
      sold: true
    },
    {
      title: 'Belle villa',
      category: 'Maison',
      sold: false
    },
  ]

  propertiesSubject = new Subject<any[]>();


  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }


  getProperties() {

  // avec une Promise
  // return new Promise(
  //   (resolve, reject) => {

  //     if (this.properties && this.properties.length > 0) {
  //       resolve(this.properties);
  //     } else {
  //       const error = new Error('Properties does not existe or is empty');
  //       reject(error);
  //     }
  //   }
  // );
  // avec un Observable
  //   return new Observable((observer) => {
  //     if (this.properties && this.properties.length > 0) {
  //       observer.next(this.properties);
  //       observer.complete();
  //     } else {
  //     const error = new Error('Properties does not existe or is empty');
  //     observer.error(error)
  //     }
  //   })
  // }

  }
}
