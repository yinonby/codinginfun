import Animal from "./animals/Animal";
import CageLivingSpace from "./living-spaces/CageLivingSpace";
import LivingSpace from "./living-spaces/LivingSpace";
import PatioLivingSpace from "./living-spaces/PatioLivingSpace";
import RoomLivingSpace from "./living-spaces/RoomLivingSpace";

export default class AnimalSanctuaryLocation {
  private livingSpaces: LivingSpace[];

  constructor(private locationName: string, private address: string) {
    this.livingSpaces = [];
  }

  public getLocationName(): string {
    return this.locationName;
  }

  public getAddress(): string {
    return this.address;
  }

  public getLivingSpaces(): LivingSpace[] {
    return this.livingSpaces;
  }

  // service methods

  public findLivingSpace(livingSpaceName: string): LivingSpace | null {
    const livingSpace: LivingSpace | undefined = this.getLivingSpaces().find(
      e => e.getLivingSpaceName() === livingSpaceName
    )!;
    if (!livingSpace) {
      return null;
    }
    return livingSpace;
  }

  public addAnimal(animal: Animal, livingSpceName: string): Animal | null {
    const livingSpace = this.findLivingSpace(livingSpceName);

    // if this living space doesn't exist, print an error and exit
    if (!livingSpace) {
      console.error("location not found", livingSpceName);
      return null;
    }

    // add the animal
    return livingSpace.addAnimal(animal);
  }

  public removeAnimal(animalId: string, livingSpceName: string): Animal | null {
    const livingSpace = this.findLivingSpace(livingSpceName);

    // if this living space doesn't exist, print an error and exit
    if (!livingSpace) {
      console.error("location not found", livingSpceName);
      return null;
    }

    // add the animal
    return livingSpace.removeAnimal(animalId);
  }

  public createCageLivingSpace(livingSpaceName: string): CageLivingSpace {
    const livingSpace: LivingSpace = new CageLivingSpace(livingSpaceName);
    this.livingSpaces.push(livingSpace);
    return livingSpace;
  }

  public createRoomLivingSpace(livingSpaceName: string): RoomLivingSpace {
    const livingSpace: LivingSpace = new RoomLivingSpace(livingSpaceName);
    this.livingSpaces.push(livingSpace);
    return livingSpace;
  }

  public createPatioLivingSpace(livingSpaceName: string): PatioLivingSpace {
    const livingSpace: LivingSpace = new PatioLivingSpace(livingSpaceName);
    this.livingSpaces.push(livingSpace);
    return livingSpace;
  }

  public printSummary(): void {
    console.log("Location: " + this.getLocationName() +
      ", address: " + this.getAddress());
    for (const livingSpace of this.getLivingSpaces()) {
      livingSpace.printSummary();
    }
  }

}