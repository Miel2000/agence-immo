import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  properties = [];
  propertiesSubscription: Subscription;


  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {

  // avec un observable
     this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (data: any) => {
        this.properties = data;
      },
    )

    this.propertiesService.emitProperties();
    // avec une Promise()
    // this.propertiesService.getProperties().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.properties = data;
    //   }
    // ).catch(
    //   (error) => {
    //     console.error(error);
    //   }
    // )
    // OU
    // this.properties = this.propertiesService.properties; suffirait, mais ici on fait une requete asynchrone
  }

  getSoldValue(index) {
    if (this.properties[index].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnDestroy() {

     this.propertiesSubscription.unsubscribe();
  }
}
