
export default class Character {
    constructor(xp) {
      this.stoned = false;
      this.xp = xp;
      this.distance = 2;
    }
  
/*     get getStoned() {
      if (this.stoned) { this.stoned = false }
      else {
        this.stoned = true
      }
    } */

    set Stoned(val) {
      this.stoned = val;
    }

    get getStoned() {
      return this.stoned;
    }
  
    set Attack(enemy) {
      const cofAttack = [1, 0.9, 0.8, 0.7, 0.6];
      const dist = cofAttack[this.distance - 1];
      if (this.stoned) {
        enemy.xp = enemy.xp - ((100 * dist) - Math.log2(this.distance) * 5)
      } else {
        enemy.xp = enemy.xp - (100 * dist);
      }
    }

    get Attack() {
      return 'Дистанция атаки: ' + this.distance;
    }

  }
  