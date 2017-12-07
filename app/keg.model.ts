export class Keg {
  constructor(public name: string, public type: string, public price: number, public alcoholContent: number, public pints: number = 124) {

  }

  sellPint() {
    if (this.pints > 10) {
      this.pints --;
    } else {
      alert("You need more beer");
      this.pints --;
    }
  }

  sellGrowler() {
    if (this.pints > 10) {
      this.pints -= 2;
    } else {
      alert("You need more beer");
      this.pints -= 2;
    }
  }

  sellLarge() {
    if (this.pints > 10) {
      this.pints -= 4;
    } else {
      alert("You need more beer");
      this.pints -= 4;
    }
  }
}
