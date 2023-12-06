
export default class Animal {

  constructor(
    private animalName: string,
    private animalId: string,
    private specie: string,
    private race: string,
    private birthDate: string,
    private isDomesticFlag: boolean) {
  }

  // getters/setters
  
  public getAnimalName(): string {
    return this.animalName;
  }

  public getAnimalId(): string {
    return this.animalId;
  }

  public getSpecie(): string {
    return this.specie;
  }

  public getRace(): string {
    return this.race;
  }

  public getBirthDate(): string {
    return this.birthDate;
  }

  public isDomestic(): boolean {
    return this.isDomesticFlag;
  }

}