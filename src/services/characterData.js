import axios from 'axios';

// // 'https://www.dnd5eapi.co/api/features/favored-enemy-1-type'
// //'https://www.dnd5eapi.co/api/classes/'

class CharacterData {
  async fetchData(url, character) {
    this.characterName = character.toLowerCase();

    const fetchingData = async () => {
      try {
        const response = await axios.get(url + this.characterName);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };
    this.data = await fetchingData();
    this.proficiences = await this.data.proficiencies;
    this.stats = await this.data.saving_throws;
    this.hitPoint = await this.data.hit_die;
    this.subclass = await this.data.subclasses[0].name;
  }

  async fetchDataLevels(url, character) {
    const fetchingData = async () => {
      try {
        const response = await axios.get(url + character);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    this.levels = await fetchingData();
  }

  async fetchSpecificLevel(url) {
    const fetchingData = async () => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    this.levelsFeature = await fetchingData();
  }
}

const data = new CharacterData();
export default data;
