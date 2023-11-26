import AnimalSanctuary from "./AnimalSanctuary";
import Cat from "./animals/Cat";
import Dog from "./animals/Dog";

export default class SampleAnimalSanctuary {

  public run(): void {
    const animalSanctuary: AnimalSanctuary =
      new AnimalSanctuary("Protectora de Málaga");

    animalSanctuary.createLocation("Primary location",
      "Calle animales 1, Malaga, Espana, 29000");

    animalSanctuary.createCageLivingSpace("Primary location", "cage C-1");
    animalSanctuary.createCageLivingSpace("Primary location", "cage C-2");
    animalSanctuary.createRoomLivingSpace("Primary location", "room R-1");
    animalSanctuary.createRoomLivingSpace("Primary location", "room R-2");
    animalSanctuary.createRoomLivingSpace("Primary location", "room R-3");
    animalSanctuary.createPatioLivingSpace("Primary location", "patio P-1");
    
    const dog1 = new Dog("Lola", "0001-1234-0000", "Galego", "2020-02-26");
    const dog2 = new Dog("Micky", "0001-1234-1111", "Mastin", "2018-05-02");
    const cat1 = new Cat("Mika", "0001-1234-2222", "Mezcla", "2020-01-05");
    const cat2 = new Cat("Rollo", "0001-1234-3333", "Siamese", "2022-01-17");

    animalSanctuary.addAnimal(dog1, "Primary location", "cage C-1");
    animalSanctuary.addAnimal(dog2, "Primary location", "cage C-2");
    animalSanctuary.addAnimal(cat1, "Primary location", "room R-1");
    animalSanctuary.addAnimal(cat2, "Primary location", "room R-1");

    animalSanctuary.printSummary();

    // change an animal's living space
    animalSanctuary.changeAnimalLivingSpace(dog1, "Primary location",
      "cage C-1", "Primary location", "patio P-1");
    animalSanctuary.printSummary();

    // remove an animal from the sanctuary
    animalSanctuary.removeAnimal(dog1.getAnimalId(), "Primary location",
      "cage C-1");
    animalSanctuary.printSummary();
  }

}