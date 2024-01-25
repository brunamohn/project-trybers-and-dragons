import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static instances = 0;
  private energy: EnergyType = 'mana';

  constructor(name: string) {
    super(name);

    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}

export default Mage;