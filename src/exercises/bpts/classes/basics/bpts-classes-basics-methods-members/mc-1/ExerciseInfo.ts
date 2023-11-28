
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

> class Restaurant {
>   constructor(public foodType: string) {
>   }
>
>   public getFoodType(): string {
>     return this.foodType;
>   }
>
>   public printFoodType(): void {
>     console.log(this.getFoodType());
>   }
> }
>
> const italianRestaurant: Restaurant = new Restaurant("Italian");
> italianRestaurant.printFoodType();
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
