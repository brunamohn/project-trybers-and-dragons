import Race from './Race';

class Dwarf extends Race {
  readonly maxLifePoints = 80;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
}

export default Dwarf;