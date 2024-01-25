import Race from './Race';

class Elf extends Race {
  readonly maxLifePoints = 99;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}

export default Elf;