import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
declare const ymaps: any;

@Component({
  selector: 'app-branches',
  imports: [TranslateModule,CommonModule],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent implements OnInit{
  branch = {
    name: 'Durable Development MChJ',
    address: 'Mirobod tumani, Mironshoh 6-boshiberk ko’cha, 18/141-uy ',
    coords: [41.286830, 69.272703]
  };

  map: any;

  ngOnInit(): void {
    if ((window as any).ymaps) {
      (window as any).ymaps.ready(() => {
        this.initMap();
      });
    } else {
      console.error('Yandex Maps script not loaded!');
    }
  }

  initMap() {
    this.map = new ymaps.Map('yandex-map', {
      center: this.branch.coords,
      zoom: 14,
      controls: ['zoomControl'],
    });

    const placemark = new ymaps.Placemark(this.branch.coords, {
      balloonContentHeader: this.branch.name,
      balloonContentBody: this.branch.address
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/images/icon/pin_7695812.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40]
    });

    this.map.geoObjects.add(placemark);
  }

}
