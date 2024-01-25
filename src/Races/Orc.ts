import Race from './Race';

class Orc extends Race {
  readonly maxLifePoints = 74;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;