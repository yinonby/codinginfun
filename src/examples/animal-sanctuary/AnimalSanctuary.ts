import Animal from "./animals/Animal";
import CageLivingSpace from "./living-spaces/CageLivingSpace";
import PatioLivingSpace from "./living-spaces/PatioLivingSpace";
import RoomLivingSpace from "./living-spaces/RoomLivingSpace";
import AnimalSanctuaryLocation from "./locations/AnimalSanctuaryLocation";

export default class AnimalSanctuary {
  private locations: AnimalSanctuaryLocation[];

  constructor(private asName: string) {
    this.locations = [];
  }

  // getters/setters

  public getAsName(): string {
    return this.asName;
  }

  public getAsLocations(): AnimalSanctuaryLocation[] {
    return this.locations;
  }

  // API

  public printSummary(): void {
    console.log("Animal Sanctuary: " + this.getAsName());
    for (const asLocation of this.getAsLocations()) {
      asLocation.printSummary();
    }
  }

  public findLocation(locationName: string): AnimalSanctuaryLocation | null {
    const location: AnimalSanctuaryLocation | undefined =
      this.locations.find(e => e.getLocationName() === locationName);
    if (!location) {
      return null;
    }
    return location;
  }

  public createLocation(locationName: string,
    address: string): AnimalSanctuaryLocation {
    const location: AnimalSanctuaryLocation = new AnimalSanctuaryLocation(
      locationName, address);
    this.locations.push(location);
    return location;
  }

  public createCageLivingSpace(locationName: string,
    livingSpaceName: string): CageLivingSpace | null {
    const location = this.findLocation(locationName);

    // if this location doesn't exist, print an error and exit
    if (!location) {
      console.error("location not found", locationName);
      return null;
    }

    return location.createCageLivingSpace(livingSpaceName);
  }

  public createRoomLivingSpace(locationName: string,
    livingSpaceName: string): RoomLivingSpace | null {
    const location = this.findLocation(locationName);

    // if this location doesn't exist, print an error and exit
    if (!location) {
      console.error("location not found", locationName);
      return null;
    }

    return location.createRoomLivingSpace(livingSpaceName);
  }

  public createPatioLivingSpace(locationName: string,
    livingSpaceName: string): PatioLivingSpace | null {
    const location = this.findLocation(locationName);

    // if this location doesn't exist, print an error and exit
    if (!location) {
      console.error("location not found", locationName);
      return null;
    }

    return location.createPatioLivingSpace(livingSpaceName);
  }

  public addAnimal(animal: Animal, locationName: string,
    livingSpaceName: string): Animal | null {
    const location = this.findLocation(locationName);

    // if this location doesn't exist, print an error and exit
    if (!location) {
      console.error("location not found", locationName);
      return null;
    }

    // add the animal
    return location.addAnimal(animal, livingSpaceName);
  }

  public changeAnimalLivingSpace(animalId: string,
    currentLocationName: string, currentlivingSpaceName: string,
    newLocationName: string, newlivingSpaceName: string):
    AnimalSanctuaryLocation | null {

    const currentLocation: AnimalSanctuaryLocation | null =
      this.findLocation(currentLocationName);

    // if this location doesn't exist, print an error and exit
    if (!currentLocation) {
      console.error("current location not found", currentLocationName);
      return null;
    }

    const newLocation: AnimalSanctuaryLocation | null =
      this.findLocation(newLocationName);

    // if this location doesn't exist, print an error and exit
    if (!newLocation) {
      console.error("current location not found", newLocationName);
      return null;
    }

    // make sure the new living space exists in the new location
    if (!newLocation.findLivingSpace(newlivingSpaceName)) {
      console.error("new living space doesn't exist", newLocationName,
        newlivingSpaceName);
      return null;
    }

    // remove the animal from the current space
    const removedAnimal: Animal | null = currentLocation.removeAnimal(
      animalId, currentlivingSpaceName);
    if (!removedAnimal) {
      console.error("error removing animal", animalId);
      return null;
    }

    newLocation.addAnimal(removedAnimal, newlivingSpaceName);

    return newLocation;
  }

  public removeAnimal(animalId: string, locationName: string,
    livingSpaceName: string): void {
    const location = this.findLocation(locationName);

    // if this location doesn't exist, print an error and exit
    if (!location) {
      console.error("location not found", locationName);
      return;
    }

    // add the animal
    location.removeAnimal(animalId, livingSpaceName);
  }

}