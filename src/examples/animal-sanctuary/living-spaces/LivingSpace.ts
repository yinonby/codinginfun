import Animal from "../animals/Animal";

export default class LivingSpace {
  private animals: Animal[];

  constructor(
    private livingSpaceName: string,
    private livingSpaceType: string) {

    this.animals = [];
  }

  public getLivingSpaceName(): string {
    return this.livingSpaceName;
  }

  public getLivingSpaceThpe(): string {
    return this.livingSpaceType;
  }

  public getAnimals(): Animal[] {
    return this.animals;
  }

  // service methods

  public findAnimal(animalId: string): Animal | null {
    const animal: Animal | undefined =
      this.animals.find(e => e.getAnimalId() === animalId);
    if (! animal) { // in case animal not found
      return null;
    }
    return animal;
  }

  public addAnimal(animal: Animal): Animal {
    this.animals.push(animal);
    return animal;
  }

  // Removes an animal given by the animalId parameter, and returns the
  // animal that was removed, or null if not found.
  public removeAnimal(animalId: string): Animal | null {
    /*
     * The findIndex() method of Array instances returns the index
     * of the first element in an array that satisfies the provided
     * testing function. If no elements satisfy the testing
     * function, -1 is returned.
     * 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    const animalIdx: number =
      this.animals.findIndex(e => e.getAnimalId() === animalId);
    if (animalIdx === -1) { // in case animal not found
      console.error("animal not found", animalId);
      return null;
    }

    /*
     * The built-in method splice(start, deleteCount) removes <deleteCount>
     * elements starting from <start> position, and returns an array
     * with the items that were removed.
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    const removedAnimals: Animal[] = this.animals.splice(animalIdx, 1);
    return removedAnimals[0];
  }

  public printSummary(): void {
    const animalNames = this.animals.map(e => e.getAnimalName());
    const animalNamesStr = animalNames.join(", ");
    console.log("Living space: " + this.getLivingSpaceName() +
      ", animals: " + animalNamesStr);
  }

}