
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

>>>>
class Plant {
  constructor(private plantType: string) {}

  public getPlantType(): string {
    return this.plantType;
  }
}

class Flower extends Plant {
  constructor() {
    super("Flower");
  }
}

class Tree extends Plant {
  constructor() {
    super("Tree");
  }
}

const plants: Plant[] = [];
plants.push(new Flower());
plants.push(new Tree());
plants.push(new Flower());

for (let i = 0; i < plants.length; i++) {
  console.log(plants[i].getPlantType());
}
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
