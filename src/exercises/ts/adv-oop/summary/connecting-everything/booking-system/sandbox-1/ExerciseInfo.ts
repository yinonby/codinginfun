
import AdvancedCodingExerciseInfoAbs from "#infra/info/AdvancedCodingExerciseInfoAbs";
import { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const fullCodesandboxInstructionsMd: string = `
- file **payments/Payable.ts**, interface <<Payable>>
- file **products/Reservation.ts**, abstract class <<Reservation>>
- file **reservations/FixedDateReservation.ts**, abstract class <<FixedDateReservation>>
- file **reservations/DateRangeReservation.ts**, abstract class <<DateRangeReservation>>
- file **reservations/FlightReservation.ts**, class <<FlightReservation>>
- file **reservations/HotelReservation.ts**, class <<HotelReservation>>
- file **reservations/ActivityReservation.ts**, class <<ActivityReservation>>
- file **products/Product.ts**, abstract class <<Product>>
- file **products/GiftCard.ts**, class <<GiftCard>>
- file **orders/Order.ts**, class <<Order>>
- file **payments/PaymentOperationsProvider.ts**, interface <<PaymentOperationsProvider>>
- file **payments/managers/PaymentManager.ts**, class <<PaymentManager>>
- file **payments/adapters/ExternalPaymentProcessingAdapter.ts**, interface <<ExternalPaymentProcessingAdapter>>
- file **payments/adapters/stripe/StripeAPI.ts**, class <<StripeAPI>>
`;

export default class ExerciseInfo extends AdvancedCodingExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING_ADVANCED;
  }

  public getInitialFilePath(): string {
    return "payments" + "%2F" + "Payable.ts";
  }

  public getFullCodesandboxInstructionsMd(): string {
    return fullCodesandboxInstructionsMd.replace(/^\s+|\s+$/g, '');;
  }

}
