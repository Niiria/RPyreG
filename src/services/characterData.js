import axios from 'axios';

export default class CharacterData {
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
}
