import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  main_quote: string = 'Patience is a key element of success.';

  quotes: string[] = [
    'If you think your teacher is tough, wait till you get a boss.',
    'Life is not fair — get used to it!',
    'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
    'Be nice to nerds. Chances are you’ll end up working for one.',
  ];

  links: string[] = [
    'https://en.wikipedia.org/wiki/Bill_Gates',
    'https://www.gatesfoundation.org/',
    'https://www.gatesnotes.com/',
    'https://twitter.com/billgates',
  ];

  gates_photo_url: string = 'assets/Bill_Gates.jpeg';

  gates_bio: string =
    'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014. He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.';
}
