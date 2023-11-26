import Animal from "./Animal";

export default class Cat extends Animal {

  constructor(animalName: string, animalId: string,
    race: string, birthDate: string) {
      
    super(animalName, animalId, "Cat", race, birthDate, true);
  }

}