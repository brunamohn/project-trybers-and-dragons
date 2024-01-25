import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instances = 0;
  private energy: EnergyType = 'mana';

  constructor(name: string) {
    super(name);

    Necromancer.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}

export default Necromancer;