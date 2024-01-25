import Race from './Race';

class Halfling extends Race {
  readonly maxLifePoints = 60;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}

export default Halfling;