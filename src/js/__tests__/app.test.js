import Character from '../app';

test('attack test', () => {
    class Magician extends Character {
        constructor() {
          super(100);
        }
    }
    
    class Daemon extends Character {
        constructor() {
          super(1000);
        }
    }

    const magician = new Magician();
    const daemon = new Daemon();

    magician.Attack= daemon;
    const result1 = daemon.xp;

    expect(magician.getStoned).toBe(false);
    magician.Stoned = true;
    expect(magician.getStoned).toBe(true);


    magician.Attack= daemon;
    const result2 = daemon.xp;
    
    

  expect(result1).toBe(910);
  expect(result2).toBe(825);
  expect(magician.Attack).toBe('Дистанция атаки: 2');
});