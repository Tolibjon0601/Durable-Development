import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ShopService } from '../../../../core/auth/services/shop.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
declare var $: any;
import 'notyf/notyf.min.css';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TranslateModule, CommonModule],
templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  {
}