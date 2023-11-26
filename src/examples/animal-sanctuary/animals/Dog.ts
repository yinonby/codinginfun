import Animal from "./Animal";

export default class Dog extends Animal {

  constructor(animalName: string, animalId: string,
    race: string, birthDate: string) {
      
    super(animalName, animalId, "Dog", race, birthDate, true);
  }

}