import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Property } from '../interfaces/property';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {


  properties: Property[] = [];


  propertiesSubject = new Subject<Property[]>();


  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }


  saveProperties() {
    firebase.database().ref('/properties').set(this.properties)
  }


  getProperties() {

    firebase.database().ref('/properties').on('value', (data) => {
      this.properties = data.val() ? data.val() : [];
      this.emitProperties();
    });

  }
  
  // crée 
  createProperty(property: Property){
    this.properties.push(property);
    this.saveProperties();
    this.emitProperties();
    
  }

  // supprime
  deleteProperty(index){
    
    this.properties.splice(index, 1);
    this.saveProperties();
    this.emitProperties();
    
    
  }
  
  // modifie
  updateProperty( property: Property , index ){
    // this.properties[index] = property;
    // this.saveProperties();
    // this.emitProperties();

    firebase.database().ref('/properties/'+ index).update(property).catch(
      (error) => {
        console.error(error);
      }
    );
    
  }

  uploadFile(file: File) {
      return new Promise(
        (resolve, reject) => {
          const uniqueId =  Date.now().toString();
          const fileName = uniqueId + file.name;
          const upload = firebase.storage().ref().child('images/properties/' + fileName).put(file);
          upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
              () => {
                console.log('Chargement');
              },
              (error) => {
                console.error(error);
                reject(error);
              },
              () => {
                upload.snapshot.ref.getDownloadURL().then(
                  (downloadUrl) => {
                    resolve(downloadUrl);
                  }
                )
              }
            );
        }
      )
  }
  
  
  isSolded(property) {
    if(property.sold){
      return true;
    } else {
      return false;
    }
  }
  


  // old brouillon

  
}
