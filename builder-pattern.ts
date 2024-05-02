import { CharacterType } from './character-enum';

export class Character {

  hp: number;
  damage: number;

  constructor(private type: CharacterType) {
    this.hp = 2000;
    this.damage = 2000;
  }

  displayStats(): void {
    console.log(`HP: ${this.hp}`)
    console.log(`Damage: ${this.damage}`)
    console.log(`Type: ${this.type}`)
  }

}


class CharacterBuilder {
  private character: Character;

  constructor(characterType: CharacterType) {
    this.character = new Character(characterType);
  }

  setHP(hp: number) {
    this.character.hp = hp;
    return this;
  }

  setDamage(damage: number) {
    this.character.damage = damage;
    return this;
  }

  build(): Character {
    return this.character;
  }
}

const supportBuilder = new CharacterBuilder(CharacterType.SUPPORT);
const soraka = supportBuilder
  .setHP(1000)
  .setDamage(40)
  .build();

soraka.displayStats();