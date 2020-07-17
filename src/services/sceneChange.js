import sceneCharacter from '../utils/sceneCharacter';
import sceneLanding from '../utils/sceneLanding';
import sceneLevels from '../utils/sceneLevels';

class SceneChanger {
  constructor(name, active) {
    this.name = name;
    this.active = active;
  }

  async change(name) {
    this.name = name;

    if (this.name === 'character') {
      await sceneLanding();
    }
    if (this.name === 'landing') {
      await sceneCharacter();
    }
    if (this.name === 'levelsOn') {
      await sceneLevels(true);
    }
    if (this.name === 'levelsOff') {
      await sceneLevels(false);
    }
  }
}
export default SceneChanger;
