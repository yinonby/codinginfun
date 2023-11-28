
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

> class Messanger {
>   public counter: number = 0;
>
>   constructor(public message: string) {
>   }
>
>   public getMessage(): string {
>     return this.message;
>   }
>
>   public printMessage(): void {
>     if (this.counter > 0) {
>       console.log(this.getMessage());
>     } else {
>       console.log(this.counter++);
>     }
>   }
> }
>
> const messanger: Messanger = new Messanger("I want an igloo!");
> messanger.printMessage();
> messanger.printMessage();
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
