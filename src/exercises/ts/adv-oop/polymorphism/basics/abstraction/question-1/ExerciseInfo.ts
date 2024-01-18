
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

>>>>
abstract class Plant {
  abstract grow(): void;
}

class Flower extends Plant {
  public grow(): void {
    console.log("I'm a growing flower!");
  }
}

class Tree extends Plant {
  public grow(): void {
    console.log("I'm a growing tree!");
  }
}

function growPlants(plants: Plant[]): void {
  for (let i = 0; i < plants.length; i++) {
    plants[i].grow();
  }
}

const plants: Plant[] = [];
plants.push(new Tree());
plants.push(new Tree());
plants.push(new Flower());

growPlants(plants);
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
