import sceneCharacter from '../utils/sceneCharacter';
import sceneLanding from '../utils/sceneLanding';

class SceneChanger {
  constructor(name, active) {
    this.name = name;
    this.active = active;
  }

  change(name) {
    this.name = name;

    if (this.name === 'character') {
      sceneLanding();
    }
    if (this.name === 'landing') {
      sceneCharacter();
    }
  }
}
export default SceneChanger;
