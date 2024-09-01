
export default class Character {
    constructor(xp) {
      this._stoned = false;
      this.xp = xp;
      this.distance = 2;
    }
  
/*     get getStoned() {
      if (this.stoned) { this._stoned = false }
      else {
        this._stoned = true
      }
    } */

    set stoned(val) {
      this._stoned = val;
    }

    get stoned() {
      return this._stoned;
    }
  
    set attack(enemy) {
      const cofAttack = [1, 0.9, 0.8, 0.7, 0.6];
      const dist = cofAttack[this.distance - 1];
      if (this._stoned) {
        enemy.xp = enemy.xp - ((100 * dist) - Math.log2(this.distance) * 5)
      } else {
        enemy.xp = enemy.xp - (100 * dist);
      }
    }

    get attack() {
      return 'Дистанция атаки: ' + this.distance;
    }

  }
  