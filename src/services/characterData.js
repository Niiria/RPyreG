import axios from 'axios';

export default class CharacterData {
  fetchData(character) {
    this.characterName = character.toLowerCase();

    const fetchingData = async () => {
      try {
        const response = await axios.get(
          `https://www.dnd5eapi.co/api/classes/${this.characterName}`
        );
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };
    console.log(fetchingData().then((e) => console.log(e)));
  }
}
