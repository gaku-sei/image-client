export default class HomeCtrl {
  static SID = 'home';

  foo: string;
  rand: number;

  constructor() {
    this.foo = 'Bonjour!';
    this.rand = ~~(Math.random() * 100);
  }
}
