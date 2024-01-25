import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static instances = 0;
  private energy: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);

    Ranger.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}

export default Ranger;