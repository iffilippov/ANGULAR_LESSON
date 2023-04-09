import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent implements OnInit {

  mockData: any[] = [];

  ngOnInit() {
    this.mockData = new Array(16).fill({
      id: 0,
      title: 'Кот Уголёк',
      price: 20000,      
      imgSrc: 'https://iili.io/HkNtQDb.jpg',
      createdAt: 'Сегодня 14:12',
      address: 'Москва',
    });
  }
//   public readonly state$ = new BehaviorSubject<IPageState<any>>( __value: {
//     isLoading: true,
//     data: [],
//   })

//   public skeletonArr: [] = new Array(arrayLength: 16);

//   public ngOnInit(): {
//     setTimeout(handler: (): => {
//       this.state$.next({
//         isLoading: false,
//         data: new Array(20).fill({
//           id: 0,
//           title: 'Гитара фендер',
//           price: 20000,
//           imgSrc: 'https://placehold.co/600x400',
//           createdAt: 'Сегодня 14:12',
//           address: 'Москва',
//         }),
//       });
//     }, timeoutimport { __values } from 'tslib';
// : 1000);
//   }
}
