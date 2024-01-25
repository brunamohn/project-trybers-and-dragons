import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static instances = 0;
  private energy: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);

    Warrior.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}

export default Warrior;