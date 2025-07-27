import { CommonModule } from '@angular/common';
import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ShopService } from '../../../../core/auth/services/shop.service';
declare var $: any;
declare var WOW: any;
import { ToastrService } from 'ngx-toastr';
import { CountUp } from 'countup.js';
@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,CommonModule,TranslateModule],
standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor(private shopService: ShopService,private toastr: ToastrService) {}
  products: any[] = [];
  @ViewChild('counterSection') counterSection!: ElementRef;
  hasAnimated = false;
  ngOnInit(): void {
    this.shopService.getProducts().subscribe({
      next: (res) => {
        this.products = res?.data?.items || [];
      },
      error: (err) => {
        console.error(err);}
    });
  }
  addToCart(product: any) {
    this.shopService.addToCart(product);

    this.toastr.success('Mahsulot savatga qo\'shildi!', 'Muvaffaqiyatli!');

  }
  ngAfterViewInit(): void {
    this.initCarousel();
    setTimeout(() => {
      new WOW().init();
      window.scrollBy(0, 1);
    }, 100);

  }

  private initCarousel(): void {
    if ($('.banner-carousel').length) {
      $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
        smartSpeed: 6000,
        autoplaySpeed: 2000,

        autoplayTimeout: 6000,
        navText: [
          '<span class="flaticon-left-arrow"></span>',
          '<span class="flaticon-right-arrow"></span>'
        ]
      });
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animateCounters();
            this.hasAnimated = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.counterSection.nativeElement);
  }

  animateCounters(): void {
    const stats = [
      { id: 'counter1', endVal: 11 },
      { id: 'counter2', endVal: 15 },
      { id: 'counter3', endVal: 134 },
      { id: 'counter4', endVal: 22 },
      { id: 'counter5', endVal: 250 }
    ];

    stats.forEach(stat => {
      const countUp = new CountUp(stat.id, stat.endVal, { duration: 2.5, separator: ' ' });
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }

  activeTab: string = 'about';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }




}
